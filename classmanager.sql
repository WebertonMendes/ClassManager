-- DROP/CREATE DATABASE
CREATE DATABASE classmanager;

-- CREATE TABLE "Teachers"
CREATE TABLE "teachers" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "birth_date" TIMESTAMP NOT NULL,
    "education_level" TEXT NOT NULL,
    "class_type" TEXT NOT NULL,
    "subjects_taught" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT 'now()'
);

-- CREATE TABLE "Students"
CREATE TABLE "students" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT,
    "avatar_url" TEXT,
    "email" TEXT,
    "birth_date" TIMESTAMP,
    "school_year" TEXT,
    "workload" INTEGER,
    "teacher_id" INTEGER,
    "created_at" TIMESTAMP DEFAULT 'now()'
);

-- CREATE FOREING KEYS
ALTER TABLE "students" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id");

-- INSERT TEACHER
INSERT INTO teachers (avatar_url, name, birth_date, education_level, class_type, subjects_taught) VALUES ('https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'Ina Towner', '1993-09-16', 'Mestrado', 'Presencial', 'Matemática, Física');

-- INSERT STUDENT
INSERT INTO students (avatar_url, name, email, birth_date, school_year, workload, teacher_id) VALUES ('https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'Rose Ogden', 'rosebogden@dayrep.com', '1990-10-22', '2º ano do ensino médio', 40, '1');