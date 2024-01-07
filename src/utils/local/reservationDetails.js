export const getReservationDetails = async () => {
  const reservationDetails = await chrome.storage.local.get([
    'reservationDetails',
  ]);
  if (!reservationDetails.reservationDetails) {
    return null;
  } else {
    return reservationDetails.reservationDetails;
  }
};

export const setReservationDetails = async reservationDetails => {
  await chrome.storage.local.set({
    reservationDetails: reservationDetails,
  });
};
