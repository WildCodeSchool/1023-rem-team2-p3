const tables = require("../tables");

const expireDiscount = async (req, res, next) => {
  try {
    const add = req.body;
    const discountAll = req.discount;

    const dateActuelle = new Date();
    const dateValidite = new Date(
      discountAll[add.discount_id - 1].duree_de_validite
    );
    if (dateActuelle.getTime() <= dateValidite.getTime()) {
      next();
    } else {
      await tables.discount.statusDiscount({
        discount_id: add.discount_id,
      });
      res.json({ message: "Code promo expiré" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = expireDiscount;
