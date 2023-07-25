import axios from "axios"

export const fetchWishlistAPI = async () => {
    let res = await axios.get(`https://myntra-clone-ag3u.onrender.com/wishlist`)
    return res.data
}

export const removeProd = async (id) => {
    let res = await axios.delete(`https://myntra-clone-ag3u.onrender.com/wishlist/${id}`)
    return res.data
}
