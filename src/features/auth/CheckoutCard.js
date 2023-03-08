// import Script from "react-load-script";
// import { useDispatch } from "react-redux";
// import * as chargeApi from "../../apis/charge-api";
// import useCharge from "../../hooks/useCharge";
// import { setCharge } from "../../redux/transaction-slice";

// export default function CheckoutCard() {
//   let OmiseCard;
//   const dispatch = useDispatch();
//   const charge = useCharge();
//   const handleLoadScript = () => {
//     OmiseCard = window.OmiseCard;
//     OmiseCard.configure({
//       publicKey: "pkey_test_5v17fi85hzib9l24i5a",
//       frameLabel: "Steem",
//       submitLabel: "PAY NOW",
//       currency: "thb",
//     });
//   };
//   const creditCardConfigure = () => {
//     OmiseCard.configure({
//       defaultPaymentMethod: "credit_card",
//       otherPaymentMethods: [],
//     });
//     OmiseCard.configureButton("#creditCard");
//     OmiseCard.attach();
//   };

//   const omiseCardHandle = (email, name, amount) => {
//     amount *= 100;
//     OmiseCard.open({
//       frameDescription: "Invoice #3847",
//       amount,
//       onCreateTokenSuccess: async (token) => {
//         try {
//           const res = await chargeApi.createChargeApi({
//             email,
//             name,
//             amount,
//             token,
//           });
//           const result = { ...res.data, amount: res.data.amount / 100 };
//           dispatch(setCharge(result));
//         } catch (err) {
//           console.error(err);
//         }
//       },
//       onFormClosed: () => {},
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     creditCardConfigure();
//     omiseCardHandle("a@gmail.com", "cattt", 740);
//   };

//   console.log(charge);
//   return (
//     <div>
//       <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
//       <button
//         id="creditCard"
//         onClick={handleClick}
//         className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
//       >
//         Purchase
//       </button>
//     </div>
//   );
// }
