/* eslint-disable radix */
const tables = require("../tables");

const getAllEvents = async (req, res) => {
  try {
    const [events] = await tables.event.getAllEvent();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEvent = async (req, res) => {
  const { city, date, address, quantity } = req.body;
  try {
    const [event] = await tables.event.createEvents(
      city,
      date,
      address,
      quantity
    );
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateEvents = async (req, res) => {
  const id = parseInt(req.params.id);
  const { city, date, address, quantity } = req.body;

  // Créer un objet pour stocker uniquement les champs à mettre à jour
  const updateFields = {};

  if (city !== undefined) {
    updateFields.city = city;
  }
  if (date !== undefined) {
    updateFields.date = date;
  }
  if (address !== undefined) {
    updateFields.address = address;
  }
  if (quantity !== undefined) {
    updateFields.quantity = quantity;
  }

  try {
    // Mettre à jour uniquement les champs qui ont été envoyés dans la requête
    const [event] = await tables.event.updateEvent(id, updateFields);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const [event] = await tables.event.deleteEvent(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const [event] = await tables.event.getEventById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvents,
  deleteEvent,
  getEventById,
};
