from sqlalchemy.orm import sessionmaker
from fastapi import APIRouter
from src.PostgreSQL.postgresql import *
from src.PostgreSQL.schema import engine
from src.types.dataTypes import *


# make session
Session = sessionmaker(engine)

# define routers
facilityRouter = APIRouter(prefix="/facility")
resourceRouter = APIRouter(prefix="/resource")
userRouter = APIRouter(prefix="/user")
reserveRouter = APIRouter(prefix="/reserve")


'''(1) facility Router'''

# register new facility
@facilityRouter.post("/register", response_model=DefaultOutput)
def register_facility(infos: RegisterFacilities):
    db_register_facility(Session, infos)
    return {"status": 200, "msg": "Insert Success."}


# search facilities
@facilityRouter.get("/search")
def search_facility(facilityId=None, facilityUsage=None):
    result = db_query_facility(Session, facilityId, facilityUsage)
    return result


'''(2) resource Router'''

# register new resource
@resourceRouter.post("/register", response_model=DefaultOutput)
def register_resource(infos: RegisterResources):
    db_register_resource(Session, infos)
    return {"status": 200, "msg": "Insert Success."}


# search resources
@resourceRouter.get("/search")
def search_resource(resourceId=None, facilityId=None):
    result = db_query_resource(Session, resourceId, facilityId)
    return result


'''(3) user Router'''

# add new user info
@userRouter.post("/add", response_model=DefaultOutput)
def add_user(info: AddUser):
    db_insert_user(Session, info)
    return {"status": 200, "msg": "Insert Success."}


'''(4) reservation Router'''

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