# Digital Wonderland — blog / marketing starter

A white-label full-stack starter: home, about, services, work/gallery, blog
(with an admin editor), and contact pages. White background, charcoal text,
`#f54320` accent, "W" mark logo.

- **Frontend:** React, Vite, TanStack Router + Query, BEM + Sass. See
  `frontend/README.md`.
- **Backend:** Node, Express, MySQL (plain `mysql2`, no ORM), JWT + bcrypt
  admin auth. See `backend/README.md`.

## Quick start (two terminals)

**Terminal 1 — backend**
```bash
cd backend
npm install
cp .env.example .env
# edit .env: MySQL credentials, a real JWT_SECRET, and your admin email/password
mysql -u root -p < schema.sql
npm run seed
npm run dev
```

**Terminal 2 — frontend**
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. Log in at `/login` with the `ADMIN_EMAIL` /
`ADMIN_PASSWORD` from `backend/.env`, then `/admin` to write your first post.

## What's solid vs. what's a starting point

Solid: admin auth (single admin, JWT), full post CRUD with drafts vs.
published, a contact form that writes to the database, and the complete
white/charcoal/orange visual system in Sass, built to be reskinned per client.

Left as a starting point: cover images are a URL field with no upload
endpoint yet, and there's no admin UI for reading contact submissions (the
`GET /api/contact` route exists, just no page consuming it). Multi-admin /
role-based auth would also need a real `users` table if a client project
grows past one editor.

## Using this as a white-label base

This is meant to be duplicated per client: swap the three color tokens and
two fonts in `frontend/src/styles/_variables.scss`, swap the logo mark, edit
the marketing copy, and it's a different site. Pair it with the `optiknerve`
starter (photo blog with galleries/EXIF captions) or an ecommerce starter
from the same toolkit when a project needs more than a blog.
