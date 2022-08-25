import React from "react";
import { useShoppingCart } from "./CartContext";
import list from "./data.json";
import { Stack, Image }  from "react-bootstrap"

const CartItem = (id, quantity) => {
  const { removeFromCart } = useShoppingCart();
  const item = list.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <Image
        scr={item.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
};

export default CartItem;
