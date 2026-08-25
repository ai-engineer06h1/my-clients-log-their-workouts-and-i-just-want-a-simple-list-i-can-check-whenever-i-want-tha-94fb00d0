from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import asyncpg

app = FastAPI()

DATABASE_URL = os.environ.get("DATABASE_URL")

class Workout(BaseModel):
    id: str
    clientName: str
    date: str

@app.get("/api/recent-workouts", response_model=list[Workout])
async def get_recent_workouts():
    try:
        # Connect to the database
        conn = await asyncpg.connect(DATABASE_URL)
        # Query to get the most recent workouts
        rows = await conn.fetch("SELECT id, client_name, date FROM workouts ORDER BY date DESC")
        # Convert rows to a list of Workout objects
        workouts = [Workout(id=str(row['id']), clientName=row['client_name'], date=row['date']) for row in rows]
        return workouts
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        await conn.close()