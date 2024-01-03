import os
from sqlalchemy import create_engine, Integer, String
from sqlalchemy.types import DateTime, Date
from sqlalchemy.sql import func
from sqlalchemy.orm import DeclarativeBase, mapped_column
from sqlalchemy.dialects.postgresql import JSONB


# Base class
class Base(DeclarativeBase):
    pass


# table: facility
class Facility(Base):
    __tablename__ = "facility"
    id = mapped_column(Integer, primary_key=True) # primary id
    timestamp = mapped_column(DateTime, default=func.now()) # db timestamp
    facilityName = mapped_column(String, nullable=False)
    facilityRegisterUrl = mapped_column(String, nullable=False)
    facilityId = mapped_column(String, nullable=False, index=True)
    facilityInfo = mapped_column(String, nullable=False)
    facilityUsage = mapped_column(String, nullable=False, index=True)
    facilityManager = mapped_column(String, nullable=False)
    facilityRegisterDate = mapped_column(Date, nullable=False)
    resourceInfo = mapped_column(String, nullable=False)


# table: resource
class Resource(Base):
    __tablename__ = "resource"
    id = mapped_column(Integer, primary_key=True) # primary id
    timestamp = mapped_column(DateTime, default=func.now()) # db timestamp
    resourceId = mapped_column(String, nullable=False)
    resourceName = mapped_column(String, nullable=False)
    resourceLocation = mapped_column(String, nullable=True) # nullable
    resourceBldg = mapped_column(String, nullable=True)     # nullable
    resourceFloor = mapped_column(String, nullable=True)    # nullable
    resourceRoom = mapped_column(String, nullable=True)     # nullable
    resourceCapacity = mapped_column(String, nullable=True) # nullable
    facilityId = mapped_column(String, nullable=False)


# table: user
class User(Base):
    __tablename__ = "user"
    email = mapped_column(Integer, primary_key=True)
    name = mapped_column(String, nullable=False)
    phone = mapped_column(String, nullable=True)
    

# table: reservation
class Reservation(Base):
    __tablename__ = "reservation"
    id = mapped_column(Integer, primary_key=True)
    data = mapped_column(JSONB, nullable=False)


# get DB url from environmant variables
POSTGRES_DB_URL= os.environ["POSTGRES_DB_URL"]

# create db connection
engine = create_engine(POSTGRES_DB_URL, echo=True)

# create schema (using table metadata and engine)
Base.metadata.create_all(engine)