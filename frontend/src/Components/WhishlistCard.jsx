import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../Redux/Cart/Cart.action";
import { fetchWishlistData, removeProdData } from "../Redux/Wishlist/Wishlist.action";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const WishlistCard = ({ prod }) => {

  //console.log(prod);

  const { id,brand, discount, discounted_price, images, strike_price } = prod;
 const dispatch=useDispatch();
useEffect(()=>{
  dispatch(fetchWishlistData());
},[])

  const addToBag = async () => {
    // console.log("newItem:",props)
    await axios
      .post(`https://myntra-clone-ag3u.onrender.com/cart/`, prod)
      .then((res) => {
        toast.success("Added to bag Successfully....", {
          position: toast.POSITION.TOP_CENTER
        })
        dispatch(fetchCartData()) 
        dispatch(removeProdData(id));
      })
      .catch((err) =>  toast.error("Already Exists in Your Bag", {
        position: toast.POSITION.TOP_CENTER
      }));
  };

  const removeFromWishlist=()=>{
    dispatch(removeProdData(id)).then((res) => {
      toast.success("Removed", {
        position: toast.POSITION.TOP_CENTER
      })
    }).catch((err) =>  toast.success("Aready removed", {
      position: toast.POSITION.TOP_CENTER
    }));

}

  return (
    
    <Box boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} m={"1rem"} position="relative">
      <Stack spacing={"0.5rem"}>
        Tilte
        <Image src={images} />
        <Text>{brand}</Text>
        <Flex
          justifyContent={"space-between"}
          alignItems={"baseline"}
          p={"0 1.5rem"}
          gap={"0.5rem"}
        >
          <Text fontSize={"0.9rem"}> Rs.{discounted_price}</Text>
          <Text
            fontSize={"0.7rem"}
            textDecoration={"line-through"}
            color={"gray.400"}
          >
            Rs.{strike_price}
          </Text>
          <Text fontWeight={"700"} fontSize={"0.7rem"} color={"red.400"}>
            {discount}
          </Text>
        </Flex>
        <Box p={"0.5rem"}>
          <Button
            onClick={() => addToBag()}
            _hover={{
              backgroundColor: "white",
              color: "pink.500",
              outlineColor: "pink.500",
            }}
            borderRadius={"0.2rem"}
            w={"70%"}
            m={"auto"}
            color={"#fff"}
            backgroundColor={"pink.500"}
            fontSize={"1.2rem"}
            fontWeight={700}
          >
            Add To Bag
          </Button>
        </Box>
      </Stack>
      <Box
        position={"absolute"}
        top={0}
        right={"1rem"}
        color={"white"}
        backgroundColor={"blackAlpha.600"}
        p={"0.5rem"}
        onClick={removeFromWishlist}
      >
        <CloseIcon />
      </Box>
    </Box>
  );
};


export default WishlistCard;

