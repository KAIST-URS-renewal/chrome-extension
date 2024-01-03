from typing import List, Optional, Union
from datetime import date
from pydantic import BaseModel, Field


'''(1) facility Router'''

# register new facility
class RegisterFacility(BaseModel):
    facilityName: str
    facilityRegisterUrl: str
    facilityId: str
    facilityInfo: str
    facilityUsage: str
    facilityManager: str
    facilityRegisterDate: date
    resourceInfo: str

class RegisterFacilities(BaseModel):
    infos: List[RegisterFacility]


'''(2) resource Router'''

# register new resource
class RegisterResource(BaseModel):
    resourceId: str
    resourceName: str
    resourceLocation: str | None
    resourceBldg: str | None
    resourceFloor: str | None
    resourceRoom: str | None
    resourceCapacity: str | None
    facilityId: str

class RegisterResources(BaseModel):
    infos: List[RegisterResource | None]


'''(3) user Router'''

# add new user
class AddUser(BaseModel):
    email: str
    name: str
    phone: str


'''(4) reservation Router'''

# add new reservation
class AddInput(BaseModel):
    name: str


# search reservations
class SearchInput(BaseModel):
    query: str

class SearchOutput(BaseModel):
    result: List[dict]


# remove reservation
class RemoveInput(BaseModel):
    query: str


# default output
class DefaultOutput(BaseModel):
    status: int
    msg: str