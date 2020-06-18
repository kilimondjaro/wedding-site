
const HOST = 'http://localhost'
const PORT = '8080'

const routes = {
    getWishlist: '/api/getWishlist',
    addGuest: '/api/addGuest',
    reserveGift: '/api/reserveGift',
    deleteGift: '/api/deleteGift',
    addGift: '/api/addGift'
}

const METHOD = {
    get: 'GET',
    post: 'POST'
}

const fetchRequest = (method, route, data) => {
    return fetch(`${HOST}:${PORT}${route}`, {
        method,
        mode: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: data ? JSON.stringify(data) : null
    }).then(res => res.json());
}

export const getWishlist = () => fetchRequest(METHOD.get, routes.getWishlist)
export const addGuest = data => fetchRequest(METHOD.post, routes.addGuest, data)
export const reserverGift = data => fetchRequest(METHOD.post, routes.reserveGift, data)
export const deleteGift = data => fetchRequest(METHOD.post, routes.deleteGift, data)
export const addGift = data => fetchRequest(METHOD.post, routes.addGift, data)
