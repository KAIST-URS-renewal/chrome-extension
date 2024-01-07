export const getReservation = async () => {
  const reservationInfo = await chrome.storage.local.get(['reservation']);
  if (!reservationInfo.reservation) {
    return null;
  } else {
    return reservationInfo.reservation;
  }
};

export const setReservation = async reservationInfo => {
  await chrome.storage.local.set({
    reservation: reservationInfo,
  });
};
