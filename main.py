import config
from fastapi import FastAPI
from src.FastAPI.app.dbRouter import facilityRouter, reserveRouter

# uvicorn server
app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "World"}

# mount APIRouters in the main FastAPI application
app.include_router(facilityRouter)
app.include_router(reserveRouter)