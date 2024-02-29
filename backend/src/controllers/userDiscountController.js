/* eslint-disable camelcase */
// eslint-disable-next-line consistent-return
/* eslint-disable no-unused-vars */
const tables = require("../tables");

const getUserDiscount = async (req, res, next) => {
  try {
    const userDiscount = await tables.user_discount.getUserDiscountAll();
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    res.json(userDiscount);
  } catch (err) {
    next(err);
  }
};

const addUserDiscount = async (req, res, next) => {
  try {
    const id = req.payload;
    const add = req.body;
    const discountAll = await tables.discount.getDiscountAll();
    const userDiscount = await tables.user_discount.getUserDiscountAll();
    const [test] = await tables.user_discount.getIdController({
      user_id: id,
      discount_id: add.discount_id,
    });
    const dateActuelle = new Date();
    const dateValidite = new Date(
      discountAll[add.discount_id - 1].duree_de_validite
    );
    if (discountAll[add.discount_id - 1].status) {
      if (dateActuelle.getTime() <= dateValidite.getTime()) {
        if (test.length > 0) {
          res.json({
            message: "Code promo déjà utilisé par cet utilisateur",
          });
        } else {
          if (discountAll[add.discount_id - 1].quantity > 0) {
            const updateResult =
              await tables.discount.decrementdiscountQuantity({
                discount_id: add.discount_id,
              });
            const result = await tables.user_discount.addUserDiscount(id, add.discount_id);
            res.json({ message: "Code promos utilisé" });
          } else {
            const up = await tables.discount.statusDiscount({
              discount_id: add.discount_id,
            });
            res.json({ message: "Code promos invalide" });
          }
        }
      } else {
        const up = await tables.discount.statusDiscount({
          discount_id: add.discount_id,
        });
        res.json({ message: "Code promo expiré" });
      }
    } else {
      res.json({ message: "Code promos invalide" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getUserDiscount, addUserDiscount };
