import { notifyerror } from "Utils/Notification/notify";

const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  } else if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  } else if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  } else if (action.type === "DECRESS") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  } else if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemtotal = price * amount;
        cartTotal.total += itemtotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  } else if (action.type === "LOADING") {
    return { ...state, loading: true };
  } else if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  } else if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((CartItem) => {
        if (CartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...CartItem, amount: CartItem.amount + 1 };
          } else if (action.payload.type === "dec") {
            return { ...CartItem, amount: CartItem.amount - 1 };
          }
        }
        return CartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  notifyerror("Functions Not Working as Expected", 2000);
};
export default reducer;
