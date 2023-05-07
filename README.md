![Yellow Modern SEO Tutorial Youtube Thumbnail (850 × 480 px) (850 × 312 px)](https://user-images.githubusercontent.com/110364637/236683994-ffe1795e-e957-4c2c-b60e-04937c342d88.png)

## Description

Rj Oliverio's Portfolio is developed to showcase his professional information in an accessible web app and presents a compilation and/or summary of academic and professional attainments that exemplified his qualifications, education, skills, training, and experiences.

## Technologies used:

- NextJS
- Typescript
- TailwindCSS
- Laravel
- MySQL
- Docker

## 🔗 Links

- Client :: https://rjoliverio.vercel.app/
- Server :: https://portfolio-api-8ltm.onrender.com/

## Prerequites:

- [Laravel](https://laravel.com/docs/10.x)
- [Node LTS](https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Manual Setup

CLIENT SETUP

1. `cd client`
2. `cp .env.example .env.local`
3. Fill nescessary environment variables
4. Run `yarn` to install dependencies
5. Run `yarn dev` to serve the client
6. Open `http://localhost:3000` to view the app

API SETUP

1. `cd api`
2. `cp .env.example .env`
3. Fill nescessary environment variables
4. Run `composer install` to install dependencies
5. Run `php artisan key:generate` to generate app key
6. Run `php artisan migrate` to migrate tables
7. Run `php artisan serve` to serve the api
8. Open `http://localhost:8000` to check the server

DB SETUP

- This is up to your preference. You may use XAMPP MySQL Server and just update your .env with the database credentials used.

## Docker Setup

1. Create .env variables for each projects locally (Follow steps 1-3 in the manual setup above)
2. `docker compose build` or `docker compose up --build` (this will automatically build and run the containers)
3. `docker compose up` (To stop docker containers, run: `docker compose down`)
