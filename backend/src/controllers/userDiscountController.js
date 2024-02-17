/* eslint-disable camelcase */
const tables = require("../tables");

const getUserDiscount = async (req, res, next) => {
  try {
    const userDiscount = await tables.user_discount.getUserDiscountAll();

    res.json(userDiscount);
  } catch (err) {
    next(err);
  }
};

const addUserDiscount = async (req, res, next) => {
  try {
    const add = req.body;
    const discountAll = await tables.discount.getDiscountAll();
    const userDiscount = await tables.user_discount.getUserDiscountAll();
    const [test] = await tables.user_discount.getIdController({
      user_id: add.user_id,
      discount_id: add.discount_id,
    });
    console.info("two", test);
    console.info("userDiscount", userDiscount);
    const dateActuelle = new Date();
    console.info("add", add.discount_id);
    console.info("date", discountAll);
    console.info(
      "date[add.discount_id - 1].duree_de_validite",
      discountAll[add.discount_id - 1].duree_de_validite
    );
    const dateValidite = new Date(
      discountAll[add.discount_id - 1].duree_de_validite
    );
    console.info("first", dateActuelle.getTime() <= dateValidite.getTime());
    if (discountAll[add.discount_id - 1].status) {
      if (dateActuelle.getTime() <= dateValidite.getTime()) {
        if (test.length > 0) {
          res.json({
            message: "Code promo déjà utilisé par cet utilisateur",
          });
        } else {
          console.info("first", test.length);
          if (discountAll[add.discount_id - 1].quantity > 0) {
            const updateResult =
              await tables.discount.decrementdiscountQuantity({
                discount_id: add.discount_id,
              });
            console.info("updateResult", updateResult);
            const result = await tables.user_discount.addUserDiscount(add);
            console.info("result", result);
            res.json({ message: "Code promos utilisé" });
          } else {
            const up = await tables.discount.statusDiscount({
              discount_id: add.discount_id,
            });
            console.info("up", up);
            res.json({ message: "Code promos invalide" });
          }
        }
      } else {
        const up = await tables.discount.statusDiscount({
          discount_id: add.discount_id,
        });
        console.info("up", up);
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
