from typing import List, Optional, Union
from datetime import date
from pydantic import BaseModel, Field


# add new user
class AddUser(BaseModel):
    email: str
    name: str
    phone: str


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

'''
test_data = {
        "facilityName": "[운영중(Operating)] 의과학연구센터(E7) 하자유욱준홀 (1111호)",
        "facilityRegisterUrl": "/urs/rsv/app/cmn/RsvAppCmn001M01.do?prgrId=0000000663",
        "facilityId": "0000000663",
        "facilityInfo": "의과학연구센터(E7) 하자 유욱준홀(1층 1111호) 예약",
        "facilityUsage": "행사,회의,세미나,강의",
        "facilityManager": "김아랑 (042-350-8153) ",
        "facilityRegisterDate": "2021-07-05",
        "resourceInfo": "의과학연구센터 하자 유욱준홀(1111호) 외 0건"
    }
'''

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