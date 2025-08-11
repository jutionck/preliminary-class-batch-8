-- Active: 1714909454857@@127.0.0.1@5432@moba_db
-- Active: 1754621961401@@127.0.0.1@27017

-- Coba pikirkan kira-kira ada beraap tabel dari kode "mobaBattle.js"
-- Kemudian tabel apa saja yang dibuat
-- Relasi yang dibuat

CREATE TABLE heroes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  hp INT CHECK (hp > 0), -- constraint
  damage INT CHECK (damage > 0) -- constraint
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

-- many to many
CREATE TABLE team_heroes (
  team_id INT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  hero_id INT NOT NULL REFERENCES heroes(id) ON DELETE CASCADE,
  PRIMARY KEY (team_id, hero_id)
);

-- DDL (CREATE, ALTER, DROP, TRUNCATE)

-- DML (INSERT, SELECT, UPDATE, DELEET) - CRUD

INSERT INTO heroes (name, hp, damage) VALUES
('Miya', 100, 25),
('Layla', 100, 45),
('Zilong', 100, 30),
('Moskov', 100, 25),
('Kadita', 100, 45),
('Eudora', 100, 30);

SELECT * FROM heroes;

INSERT INTO teams (name) VALUES ('Team A'), ('Team B');

SELECT * FROM teams;

INSERT INTO team_heroes (team_id, hero_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6);

SELECT * FROM team_heroes;

-- UPDATE
UPDATE heroes SET name = 'Fanny', hp = 150 WHERE name = 'Fany'; -- syarat kalo kolomnya di set UNIQUE

UPDATE heroes SET hp = 150, damage = 50 WHERE name = 'Eudora';

-- DELETE
DELETE FROM heroes WHERE id = 9;

-- SELECT
-- SELECT {*|column_name} FROM {table} {opt: WHERE ORDER BY LIMIT}
-- SELECT {*|column_name} FROM {table_1} {join: inner, left, right} {table_2} ON table_1.id = table_2.id

SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id

-- TAMPILKAN
-- 1. Hero yang huruf belakangnya itu 'a'
SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id
WHERE h.name LIKE '%a';


-- 2. Hero yang jika ditotalkan hp dan damage > 180
SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id
WHERE h.hp + h.damage > 180;

SELECT t.name, SUM(h.hp) as total_hp FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id
GROUP BY t.name
HAVING SUM(h.hp) > 370;


-- 3. Total Hero yang damage nya > 30
SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id
WHERE h.damage > 30;

-- 4. Hero yang range hp nya 100 - 125
SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id
WHERE h.hp >= 100 AND h.hp <= 125;

-- 5. Hero yang hp dan damagenya genap
SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
INNER JOIN teams t ON t.id = th.team_id
INNER JOIN heroes h ON h.id = th.hero_id
WHERE (h.hp % 2 = 0) AND (h.damage % 2 = 0);

-- SELECT t.name, h.name, h.hp, h.damage FROM team_heroes th 
-- INNER JOIN teams t ON t.id = th.team_id
-- INNER JOIN heroes h ON h.id = th.hero_id
-- WHERE h.hp > 100 and damage > 25
-- ORDER BY h.hp DESC
-- LIMIT 1;