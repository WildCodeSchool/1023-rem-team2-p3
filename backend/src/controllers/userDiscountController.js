const tables = require("../tables");

const getUserDiscount = async (req, res, next) => {
  try {
    const userDiscount = await tables.user_discount.getUserDiscountAll();
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      res.status(401).json({ error: "Vous n'avez pas les droits" });
    } else {
      res.json(userDiscount);
    }
  } catch (err) {
    next(err);
  }
};

const addUserDiscount = async (req, res, next) => {
  try {
    const id = req.payload;
    const add = req.body;
    const discountAll = req.discount;

    const [test] = await tables.user_discount.getIdController({
      user_id: id,
      discount_id: add.discount_id,
    });
    if (test.length > 0) {
      res.json({
        message: "Code promo déjà utilisé par cet utilisateur",
      });
    } else if (discountAll[add.discount_id - 1].quantity > 0) {
      await tables.discount.decrementdiscountQuantity({
        discount_id: add.discount_id,
      });
      await tables.user_discount.addUserDiscount(id, add.discount_id);
      res.json({ message: "Code promos utilisé" });
    } else {
      await tables.discount.statusDiscount({
        discount_id: add.discount_id,
      });
      res.json({ message: "Code promos invalide" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getUserDiscount, addUserDiscount };
