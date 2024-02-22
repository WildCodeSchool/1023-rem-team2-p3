/* eslint-disable camelcase */
// const discountModel = require("../models/discountModel");
const tables = require("../tables");

const getDiscount = async (req, res, next) => {
  try {
    const discount = await tables.discount.getDiscountAll();

    res.json(discount);
  } catch (err) {
    next(err);
  }
};

const addDiscount = async (req, res, next) => {
  try {
    const promo = req.body;
    const discount = await tables.discount.addDiscount(promo);

    res.json(discount);
  } catch (err) {
    next(err);
  }
};

const updateDiscount = async (req, res) => {
  // eslint-disable-next-line radix
  const id = parseInt(req.params.id);
  const { percent_value, promo_code, quantity, duree_de_validite } = req.body;

  const updateFields = {};

  if (percent_value !== undefined) {
    updateFields.percent_value = percent_value;
  }
  if (promo_code !== undefined) {
    updateFields.promo_code = promo_code;
  }
  if (quantity !== undefined) {
    updateFields.quantity = quantity;
  }
  if (duree_de_validite !== undefined) {
    updateFields.duree_de_validite = duree_de_validite;
  }

  try {
    const [discount] = await tables.discount.updateDiscount(id, updateFields);
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const deleteDiscount = async (req, res) => {
//   const { id } = req.params;
//   console.info("id", id);
//   try {
//     await tables.discount.deleteDiscount({ discount_id: id });

//     res.json({ message: "Discount a bien été supprimer" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = { getDiscount, addDiscount, updateDiscount };
