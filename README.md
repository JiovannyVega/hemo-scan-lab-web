# HemoScan — Lab Web Portal

Web portal for laboratories in the **HemoScan / MediLab Connect** ecosystem: a blood test management platform where labs upload blood analysis results and patients consult them securely from a mobile app.

This repo contains the lab-facing React application. The patient mobile app lives in [`hemo-scan-patient-mobile`](https://github.com/JiovannyVega/hemo-scan-patient-mobile), and the original AI-powered hemoglobin analysis prototype in [`HemoScan`](https://github.com/JiovannyVega/HemoScan).

## What labs can do

- Upload and manage patient blood analysis results
- Manage patient records across a multi-lab / multi-patient data model
- Authenticate with secure login flows

## Project structure

```
src/
├── api/
│   ├── services/   # API service layer (axios-based calls to the backend)
│   └── utils/      # Request helpers
├── components/     # Shared UI (Header, Footer, ...)
└── pages/          # Route-level views
```

## Tech stack

React 19 · Vite · Tailwind CSS 4 · React Router DOM

## Getting started

```bash
npm install
npm run dev
```

---

**Status:** in active development. Part of the HemoScan ecosystem: Lab web (this repo) · [Patient mobile app](https://github.com/JiovannyVega/hemo-scan-patient-mobile) · [AI analysis prototype](https://github.com/JiovannyVega/HemoScan).
