# MindScore Frontend (React, Create React App)

## Run
1. Start the backend (in the folder with main.py and Mental_Health_Model.pkl):
   `uvicorn main:app --reload`
2. In this folder:
   `npm install`
   `npm start`
3. The app opens at http://localhost:3000

During development, the `"proxy"` line in package.json forwards `/predict` to http://127.0.0.1:8000, so no CORS setup is needed.

## Production / separate hosts
Copy `.env.example` to `.env`, set `REACT_APP_API_URL` to your API URL, restart `npm start`, and add CORS to main.py:

```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://your-frontend-domain"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Score scale
`MAX_SCORE` in `src/utils/constants.js` (default 100) sets the gauge maximum. Change it to match your model's output range.
