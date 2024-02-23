/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)

    // Insert fake data into the 'user' table

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into user (lastname, firstname, email, hashedPassword, is_admin, birthday) values (?,?,?,?,?,?)",
          [
            faker.person.lastName(),
            faker.person.firstName(),

            faker.internet.email(),
            faker.internet.password(),
            "user",
            faker.date.birthdate(),

            "active",
          ]
        )
      );
    }

    //   ]
    //     )
    //   );
    // }

    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into user (lastname, firstname, email, hashedPassword, is_admin, birthday, status) values (?,?,?,?,?,?,?)",
    //       [
    //         faker.name.lastName(),
    //         faker.name.firstName(),
    //         faker.internet.email(),
    //         faker.internet.password(),
    //         "user",
    //         faker.date.birthdate(),
    //         "active",
    //       ]
    //     )
    //   );
    // }

    // await database.query("truncate event");

    // // Insert fake data into the 'event' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into event(city, date, address, quantity) values (?,?,?,?)",
    //       [faker.lorem.word()]
    //     )
    //   );
    // }
    // await database.query("truncate discount");

    // // Insert fake data into the 'discount' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into discount(percent_value, promo_code, quantity, duree_de_validite) values (?,?,?,?)",
    //       [faker.lorem.word()]
    //     )
    //   );
    // }
    // await database.query("truncate payment");

    // // Insert fake data into the 'payment' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into payment(bill_number, amount, payment_method, status, discount_id, user_id) values (?,?,?,?,?,?)",
    //       [faker.lorem.word()]
    //     )
    //   );
    // }

    // await database.query("truncate user_info");

    // Insert fake data into the 'user_info' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into user_info(avatar, taille, poids, pointure, pied_fort, poste, sexe, numero_de_telephone, adresse_postale, ville, user_id) values (?,?,?,?,?,?,?,?,?,?,?)",
    //       [
    //         faker.image.avatar(), // Génère une image avatar aléatoire
    //         faker.datatype.number(), // Génère un nombre aléatoire
    //         faker.datatype.number(), // Génère un nombre aléatoire
    //         faker.datatype.number(), // Génère un nombre aléatoire
    //         faker.lorem.word(), // Génère un mot aléatoire pour pied_fort
    //         faker.lorem.word(), // Génère un mot aléatoire pour le poste
    //         faker.random.arrayElement(['male', 'female']), // Génère un sexe aléatoire
    //         faker.phone.phoneNumber(), // Génère un numéro de téléphone aléatoire
    //         faker.address.streetAddress(), // Génère une adresse postale aléatoire
    //         faker.address.city(), // Génère une ville aléatoire
    //         faker.random.uuid(), // Génère un identifiant utilisateur aléatoire (vous devrez peut-être adapter cela en fonction de votre système d'authentification)
    //       ]
    //     )
    //   );
    // }
    // await database.query("truncate note");

    // Insert fake data into the 'note' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into note(note_physique, note_vitesse, note_passe, note_tir, note_dribble, note_vista, note_cf, note_plongeon, note_arrets, note_dega, note_pied_faible, note_gen, user_id) values (50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 1),(50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 2), (50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 3), (50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 4), (50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 5)"
    //     )
    //   );
    // }
    // await database.query("truncate score_card");

    // // Insert fake data into the 'score_card' table
    // for (let i = 0; i < 10; i += 1) {
    // queries.push(
    // database.query(
    //   "insert into score_card (photo_user, note_id) values ('url_photo_1.jpg', 1)"
    // )
    // );
    // }
    // await database.query("truncate privilege");

    // // Insert fake data into the 'privilege' table

    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into privilege(name, price, product_id, user_id) values ('premium', 49, 1, 1), ('basic', 39, 1, 2)"
    //     )
    //   );
    // }

    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into privilege(name, price, product_id, user_id) values (?,?,?,?)",
    //       [faker.lorem.word()]
    //     )
    //   );
    // }

    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into privilege(name, price, product_id, user_id) values ('premium', 49, 1, 1), ('basic', 39, 1, 2)"
    //     )
    //   );
    // }

    // await database.query("truncate product");

    //     await database.query("truncate product");

    //     // Insert fake data into the 'product' table
    // for (let i = 0; i < 10; i += 1) {

    //   queries.push(
    //     database.query(
    //       "insert into product(name, img, size, color) values (?,?,?,?)",
    //       [
    //         faker.commerce.productName(), // Génère un nom de produit aléatoire
    //         faker.image.imageUrl(), // Génère une URL d'image aléatoire pour le produit
    //         faker.random.arrayElement(['S', 'M', 'L', 'XL']), // Génère une taille aléatoire parmi les choix disponibles
    //         faker.commerce.color(), // Génère une couleur aléatoire pour le produit
    //       ]
    //     )
    //   );
    // queries.push(
    //  database.query(
    //    "insert into product(name, img, size, color) values ('classic', 'crumpon1.jpg', 35, 'black')"
    //  )
    // );

    // }
    // await database.query("truncate order");

    // // Insert fake data into the 'order' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into order(order_number, payment_id, product_id) values (?,?,?)",
    //       [faker.lorem.word()]
    //     )
    //   );
    // }
    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
