# Manga Flix

This application is for sharing your favorite manga you want to read.
It is a full-stack application with user authentication, CRUD function, and can be searching and filtering manga, adding to favorite list, comment review.

![screencapture-localhost-3000-2024-02-23-11_57_51](https://github.com/JamesCroissant/mangaflix/blob/main/public/images/mangaflix.png)

## Features

- User Authentication
- CRUD Function
- Search manga
- Filter 
- Add favorite list
- Add Review

## Requirements

- Node v21.7.1 or above

## Setup

### Env file

Create .env file（environment file） in root directory

```
DATABASE_URL=

NEXTAUTH_SECRET=
NEXT_PUBLIC_BASE_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_PRESET=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### DB Migration

```zsh
npx prisma migrate reset
```

### Install dependencies

```zsh
npm install
```

## Running with dev mode

Start dev mode

```zsh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Upcoming Features

- Create user profile page
