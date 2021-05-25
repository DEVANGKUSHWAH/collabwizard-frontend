
// Get token from local storage
export function getToken(key){
    return localStorage.getItem(key)
}

// Set token to local storage
export function setToken(key,value){
    localStorage.setItem(key,value);
}

// Remove token from local storage
export function removeToken(key){
    localStorage.removeItem(key);
}

