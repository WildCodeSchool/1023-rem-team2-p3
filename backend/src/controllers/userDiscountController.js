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
  // if (dateActuelle.getTime() > dateValidite.getTime()) {
  //   tables.discount.statusDiscount({
  //     discount_id: add.discount_id,
  //   });
  // }
  // if (discountAll[add.discount_id - 1].quantity > 0) {
  //   tables.discount.statusDiscount({
  //     discount_id: add.discount_id,
  //   });
  // }

  // userDiscount.map((disc) => {
  //   if (disc.status === false) {
  //     res.json({ message: "Code promos invalide" });
  //   } else {
  //     if (
  //       disc.discount_id === add.discount_id &&
  //       disc.user_id === add.user_id
  //     ) {
  //       res.json({
  //         message: "Code promo déjà utilisé par cet utilisateur",
  //       });
  //     } else {
  //       next();
  //     }
  //   }
  // });
  try {
    const add = req.body;
    const discountAll = await tables.discount.getDiscountAll();
    const userDiscount = await tables.user_discount.getUserDiscountAll();
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
    // const test = userDiscount.map((uDiscount) => {
    //   uDiscount.discount_id === add.discount_id;
    //   uDiscount.user_id === add.user_id;
    // });
    // const userDiscount = await tables.user_discount.addUserDiscount(add);
    // res.json(userDiscount);
    console.info("first", dateActuelle.getTime() <= dateValidite.getTime());
    if (discountAll[add.discount_id - 1].status) {
      if (dateActuelle.getTime() <= dateValidite.getTime()) {
        // console.info("add.discount_id", add.discount_id);

        // for (let i = 0; i < userDiscount.length; i += 1) {}
        // userDiscount.map((uDiscount) => {
        //   if (
        //     uDiscount.discount_id === add.discount_id &&
        //     uDiscount.user_id === add.user_id
        //   ) {
        //     res.json({
        //       message: "Code promo déjà utilisé par cet utilisateur",
        //     });
        //   }
        // else {
        const updateResult = await tables.discount.decrementdiscountQuantity({
          discount_id: add.discount_id,
        });
        console.info("updateResult", updateResult);
        if (discountAll[add.discount_id - 1].quantity > 0) {
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
        // }
        // });
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

    // await tables.discount.decrementdiscountQuantity({
    //   discount_id: add.discount_id,
    // });
    // const result = await tables.user_discount.addUserDiscount(add);
    // console.info("result", result);
    // res.json({ message: "Code promos utilisé" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUserDiscount, addUserDiscount };
