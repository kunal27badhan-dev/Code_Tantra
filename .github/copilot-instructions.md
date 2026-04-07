# Copilot instructions for this repo

## Build, test, and lint
- Install dependencies: `npm install`
- Start quiz backend (Express + MongoDB): `npm run start` (or `npm run dev` for nodemon)
- Legacy server (ranked results API): `node index.js`
- Tests: `npm test`
- Single test: `npm test -- __tests__/parseItems.test.js` (or `npx jest __tests__/parseItems.test.js`)
- Watch tests: `npm run test:watch`

## High-level architecture
- Two Express apps:
  - `backend/src/app.js` is the current quiz backend. It serves static HTML from the repo root, exposes `/api/quiz/*` and `/api/github/*`, and provides `/health`.
  - `index.js` is the legacy server for `/api/results` using the `routes/` + `services/` + `utils/` pipeline.
- Quiz flow:
  - `backend/src/routes/quiz.js` calls `services/ollamaService.js` to generate questions, stores them in Mongo via `models/Quiz.js`, and returns questions without `correctAnswer`.
  - Submissions are scored server-side in `routes/quiz.js`, with skill levels from `services/skillService.js`.
- GitHub issue discovery:
  - `backend/src/routes/github.js` calls `services/githubService.js`, which queries GitHub Search API for “good first issue”.
- Legacy data pipeline:
  - `routes/api.js` → `services/dataService.js` → `utils/fetchData.js` + `utils/parseItems.js` + `utils/rankItems.js`.

## Key conventions
- Quiz answers are **index-based**: `correctAnswer` is a number pointing into `options`; submitted `answers[]` must align by question index.
- Quiz generation returns questions **without** `correctAnswer` for the client; only the backend stores the correct answers.
- Ollama integration expects a JSON array in the model response and falls back to local question templates on timeout/parse failure.
- GitHub issues are fetched for up to **3 languages** (first 3 provided).
- Configuration is via dotenv:
  - Quiz backend uses `MONGODB_URI` and optional `GITHUB_TOKEN`; Ollama uses `OLLAMA_BASE_URL`/`OLLAMA_MODEL`.
  - Legacy server expects `API_URL` (required), with optional `TOP_N` and `PORT`.
