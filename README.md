# AI Support Ticket Triage

A web app for solo founders who handle customer support through Gmail. Users connect their Gmail account, and the app classifies incoming emails, flags urgent ones with an AI summary, and drafts suggested replies from the founder's FAQ.

CIS 375, Group D. Live deployment: https://cis-375-group-project.vercel.app/

## Tech stack

TypeScript, Next.js (App Router) with Tailwind CSS, Supabase (Postgres, Auth, Row Level Security), Gmail API (`googleapis`), OpenAI API, Vitest and Playwright for tests, GitHub Actions for CI, Vercel for deployment.

## Prerequisites

Install these first and check each with the version command.

| Tool | Where to get it | Check |
|---|---|---|
| Git | https://git-scm.com/downloads | `git --version` |
| Node.js (current LTS) | https://nodejs.org | `node --version` and `npm --version` |
| A code editor (we use VS Code) | https://code.visualstudio.com | |

You also need a GitHub account with access to this repository.

## Setup

1. Clone the repository and move into it:

   ```bash
   git clone https://github.com/salehumich/cis-375-group-project.git
   cd cis-375-group-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Warnings about deprecated packages are normal. Red errors are not.

3. Create your local environment file by copying the template:

   ```bash
   # macOS / Linux / Git Bash
   cp .env.example .env.local

   # Windows PowerShell
   Copy-Item .env.example .env.local
   ```

4. Fill in the values in `.env.local`. The team lead will give you the values privately. **Never paste them into the repo, a pull request, an issue, or a shared document.**

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000. If the page loads, setup is done. Press `Ctrl+C` in the terminal to stop the server.

## Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run lint` | Check code style and common mistakes |
| `npm test` | Run unit tests (Vitest) |
| `npm run test:e2e` | Run end-to-end tests (Playwright). On first use, run `npx playwright install` to download the test browsers |

Run `npm run lint` and `npm test` before opening a pull request.

## Project layout

| Path | Contents |
|---|---|
| `app/` | Pages and API routes (Next.js App Router) |
| `lib/` | Shared server-side code, such as Gmail helpers |
| `types/` | Shared TypeScript types used across the team |
| `tests/` | Unit tests (Vitest) |
| `e2e/` | End-to-end tests (Playwright) |
| `.env.example` | Template listing the environment variables the app needs |

## Team

Group D: Robert Floros (team lead, foundation and integration), Jacob Oyer (Gmail integration), Matthew Filiposki (frontend), Mohmed Saleh (AI pipeline).