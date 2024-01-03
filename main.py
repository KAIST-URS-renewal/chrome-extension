import config
from fastapi import FastAPI
from src.FastAPI.app.dbRouter import facilityRouter, resourceRouter, userRouter, reserveRouter

# uvicorn server
app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "World"}

# mount APIRouters in the main FastAPI application
app.include_router(facilityRouter)
app.include_router(resourceRouter)
app.include_router(userRouter)
app.include_router(reserveRouter)