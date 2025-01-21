import axios from "axios";
import { BASE_URL } from "../utils/constants";

const GoPremium = () => {
  const handleBuyClick = async (membershipType) => {
    try {
      const order = await axios.post(
        BASE_URL + "/payment/create",
        {
          membershipType,
        },
        { withCredentials: true }
      );

      const { keyId, amount, currency, orderId, notes } = order.data;

      const options = {
        key: keyId,
        amount,
        currency,
        name: "DevConnect",
        description: "Connect with other developers!",
        order_id: orderId,
        prefill: {
          name: notes.firstName + " " + notes.lastName,
          email: notes.emailId,
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid  h-80 flex-grow place-items-center">
          <h1 className="font-bold text-2xl">Silver Membership</h1>
          <ul>
            <li>- Chat with other devs</li>
            <li>- Blue tick</li>
            <li>- 100 connection requests per day</li>
            <li>- 3 months validity</li>
          </ul>
          <button
            onClick={() => handleBuyClick("silver")}
            className="btn btn-accent"
          >
            Go Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
          <h1 className="font-bold text-2xl">Gold Membership</h1>
          <ul>
            <li>- Chat with other devs</li>
            <li>- Blue tick</li>
            <li>- Unilimited connection requests per day</li>
            <li>- 3 months validity</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-warning"
          >
            Go Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoPremium;
