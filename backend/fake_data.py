from database import SessionLocal, engine
from models import Campaign, Base

def seed_data():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    if db.query(Campaign).count() == 0:  # Only seed if empty
        campaigns = [
            {"name": "Summer Sale", "status": "Active", "clicks": 230, "cost": 1200, "impressions": 5400},
            {"name": "Winter Bonanza", "status": "Paused", "clicks": 140, "cost": 850, "impressions": 3200},
            {"name": "Festive Offers", "status": "Active", "clicks": 410, "cost": 1600, "impressions": 8000},
            {"name": "New Year Blast", "status": "Active", "clicks": 300, "cost": 1300, "impressions": 6200},
            {"name": "Monsoon Magic", "status": "Paused", "clicks": 120, "cost": 700, "impressions": 2900},
            {"name": "Diwali Dhamaka", "status": "Active", "clicks": 500, "cost": 1800, "impressions": 8500},
            {"name": "Valentine Vibes", "status": "Paused", "clicks": 200, "cost": 950, "impressions": 4000},
            {"name": "Holi Hungama", "status": "Active", "clicks": 420, "cost": 1500, "impressions": 7800},
            {"name": "Autumn Offers", "status": "Paused", "clicks": 110, "cost": 600, "impressions": 2500},
            {"name": "Flash Friday", "status": "Active", "clicks": 450, "cost": 1700, "impressions": 8300},
        ]

        for c in campaigns:
            db.add(Campaign(**c))

        db.commit()
    db.close()
