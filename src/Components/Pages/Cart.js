import Shoppingcart from "../Templates/Shoppingcart";
import Contactinformation from "../Templates/Contactinformation";
import ShippingMethod from "../Templates/ShippingMethod";
import BillingAddress from "../Templates/BillingAddress";
import Payment from "../Templates/Payment";

const Cart = () => {
  return (
    <div>
      <Shoppingcart />
      <Contactinformation />
      <ShippingMethod />
      <BillingAddress />
      <Payment />
    </div>
  );
};

export default Cart;
