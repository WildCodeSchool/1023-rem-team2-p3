/* eslint-disable camelcase */
const tables = require("../tables");

const getAllStockEvents = async (req, res) => {
  try {
    const [stockEvents] = await tables.stock_event.getAllStockEvent();
    res.status(200).json(stockEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createStockEvent = async (req, res) => {
  try {
    const { event_id, user_id } = req.body;
    const checkUserInEvent = await tables.stock_event.checkUserEvent(
      event_id,
      user_id
    );
    // console.log("checkUserInEvent", checkUserInEvent);
    if (checkUserInEvent[0].length > 0) {
      return res
        .status(400)
        .json({ error: "L'utilisateur est déjà inscrit à cet événement" });
    }
    const [stockEvent] = await tables.stock_event.createStockEvent(
      event_id,
      user_id
    );
    const [updateResult] = await tables.stock_event.decrementEventQuantity(
      event_id
    );
    if (stockEvent.affectedRows === 1 && updateResult.affectedRows === 1) {
      return res.status(201).json({
        message:
          "Utilisateur ajouté dans evenement et decrementation avec success",
      });
    }
    return res.status(500).json({ error: "Failed to create Stock Event" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

const checkUserEvent = async (req, res) => {
  try {
    const { event_id, user_id } = req.body;
    const [stockEvent] = await tables.stock_event.checkUserEvent(
      event_id,
      user_id
    );
    res.status(200).json(stockEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStockEvents,
  createStockEvent,
  checkUserEvent,
};
