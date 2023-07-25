import axios from "axios"


export const fetchCartAPI = async () => {
    let res = await axios.get(`https://myntra-clone-ag3u.onrender.com/cart`)
    //console.log(res?.data)
    return res.data
}


export const deleteCartAPI = async (id) => {
    let res = await axios.delete(`https://myntra-clone-ag3u.onrender.com/cart/${id}`)
    //console.log(res?.data)
    return res
}


