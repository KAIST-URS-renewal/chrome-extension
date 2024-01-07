export const getMyReservation = async () => {
  const myReservationInfo = await chrome.storage.local.get(['myReservation']);
  if (!myReservationInfo.myReservation) {
    return null;
  } else {
    return myReservationInfo.myReservation;
  }
};

export const setMyReservation = async myReservationInfo => {
  await chrome.storage.local.set({
    myReservation: myReservationInfo,
  });
};
