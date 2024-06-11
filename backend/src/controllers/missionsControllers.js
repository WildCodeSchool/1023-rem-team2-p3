const tables = require("../tables");

const getAllMissions = async (req, res) => {
  try {
    const [mission] = await tables.missions.getAllMissions();
    res.status(200).json(mission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMissions = async (req, res) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      res.status(401).json({ error: "Vous n'avez pas les droits" });
    } else {
      const { mission, difficulty, poste } = req.body;
      const [results] = await tables.missions.addMissions(
        mission,
        difficulty,
        poste
      );
      if (results.affectedRows) {
        res.json("Mission added");
      } else {
        res.json("Mission not added");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMissions = async (req, res) => {
  try {
    const ids = req.payload;
    const [admin] = await tables.user.getUserById(ids);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      res.status(401).json({ error: "Vous n'avez pas les droits" });
    } else {
      const { id } = req.params;
      const [user] = await tables.missions.updateMissions(id, req.body);
      if (user.affectedRows) {
        res
          .status(200)
          .json({ message: "La mission a été modifiée avec succès !" });
      } else {
        res
          .status(401)
          .json({ message: "Problème lors de la modification de la mission." });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMissions,
  addMissions,
  updateMissions,
};
