from sqlalchemy import select
from .schema import Facility, Resource, User, Reservation
        

'''(1) facility Router'''

# register new facility
def db_register_facility(sessmaker, infos):
    with sessmaker.begin() as session:
        for info in infos.infos:
            # usage가 없는 경우, 여러 개인 경우도 고려하기
            for usage in info.facilityUsage.split(','):
                facility = Facility(
                        facilityName = info.facilityName,
                        facilityRegisterUrl = info.facilityRegisterUrl,
                        facilityId = info.facilityId,
                        facilityInfo = info.facilityInfo,
                        facilityUsage = usage,
                        facilityManager = info.facilityManager,
                        facilityRegisterDate = info.facilityRegisterDate,
                        resourceInfo = info.resourceInfo
                    )
                session.add(facility)
    return

# search facilities
def db_query_facility(sessmaker, id, usage):
    with sessmaker() as session:
        results = session.scalars(
                select(Facility).
                where((not id or Facility.facilityId == id),
                      (not usage or Facility.facilityUsage == usage))
            ).all()
    return results


'''(2) resource Router'''

# register new resource
def db_register_resource(sessmaker, infos):
    with sessmaker.begin() as session:
        for info in infos.infos:
            if not info:
                continue
            resource = Resource(
                    resourceId = info.resourceId,
                    resourceName = info.resourceName,
                    resourceLocation = info.resourceLocation,
                    resourceBldg = info.resourceBldg,
                    resourceFloor = info.resourceFloor,
                    resourceRoom = info.resourceRoom,
                    resourceCapacity = info.resourceCapacity,
                    facilityId = info.facilityId
                )
            session.add(resource)
    return


# search resources
def db_query_resource(sessmaker, rscId, facId):
    with sessmaker() as session:
        results = session.scalars(
                select(Resource).
                where((not rscId or Resource.resourceId == rscId),
                      (not facId or Resource.facilityId == facId))
            ).all()
    return results


'''(3) user Router'''

# add new user
def db_insert_user(sessmaker, info):
    with sessmaker() as session:
        result = session.scalars(
                select(User).
                where(User.email == info.email)
            ).first()
        if (result == None):
            with sessmaker.begin() as session2:
                user = User(
                        email = info.email,
                        name = info.name,
                        phone = info.phone
                    )
                session2.add(user)
    return


'''(4) reservation Router'''

# insert new data
def db_insert_data(sessmaker, info):
    with sessmaker.begin() as session:
        session.add(Reservation(data=info))
    return

# query data
def db_query_data(sessmaker, query):
    with sessmaker() as session:
        results = session.scalars(
                select(Reservation).
                where(Reservation.data["tag"].astext==query.tag)
            ).all()
    return results

# delete data
def db_delete_data(sessmaker, query):
    with sessmaker.begin() as session:
        result = session.scalars(
                select(Reservation).
                where(Reservation.data["tag"].astext==query.tag)
            ).first()
        session.delete(result)
    return

'''
if __name__ == '__main__':
    # get DB url
    POSTGRES_DB_URL = os.environ["POSTGRES_DB_URL"]

    # create db connection
    engine = create_engine(POSTGRES_DB_URL, echo=True)

    # make session
    Session = sessionmaker(engine)
    session = Session()

    # sample data
    test_data1 = {
        "tag": "sport",
        "studentId": 20191234,
        "datetime": "2023-12-31"
        }

    test_data2 = {
        "tag": "study",
        "studentId": 12345678,
        "datetime": "2023-01-01"
        }
'''