
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
    const devUrl = `${HOST}:${PORT}${route}`
    const prodUrl = `${route}`

    return fetch(devUrl, {
        method,
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: data ? JSON.stringify(data) : null
    }).then(res => {                
        if (res.ok) {
            return res.json()
                .then(data => data)
                .catch(err => null)
        }
        return null;
    });
}

export const getWishlist = () => fetchRequest(METHOD.get, routes.getWishlist)
export const addGuest = data => fetchRequest(METHOD.post, routes.addGuest, data)
export const reserverGift = data => fetchRequest(METHOD.post, routes.reserveGift, data)
export const deleteGift = data => fetchRequest(METHOD.post, routes.deleteGift, data)
export const addGift = data => fetchRequest(METHOD.post, routes.addGift, data)
