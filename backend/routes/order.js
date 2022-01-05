const router = require("express").Router();

const Order = require("../models/Order");
const verification = require("./verifyToken");

router.post("/", verification.verifyToken, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    newOrder.save();
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verification.verifyTokenandAdmin, async (req, res) => {
  try {
    let updatedOrder = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verification.verifyTokenandAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verification.verifyTokenandAdmin, async (req, res) => {

  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(
  "/find/:userId",
  verification.verifyTokenandAuthorization,
  async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });

      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

router.get("/income", async(req, res) => {
  const productId=req.query.pid;
  console.log(productId);

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } , ...(productId && {
          products:{$elemMatch:{productId}}
        })} },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },

        },
        {$sort:{_id:-1}}
      ]);
      res.status(200).json(income);
    } catch (e) {
      res.status(500).json(err);
    }
  });

module.exports = router;
