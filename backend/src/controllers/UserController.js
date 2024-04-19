/* eslint-disable consistent-return */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const getAllUsers = async (req, res) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const [users] = await tables.user.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(401)
        .json({ error: "Email and password are required", status: 401 });
    } else {
      const [user] = await tables.user.getUserByEmail(email);
      if (user.length) {
        const isMatch = await argon2.verify(user[0].hashedPassword, password);
        if (typeof isMatch === "boolean" && isMatch) {
          const token = jwt.sign(
            { payload: user[0].id },
            process.env.SECRET_KEY_JWT,
            { expiresIn: "0.5h" }
          );
          res.status(200).json({ token, status: 200 });
        } else {
          res
            .status(401)
            .json({ message: "verifier vos informations", status: 401 });
        }
      } else {
        res
          .status(401)
          .json({ message: "l'adresse mail n'existe pas", status: 401 });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req, res) => {
  console.log("req :>> ", req);
  try {
    const userId = req.payload;
    console.log("userId :>> ", userId);
    const [user] = await tables.user.getUserById(userId);
    console.log("user :>> ", user);
    if (user.length) {
      delete user[0].hashedPassword;
      res.status(200).json({
        isLogged: true,
        message: `Welcome to THE LAB ${user[0].firstname} !`,
        data: user[0],
      });
    } else {
      res.status(404).send({
        isLogged: false,
        error: "User Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      isLogged: false,
      error: error.message,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const { lastname, firstname, email, hashedPassword, birthday } = req.body;
    const [results] = await tables.user.addUser(
      lastname,
      firstname,
      email,
      hashedPassword,
      birthday
    );
    if (!results.affectedRows) {
      res.json("User not added");
    } else {
      res.json("User added");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserWithoutPassword = async (req, res) => {
  try {
    const id = req.payload;
    const { lastname, firstname, birthday } = req.body;
    const [user] = await tables.user.updateUser(id, req.body);
    if (user.affectedRows) {
      res.status(200).json({ message: "Utilisateur modifié avec succès" });
    } else {
      res.status(401).send("Problème lors de la modification de l'utilisateur");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const id = req.payload;
    const { hashedPassword } = req.body;
    const [user] = await tables.user.updateUserOnlyPassword(id, hashedPassword);
    if (user.affectedRows) {
      res.status(200).json({ message: "Mot de passe modifié avec succès" });
    } else {
      res.status(401).send("Problème lors de la modification du mot de passe");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);
    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const [user] = await tables.user.deleteUser(id);
    if (user.affectedRows) {
      res.status(200).json({
        message: "La suppression de l'utilisateur a été effectuée avec succès",
      });
    } else {
      res.status(401).send("Problème lors de la suppression de l'utilisateur");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const logout = async (req, res) => {
//   try {
//     const id = req.payload;
//     const token = jwt.sign({ payload: id }, process.env.SECRET_KEY_JWT, {
//       expiresIn: "0h",
//     });

//     res.status(200).send(token);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// methode pour réinisialiser le mot de passe

const createPasswordResetToken = async (req, res) => {
  try {
    const { email } = req.body;
    const token = await tables.user.createPasswordResetToken(email);
    await tables.user.sendPasswordResetEmail(email, token, req);
    res.status(200).json({ message: "Email de réinitialisation envoyé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const [user] = await tables.user.getUserByResetToken(token);
    if (!user.length) {
      return res.status(404).json({ error: "Token invalide ou expiré" });
    }

    await tables.user.resetPassword(user[0], newPassword);
    res.status(200).json({ message: "Mot de passe réinitialisé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const setUserAdmin = async (req, res) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);
    if (admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const userId = req.body;
    console.log("userId", userId.id);
    const [result] = await tables.user.setUserAdmin(userId.id);
    if (result.affectedRows) {
      res.status(200).json({ message: "Utilisateur est maintenant Admin" });
    } else {
      res.status(401).send("Problème lors de la modification de l'utilisateur");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const setUserNotAdmin = async (req, res) => {
  try {
    const id = req.payload;
    const [admin] = await tables.user.getUserById(id);

    if (admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const userId = req.body;
    const [result] = await tables.user.setUserNotAdmin(userId.id);
    if (result.affectedRows) {
      res.status(200).json({ message: "Utilisateur n'est plus Admin" });
    } else {
      res.status(401).send("Problème lors de la modification de l'utilisateur");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const desactivateUser = async (req, res) => {
  try {
    const id = req.payload;
    const [result] = await tables.user.desactivateUser(id);
    if (result.affectedRows) {
      res.status(200).json({ message: "Utilisateur est maintenant désactivé" });
    } else {
      res.status(401).send("Problème lors de la modification de l'utilisateur");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const activateUser = async (req, res) => {
  try {
    const id = req.payload;
    const [result] = await tables.user.activateUser(id);
    if (result.affectedRows) {
      res.status(200).json({ message: "Utilisateur est maintenant activé" });
    } else {
      res.status(401).send("Problème lors de la modification de l'utilisateur");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  updateUserWithoutPassword,
  updatePassword,
  getUserByEmail,
  getUserById,
  deleteUser,
  // logout,
  createPasswordResetToken,
  resetPassword,
  setUserAdmin,
  setUserNotAdmin,
  desactivateUser,
  activateUser,
};
