/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
const tables = require("../tables");

const getPayment = async (req, res, next) => {
  try {
    const payment = await tables.payment.readAll();
    res.json(payment);
  } catch (err) {
    next(err);
  }
};

const addPayment = async (req, res, next) => {
  try {
    const { amount, payment_method, discount_id, user_id } = req.body;
    console.info("discount_id", discount_id);
    const [exist] = await tables.payment.queryGetPaymentById({ user_id });
    console.info("exist", exist);
    const [userDiscount] = await tables.user_discount.getIdController({
      user_id: user_id,
      discount_id: discount_id,
    });
    if (userDiscount.length) {
      const [percent_value] = await tables.discount.queryAddDiscountById({
        id: discount_id,
      });
      console.info("percentValue", percent_value);
      const newAmount =
        amount - amount * (percent_value[0].percent_value / 100);
      console.info("newAmout", newAmount);
      await tables.payment.queryAddPayment({
        amount: newAmount,
        payment_method,
        discount_id,
        user_id,
      });
      res.json({ message: "Payment en cours avec code promo" });
    } else {
      await tables.payment.queryAddPayment({
        amount,
        payment_method,
        discount_id,
        user_id,
      });
      res.json({ message: "Payment en cours sans code promo" });
    }
  } catch (err) {
    next(err);
  }
};

const updatePayment = async (req, res) => {
  try {
    const { bill_number } = req.params;
    console.info("id", bill_number);
    console.info("req.body", req.body);
    const [result] = await tables.payment.updatePayment(bill_number, req.body);
    console.info("result", result.affectedRows);
    if (result.affectedRows) {
      res.status(200).json({ message: "Payment mis à jour" });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    await tables.payment.deletePayment({ bill_number: id });
    res.json({ message: "Payment a bien été supprimer" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getPayment, addPayment, updatePayment, deletePayment };
