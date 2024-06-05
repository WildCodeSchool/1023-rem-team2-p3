/* eslint-disable camelcase */
const tables = require("../tables");

const getUserMissions = async (req, res) => {
  try {
    const [userMissions] = await tables.user_missions.getAllUserMissions();
    res.json(userMissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addUserMissions = async (req, res) => {
  try {
    const id = req.payload;
    const [missions] = await tables.missions.getAllMissions();
    const [user] = await tables.user.getUserById(id);

    const missionsToAdd = missions.filter(
      (miss) => miss.poste === user[0].poste || miss.poste === "all"
    );

    const userMissionPromises = missionsToAdd.map((miss) => {
      return tables.user_missions
        .getUserMissions(id, miss.id)
        .then(([result]) => {
          if (!result || result.length === 0) {
            return tables.user_missions.addUserMission(id, miss.id);
          }
          return { affectedRows: 0 }; // Indicate that mission already exists for user
        });
    });

    const results = await Promise.all(userMissionPromises);
    const affectedRows = results.reduce(
      (acc, result) => acc + result.affectedRows,
      0
    );

    if (affectedRows > 0) {
      res.json(`${affectedRows} userMissions added`);
    } else {
      res.json("userMissions not added");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserMissions = async (req, res) => {
  try {
    const user_id = req.payload;
    const add = req.body;
    const { id } = req.params;

    const [uMission] = await tables.user_missions.updateUserMissions(
      add.status,
      user_id,
      id
    );
    if (uMission.affectedRows) {
      res
        .status(200)
        .json({ message: "Le status a été modifié avec succès !" });
    } else {
      res.status(401).send("Problème lors de la modification du status.");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUserMissions, addUserMissions, updateUserMissions };
