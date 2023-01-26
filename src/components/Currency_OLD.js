import React, { useContext /* useState */ /* useEffect */ } from "react";
import { AppContext } from "../context/AppContext";

import "./Currency.css";

const Currency = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  //   useEffect(() => {
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  //const [name, setName] = useState("");
  //const currency = "xd";

  const handleCurrencySelection = (target) => {
    // dispatch({
    //   type: "CHG_CURRENCY",
    //   payload: target.value,
    // });

    dispatch({
      type: "CHG_CURRENCY",
      payload: { name: target.name, symbol: target.value },
    });

    //currency: [{ name: "Dollar", symbol: "$" }],
    //console.log("selected option: " + val);
    //console.log(target.children);
  };

  //   const [cost, setCost] = useState("");
  //   const [action, setAction] = useState("");

  //   const submitEvent = () => {
  //     if (cost > remaining) {
  //       alert("The value cannot exceed remaining funds  £" + remaining);
  //       setCost("");
  //       return;
  //     }

  //     const expense = {
  //       name: name,
  //       cost: parseInt(cost),
  //     };

  //     if (action === "Reduce") {
  //       dispatch({
  //         type: "RED_EXPENSE",
  //         payload: expense,
  //       });
  //     } else {
  //       dispatch({
  //         type: "ADD_EXPENSE",
  //         payload: expense,
  //       });
  //     }
  //   };

  return (
    // className="alert alert-secondary"
    <div>
      {/* <label>
        Currency ({currency}) */}
      {/* <label htmlFor="currency-optgrp">asddddddd</label> */}
      <select
        className="custom-select form-select form-select-lg currency-select"
        id="select-currency"
        onChange={(event) => handleCurrencySelection(event.target)}
      >
        {/* <option selected>Currency {/* {currency} /}</option> */}
        {/* <label htmlFor="select-currency">Currency</label> */}
        <option defaultValue>
          {/* Currency  */}({currency.symbol} {currency.name})
        </option>
        {/*  <optgroup id="currency-optgrp" label="Currency"> */}
        <option className="currency-option" value="$" name="Dollar">
          $ Dollar
        </option>
        <option className="currency-option" value="£" name="Pound">
          £ Pound
        </option>
        <option className="currency-option" value="€" name="Euro">
          € Euro
        </option>
        <option className="currency-option" value="₹" name="Ruppee">
          ₹ Ruppee
        </option>
        {/* </optgroup> */}
      </select>
      {/*  </label> */}
    </div>
  );
};

export default Currency;
