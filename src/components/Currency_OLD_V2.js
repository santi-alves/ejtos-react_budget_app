import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//import Option from "./Option";

import "./Currency.css";

const Currency = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const defaultCurrency = `${currency.symbol} ${currency.name}`;
  const currencies = [
    { name: "Dollar", symbol: "$" },
    { name: "Pound", symbol: "£" },
    { name: "Euro", symbol: "€" },
    { name: "Ruppee", symbol: "₹" },
  ];

  const handleCurrencySelection = (e) => {
    // e.currentTarget.style.backgroundColor = "white";
    // e.currentTarget.style.color = "red";
    // e.target.textContent = "Currency";
    dispatch({
      type: "CHG_CURRENCY",
      payload: { name: e.target.name, symbol: e.target.value },
    });

    //console.log(e.target);
    /* console.log({
        name: e.target._name,
      symbol: e.target._symbol,
      key: e.target.key, 
      //content: e.target.content,
    }); */
    /* ${target.namedItem} */
    /* console.log(
      `Currency (${e.target.value} ${e.target.name})`,
      "\nstate.currency",
      currency
    ); */
  };

  /*  const changeStyle = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "red";
  }; */

  return (
    <div>
      <select
        // value={"Currency..."}
        //defaultValue={"Currency" + defaultCurrency}
        className="custom-select form-select form-select-lg currency-select"
        id="select-currency"
        onChange={handleCurrencySelection}
      >
        {/* <option defaultValue>Currency {defaultCurrency}</option> */}
        {currencies.map((curr) => {
          return (
            <option
              key={curr.name}
              name={curr.name}
              value={curr.symbol}
              // className="currency-option"
              // onMouseEnter={changeStyle}
              // selected={curr.selected}
            >
              {curr.symbol} {curr.name}
            </option>
          );
        })}
        {/*  <Option
              // _key={curr.name}
              // _symbol={curr.symbol}
              // _name={curr.name}
              content={curr.symbol + " " + curr.name}
            /> */}
        {/* .currency-option:hover {
    background-color: white;
    color: black;
} */}
        {/* //! options map 02 */}
        {/* {currency.map((cur) => {
          return (
            <option key={cur.name}>
              {cur.symbol} {cur.name}
            </option>
          );
        })} */}
        {/* //! fin options map 02 */}
        {/* ({currency.symbol} {currency.name}) */}
        {/* <option defaultValue="Currrrr" disabled={true} value="">
          Currency
        </option> */}
        {/* //! options map 01 */}
        {/*  {currencies.map((curr, index) => {
          if (index === 0) {
            return (
              <option
                key={currency.name}
                value={currency.symbol}
                name={currency.name}
              >
                {currency.symbol + " " + currency.name}
              </option>
            );
          }
          return (
            <option key={curr.name} value={curr.symbol} name={curr.name}>
              {curr.symbol + " " + curr.name}
            </option>
          );
        })} */}
        {/* //! fin options map 01 */}
        {/*//! options repetidas (funcionan) */}
        {/*  <option
          className="currency-option"
          value={currency.symbol}
          name={currency.name}
          selected
        >
          Currency ({currency.symbol} {currency.name})
          {console.log(
            "def symbol: ",
            currency.symbol,
            "\ndef name: ",
            currency.name
          )}
        </option> */}
        {/* <option className="currency-option" value="$" name="Dollar">
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
        </option> */}
        {/*//! fin options repetidas (funcionan) */}
      </select>
    </div>
  );
};

export default Currency;
