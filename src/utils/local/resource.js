export const getResource = async () => {
  const resourceInfo = await chrome.storage.local.get(['resource']);
  if (!resourceInfo.resource) {
    return null;
  } else {
    return resourceInfo.resource;
  }
};

export const setResource = async resourceInfo => {
  await chrome.storage.local.set({
    resource: resourceInfo,
  });
};
