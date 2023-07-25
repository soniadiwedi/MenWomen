import axios from 'axios';


export const getCheckoutdataAPI = async () => {
    let res = await axios.get(`https://myntra-clone-ag3u.onrender.com/Checkout`);
    return res.data
}

export const postCheckoutdataAPI = async (product) => {
    let res = await axios.post(`https://myntra-clone-ag3u.onrender.com/Checkout`, product);
    return res.data
}

export const deleteCheckoutdataAPI = async (id) => {
    let res = await axios.delete(`https://myntra-clone-ag3u.onrender.com/Checkout/${id}`);
    return res.data
}   