export const getFacility = async () => {
  const facilityInfo = await chrome.storage.local.get(['facility']);
  if (!facilityInfo.facility) {
    return null;
  } else {
    return facilityInfo.facility;
  }
};

export const setFacility = async facilityInfo => {
  await chrome.storage.local.set({
    facility: facilityInfo,
  });
};
