/* eslint-disable camelcase */
const tables = require("../tables");

const getOrder = async (req, res, next) => {
  try {
    const orders = await tables.orders.getOrderAll();
    console.info("orders", orders);
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

const addOrders = async (req, res, next) => {
  try {
    const get = req.body;
    console.info("payment_bill_number", get.payment_bill_number);
    console.info("product_id", get.product_id);
    // const resultPayment = await tables.payment.readAll();
    // console.info("resultPayment", resultPayment);
    const [result] = await tables.payment.getPaymentById({
      bill_number: get.payment_bill_number,
    });
    console.info("result", result.length);
    if (result.length) {
      if (!result[0].status) {
        console.info("payment_bill_number", get.payment_bill_number);

        const addOrder = await tables.orders.addOrder({
          payment_bill_number: get.payment_bill_number,
          product_id: get.product_id,
        });
        if (addOrder.affectedRows) {
          console.info("addOrder", addOrder);
          await tables.payment.updateStatusPayment({
            bill_number: get.payment_bill_number,
          });

          res.json({ message: "Numéro de facture récupérer" });
        } else {
          res.json({ message: "err" });
        }
      } else {
        res.json({ message: "Numéro de facture déjà utilisé" });
      }
    } else {
      res.json({ message: "Numéro de facture saisi incorrect" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getOrder, addOrders };
