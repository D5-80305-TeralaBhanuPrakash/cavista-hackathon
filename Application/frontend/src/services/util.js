const SERVER_URL = 'http://localhost:8080'

export function createError(error){
    return {status:'error',error}
}

export function createUrl(path){
    return `${SERVER_URL}/${path}`
}