import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const sendRequest = async () => {
        let response = await fetch(
          "https://redux-dummy-ece5c-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Cart Data Failed");
        }
      };
  
      try{
          await sendRequest()
      }
      catch(error){
          dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed",
              })
            );
      }
  
      dispatch(
          uiActions.showNotification({
            status: "Success",
            title: "Success",
            message: "Sent cart data successfully",
          })
        );
      
  
    };
  };
  export const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const res = await fetch(
          "https://redux-dummy-ece5c-default-rtdb.firebaseio.com/cart.json"
        );
        if (!res.ok) {
          throw new Error("Fetching Failed");
        }
        const data = await res.json();
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(cartActions.replaceCart(cartData));
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed",
          })
        );
      }
    };
  };
  