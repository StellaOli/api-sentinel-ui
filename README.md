# API Sentinel UI

Frontend application for **API Sentinel**, a platform for monitoring API availability, uptime, and performance metrics.

This project provides a modern dashboard for visualizing API status, response times, uptime statistics, and historical monitoring data.

---

## Features

### Implemented

#### Authentication

* Login page
* JWT authentication flow
* Integration with NestJS backend
* Token storage
* Automatic redirection after login

#### Frontend Infrastructure

* Next.js 16
* TypeScript
* App Router
* Tailwind CSS
* Axios integration

---

## In Development

* Dashboard
* Monitor cards
* Protected routes
* Monitoring tables
* Loading states
* Statistics view

---

## Planned Features

* Historical charts
* Response time graphs
* Uptime visualization
* Monitor details page
* Dark mode
* Search and filters
* Real-time updates
* Notifications UI

---

## Tech Stack

### Frontend

* Next.js 16
* TypeScript
* Tailwind CSS
* Axios
* React Query
* Recharts
* Lucide Icons

### Backend

API Sentinel Backend:

* NestJS
* Prisma ORM
* PostgreSQL
* Redis
* JWT Authentication
* Swagger

---

## Project Structure

```text
app/
│
├── login/
│   └── page.tsx
│
├── dashboard/
│   └── page.tsx
│
└── layout.tsx

components/

lib/
├── api.ts
├── auth.ts
└── types.ts

public/
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Application:

```text
http://localhost:3001
```

---

## Architecture

```text
User
 │
 ▼
Login Page
 │
 ▼
JWT Authentication
 │
 ▼
Dashboard
 │
 ▼
Monitors
 │
 ├── Status
 ├── Uptime
 ├── Response Time
 └── History
```

---

## Roadmap

### Phase 1 — Foundation ✅

* [x] Next.js setup
* [x] TypeScript
* [x] Tailwind CSS
* [x] Axios configuration

### Phase 2 — Authentication ✅

* [x] Login page
* [x] JWT integration
* [x] Backend communication
* [x] Automatic redirect

### Phase 3 — Dashboard 🚧

* [ ] Dashboard layout
* [ ] Monitor cards
* [ ] Statistics cards
* [ ] Table view

### Phase 4 — Analytics

* [ ] Uptime charts
* [ ] Response time charts
* [ ] Historical metrics

### Phase 5 — UX Improvements

* [ ] Dark mode
* [ ] Search
* [ ] Filters
* [ ] Responsive design

---

## Current Status

🚀 Active development

The authentication flow is fully functional and integrated with the backend. The next milestone is building the dashboard and visual analytics experience.
