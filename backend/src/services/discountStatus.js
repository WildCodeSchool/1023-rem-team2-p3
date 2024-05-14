const tables = require("../tables");

const discountStatus = async (req, res, next) => {
  try {
    const add = req.body;
    const discountAll = await tables.discount.getDiscountAll();
    if (discountAll[add.discount_id - 1].status) {
      req.discount = discountAll;
      next();
    } else {
      res.json({ message: "Code promos invalide" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = discountStatus;
