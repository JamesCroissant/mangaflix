# Manga Flix

This app is full-stack app for sharing your favorite manga between users.
It allows you to post, search and review various mangas on app.

![screencapture-localhost-3000-2024-02-23-11_57_51](https://github.com/ka/recipe-app/assets/66394413/6633928b-6a52-4c18-a9d3-5a7ae898f941)

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
