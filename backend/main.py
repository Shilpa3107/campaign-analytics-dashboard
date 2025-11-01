from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal
from models import Campaign
from fake_data import seed_data

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

seed_data()  # Seed mock data

@app.get("/campaigns")
def get_campaigns():
    db = SessionLocal()
    campaigns = db.query(Campaign).all()
    db.close()
    return [
        {
            "id": c.id,
            "name": c.name,
            "status": c.status,
            "clicks": c.clicks,
            "cost": c.cost,
            "impressions": c.impressions
        }
        for c in campaigns
    ]
