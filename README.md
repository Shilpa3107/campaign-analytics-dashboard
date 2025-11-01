# Campaign Analytics Dashboard

This is a simple analytics dashboard that shows marketing campaign data like status, clicks, cost and impressions.
The backend is built with FastAPI (Python) and the frontend is made using Next.js + TailwindCSS.

## Features
 - Shows all campaigns in a clean table view
 - Filter campaigns based on status (All / Active / Paused)
 - Light & Dark mode support
 - Data is fetched live from backend API
 - Neatly structured UI so it’s easy to extend later

## Tech Stack

| Layer | Tech Used |
|-------|-----------|
| UI / Frontend | Next.js 14+, React |
| Styling | TailwindCSS |
| Backend API | FastAPI (Python) |

## Folder Structure
- /backend           → python fastapi server
- /marketing-dashboard
   - /app            → next.js pages + components
   - /public         → assets
- README.md

## API Endpoint Used

| Endpoint | Description |
|----------|-------------|
| `GET /campaigns` | returns all campaign data in JSON format |

## How To Run Locally
1. Start backend
```bash
cd backend
uvicorn main:app --reload
```

2. Start frontend
```bash
cd marketing-dashboard
npm install
npm run dev
```

3. Then open:
```bash
http://localhost:3000
```

## Future Enhancements
- Authentication (login)
- Campaign create/edit feature
- Charts (clicks vs cost)
- Export CSV / Excel
- Pagination
