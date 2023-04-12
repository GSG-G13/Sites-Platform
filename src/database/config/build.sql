BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(255) NOT NULL,
  photo_website VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO users(username, email, password, photo) VALUES ('admin','admin@localhost.com','$2a$10$hcarVj2MRTYH8uKUwavEouyMoozBb35piGNg.ssd3Uv5CNzVIR8xq','https://i.pinimg.com/564x/31/1b/2d/311b2def17cba6b7f05ac1d2ea976786.jpg');
INSERT INTO users(username, email, password, photo) VALUES ('user','user@localhost.com','$2a$10$7T7ral8QCgnm9NM5wmEFxOTy7r9F6TOmvrWFsBAkn5IwSvTdgj6.K', 'https://i.pinimg.com/564x/aa/9a/91/aa9a91a270416d5bb3018f837c02c535.jpg');

INSERT INTO posts (title, url, description, photo_website, user_id) VALUES ('Admin Post','render-1' ,'Fake Post from Admin','https://i.pinimg.com/564x/a6/e5/24/a6e524f0aec626a3e3dd0a39f119dba7.jpg', 1);
INSERT INTO posts (title, url, description, photo_website, user_id) VALUES ('User Post','render-2' ,'Fake Post from User','https://i.pinimg.com/236x/44/a2/85/44a28598571a587917696643384ebebd.jpg', 2);

COMMIT;
