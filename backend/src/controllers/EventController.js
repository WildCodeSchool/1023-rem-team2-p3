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
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const { city, date, address, quantity } = req.body;
    const [event] = await tables.event.createEvents(
      city,
      date,
      address,
      quantity
    );
    if (event.affectedRows) {
      res.status(200).send("Evenement ajouté");
    } else {
      res
        .status(401)
        .send({ error: "Problème lors de l'ajout de l'évenement" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateEvents = async (req, res) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const eventId = parseInt(req.params.id);
    const { city, date, address, quantity } = req.body;
    const [event] = await tables.event.updateEvent(eventId, req.body);
    if (event.affectedRows) {
      res.status(200).json({ message: "Evenement modifié" });
    } else {
      res.status(401).json({ error: "Problème lors de la modification" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const [event] = await tables.event.deleteEvent(id);
    if (event.affectedRows) {
      res.status(200).json({ message: "Evenement supprimé" });
    } else {
      res.status(401).json({ error: "Problème lors de la suppression" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const [event] = await tables.event.getEventById(id);
    if (!event.length) {
      res.status(404).json({ error: "Evenement non Existant" });
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const desactivatedEvents = async (req, res) => {
  try {
    const { id } = req.body;
    const [result] = await tables.event.desactivateEvent(parseInt(id, 10));
    if (result.affectedRows) {
      res.status(200).json({ message: "Evenement est maintenant désactivé" });
    } else {
      res.status(401).send("Problème lors de la modification de l'évenement");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvents,
  deleteEvent,
  getEventById,
  desactivatedEvents,
};
