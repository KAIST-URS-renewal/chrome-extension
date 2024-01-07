export const getUserInfo = async () => {
  const userInfo = await chrome.storage.local.get(['userInfo']);
  if (!userInfo.userInfo) {
    return null;
  } else {
    return userInfo.userInfo;
  }
};

export const setUserInfo = async userInfo => {
  await chrome.storage.local.set({
    userInfo: userInfo,
  });
};
