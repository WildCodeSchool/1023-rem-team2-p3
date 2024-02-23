DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS stock_event;
DROP TABLE IF EXISTS discount;
DROP TABLE IF EXISTS payment;
DROP TABLE IF EXISTS user_discount;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS note;
DROP TABLE IF EXISTS score_card;
DROP TABLE IF EXISTS privilege;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS orders;
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR(80) NOT NULL,
    firstname VARCHAR(80) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL,
    is_admin ENUM ('user', 'admin', 'superAdmin') NOT NULL,
    birthday DATE NOT NULL,
    status ENUM('active', 'inactive') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE event (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(80) NOT NULL,
    date DATE NOT NULL,
    address VARCHAR(250) NOT NULL,
    quantity INT NOT NULL,
    status ENUM('active', 'inactive') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE stock_event (
    id INT primary key NOT NULL AUTO_INCREMENT,
    event_id INT NOT NULL,
    CONSTRAINT fk_stockEvent_event_id FOREIGN KEY (event_id) REFERENCES event(id),
    user_id INT NOT NULL,
    CONSTRAINT fk_stockEvent_user_id FOREIGN KEY (user_id) REFERENCES user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE discount (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    percent_value INT NOT NULL,
    promo_code VARCHAR(80) NOT NULL,
    quantity INT NOT NULL,
    duree_de_validite TIMESTAMP NOT NULL,
    status BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE payment (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    bill_number VARCHAR(80) NOT NULL,
    amount DECIMAL NOT NULL,
    payment_method VARCHAR(80) NOT NULL,
    status VARCHAR(80) NOT NULL,
    discount_id INT,
    CONSTRAINT fk_payment_discount_id FOREIGN KEY (discount_id) REFERENCES discount(id),
    user_id INT NOT NULL,
    CONSTRAINT fk_payment_user_id FOREIGN KEY (user_id) REFERENCES user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user_discount (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    CONSTRAINT fk_user_discount_user_id FOREIGN KEY (user_id) REFERENCES user(id),
    discount_id INT NOT NULL,
    CONSTRAINT fk_user_discount_discount_id FOREIGN KEY (discount_id) REFERENCES discount(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    avatar VARCHAR(250),
    taille INT NOT NULL,
    poids INT NOT NULL,
    pointure INT NOT NULL,
    pied_fort ENUM('gauche', 'droit') NOT NULL,
    poste ENUM('gardien','défenseur','milieu','attaquant') NOT NULL,
    sexe ENUM('masculin', 'féminin') NOT NULL,
    numero_de_telephone VARCHAR(80),
    adresse_postale TEXT,
    ville VARCHAR(80),
    user_id INT NOT NULL,
    CONSTRAINT fk_user_info_user_id FOREIGN KEY (user_id) REFERENCES user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE note (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    note_physique INT,
    note_vitesse INT,
    note_passe INT,
    note_tir INT,
    note_dribble INT,
    note_vista INT,
    note_cf INT,
    note_plongeon INT,
    note_arrets INT,
    note_dega INT,
    note_pied_faible INT,
    note_gen INT,
    user_id INT NOT NULL,
    CONSTRAINT fk_note_user_id
    FOREIGN KEY (user_id) REFERENCES user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE score_card (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    photo_user VARCHAR(250),
    note_id INT NOT NULL,
    CONSTRAINT fk_score_card_note_id
    FOREIGN KEY (note_id) REFERENCES note(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (80) NOT NULL,
    img VARCHAR(255) NOT NULL,
    color VARCHAR(80) NOT NULL
);

CREATE TABLE privilege (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    product_id INT NOT NULL,
    CONSTRAINT fk_privilege_product_id
    FOREIGN KEY (product_id) REFERENCES product(id),
    user_id INT,
    CONSTRAINT fk_privilege_user_id
    FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(80) NOT NULL,
    payment_id INT NOT NULL,
    CONSTRAINT fk_order_payment_id FOREIGN KEY (payment_id) REFERENCES payment(id),
    product_id INT,
    CONSTRAINT fk_order_product_id FOREIGN KEY (product_id) REFERENCES product(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);