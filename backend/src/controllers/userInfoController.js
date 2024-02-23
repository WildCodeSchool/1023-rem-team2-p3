/* eslint-disable camelcase */
const fs = require("fs");
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const userInfo = await tables.user_info.getAllUserInfo();
    res.json(userInfo);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userInfo = await tables.user_info.getUserInfoById(userId);
    if (userInfo.length === 0) {
      res.status(404).json({ message: "User info not found..." });
    } else {
      res.json(userInfo[0]);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res) => {
  const { id } = req.params.id;
  const {
    taille,
    poids,
    pointure,
    pied_fort,
    poste,
    sexe,
    numero_de_telephone,
    adresse_postale,
    ville,
    user_id,
  } = req.body;

  const avatar = req.file.path;

  const updateFields = {};
  if (avatar !== undefined) {
    updateFields.avatar = avatar;
  }
  if (taille !== undefined) {
    updateFields.taille = taille;
  }
  if (poids !== undefined) {
    updateFields.poids = poids;
  }
  if (pointure !== undefined) {
    updateFields.pointure = pointure;
  }
  if (pied_fort !== undefined) {
    updateFields.pied_fort = pied_fort;
  }
  if (poste !== undefined) {
    updateFields.poste = poste;
  }
  if (sexe !== undefined) {
    updateFields.sexe = sexe;
  }
  if (numero_de_telephone !== undefined) {
    updateFields.numero_de_telephone = numero_de_telephone;
  }
  if (adresse_postale !== undefined) {
    updateFields.adresse_postale = adresse_postale;
  }
  if (ville !== undefined) {
    updateFields.ville = ville;
  }
  if (user_id !== undefined) {
    updateFields.user_id = user_id;
  }

  try {
    const result = await tables.user_info.updateSpecificUserInfoById(
      id,
      updateFields
    );
    if (result.affectedRows) {
      res.status(201).send("created");
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);

    res.status(500).send(error);
  }
};

const add = async (req, res, next) => {
  try {
    // Récupérer les informations utilisateur depuis le corps de la requête
    const userInfo = req.body;

    // Si un fichier d'avatar est téléchargé, mettre à jour le chemin de l'avatar
    if (req.file) {
      userInfo.avatar = req.file.path;
    }

    // Appeler la méthode addUserInfo avec les informations utilisateur
    const result = await tables.user_info.addUserInfo(userInfo);

    // Vérifier si l'opération d'insertion a réussi
    if (result.affectedRows) {
      res.json({ message: "User info added !" });
    } else {
      res.json({ message: "Error !" });
    }
  } catch (error) {
    next(error);
  }
};

// delete: async (req, res, next) => {
//     try {
//         const userId = req.params.userId;
//         const result = await UserInfoManager.queryDeleteUserInfoById(userId);
//         if (result.affectedRows) {
//             res.json({ message: 'User info deleted :)' });
//         } else {
//             res.status(404).json({ message: 'User info not found :(' });
//         }
//     } catch (error) {
//         next(error);
//     }
// }

module.exports = {
  browse,
  read,
  edit,
  add,
};
