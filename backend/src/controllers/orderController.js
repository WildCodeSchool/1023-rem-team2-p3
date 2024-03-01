/* eslint-disable camelcase */
// eslint-disable-next-line consistent-return
const tables = require("../tables");

const getOrder = async (req, res, next) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);
    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const orders = await tables.orders.getOrderAll();
    console.info("orders", orders);
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

const addOrders = async (req, res, next) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);
    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
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

          res.json({ message: "Numéro de facture récupéré" });
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
