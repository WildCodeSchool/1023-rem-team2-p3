/* eslint-disable camelcase */
const tables = require("../tables");

const scoreCardController = {
  addScoreCard: async (req, res) => {
    try {
      const [result] = await tables.score_card.create(req.body);
      if (result.affectedRows) {
        res.json({ message: "Score Card added" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },
  getScoreCard: async (req, res) => {
    try {
      const [score_card] = await tables.score_card.readAll();
      res.send(score_card);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getScoreCardById: async (req, res) => {
    try {
      const { id } = req.params;
      const [score_card] = await tables.score_card.read(id);
      res.send(score_card);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  updateScoreCardById: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { photo_user, note_id } = req.body;
    // Créer un objet pour stocker uniquement les champs à mettre à jour
    const updateFields = {};

    if (photo_user !== undefined) {
      updateFields.photo_user = photo_user;
    }
    if (note_id !== undefined) {
      updateFields.note_id = note_id;
    }
    try {
      const [result] = await tables.score_card.update(id, updateFields);
      if (result.affectedRows) {
        res.json({ message: "Note updated" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },

  deleteScoreCard: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
      const [result] = await tables.score_card.delete(id);
      if (result.affectedRows) {
        res.json({ message: "Note deleted" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },
};

module.exports = scoreCardController;
