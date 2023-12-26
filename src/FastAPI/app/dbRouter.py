from sqlalchemy.orm import sessionmaker
from fastapi import APIRouter
from typing import List
from src.PostgreSQL.postgresql import *
from src.PostgreSQL.schema import engine
from src.types.dataTypes import *


# make session
Session = sessionmaker(engine)

# define routers
userRouter = APIRouter(prefix="/user")
facilityRouter = APIRouter(prefix="/facility")
reserveRouter = APIRouter(prefix="/reserve")


# add new user info
@userRouter.post("/add", response_model=DefaultOutput)
def add_user(info: AddUser):
    db_insert_user(Session, info)
    return {"status": 200, "msg": "Insert Success."}


# register new facility
@facilityRouter.post("/register", response_model=DefaultOutput)
def register_facility(infos: List(RegisterFacility)):
    db_register_facility(Session, infos)
    return {"status": 200, "msg": "Insert Success."}


# add new reservation
@reserveRouter.post("/add", response_model=DefaultOutput)
def add_reservation(info: RegisterFacility):
    db_insert_data(Session, info)
    return {"status": 200, "msg": "Insert Success."}


# search reservations
@reserveRouter.post("/search", response_model=SearchOutput)
def search_reservation(query: SearchInput):
    results = db_query_data(Session, query)
    return {"result": [result.data for result in results]}


# remove reservation
@reserveRouter.post("/remove", response_model=DefaultOutput)
def remove_reservation(query: RemoveInput):
    db_delete_data(Session, query)
    return {"status": 200, "msg": "Delete Success."}


'''
# 경로 파라미터 값 얻기 (http://127.0.0.1:8000/items/3)
#@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}

# 쿼리 파라미터 값 얻기 (http://127.0.0.1:8000/items/?skip=0&limit=10)

addRouter = APIRouter(prefix="/add")
searchRouter = APIRouter(prefix="/search")
removeRouter = APIRouter(prefix="/remove")
'''