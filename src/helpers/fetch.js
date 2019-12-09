export const fetchApi = (url, method='GET', body=null, _headers={}) => {
    const fullURL = 'http://localhost:5000/api/'+url
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true', 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        ..._headers
    }
    const params = {fullURL,method, headers }
    if(method !== 'GET' && body) 
    params.body = JSON.stringify(body)
    // get token from localstorage
    // if token add fullHeaders.token = 'Authorization ${token}'
    
    return fetch(fullURL, params)
      .then(res => res.json())
      .catch(error => console.error('Errorrrrr:', error))
}

export const fetchPost = (url, body, headers) => {
    return fetchApi(url, 'POST', body, headers)
}

export const fetchPut = (url, body, headers) => {
    return fetchApi(url, 'PUT', body, headers)
}

export const fetchPatch = (url, body, headers) => {
    return fetchApi(url, 'PATCH', body, headers)
}

export const fetchDelete = (url, body, headers) => {
    return fetchApi(url, 'DELETE', body, headers)
}

export default fetchApi