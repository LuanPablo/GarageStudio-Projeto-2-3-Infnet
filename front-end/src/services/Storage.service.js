export const prefixKey = '@ggeasy/' 

export const setStorageItem = (key, value) => {
    localStorage.setItem(`${prefixKey}${key}`, value)
}

export const getStorageItem = (key) => {
    return localStorage.getItem(`${prefixKey}${key}`)
}

export const removeStorageItem = (key) => {
    localStorage.removeItem(`${prefixKey}${key}`)
}