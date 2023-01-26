import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "./Currency.css";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const currencies = [
    { name: "Dollar", symbol: "$" },
    { name: "Pound", symbol: "£" },
    { name: "Euro", symbol: "€" },
    { name: "Ruppee", symbol: "₹" },
  ];

  const handleCurrencySelection = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: { name: e.target.name, symbol: e.target.value },
    });
  };

  return (
    <div>
      <select
        className="custom-select form-select form-select-lg currency-select"
        id="select-currency"
        onChange={handleCurrencySelection}
      >
        {currencies.map((curr) => {
          return (
            <option key={curr.name} name={curr.name} value={curr.symbol}>
              {curr.symbol} {curr.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Currency;
