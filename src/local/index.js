export function getStorage(key) {
    return localStorage.getItem(key);
}

export function setStorage(key, value) {
    localStorage.setItem(key, value);
}