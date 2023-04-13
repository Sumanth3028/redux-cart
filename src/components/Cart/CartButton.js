import classes from './CartButton.module.css';
import { uiActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
   
   const dispatch=useDispatch()

  const toggleHandler=()=>{
      dispatch(uiActions.toggle())
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
