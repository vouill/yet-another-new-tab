export const setItem = (key, value, cb) =>
  chrome.storage
    ? chrome.storage.sync.set({ [key]: value }, cb)
    : cb(localStorage.setItem(key, JSON.stringify(value)));

export const getItem = (key, cb) =>
  chrome.storage
    ? chrome.storage.sync.get([key], cb)
    : cb({ [key]: JSON.parse(localStorage.getItem(key)) });

console.log(chrome.storage);
