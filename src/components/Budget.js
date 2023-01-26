import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, currency, totalExpenses } = useContext(AppContext);

  const updateBudget = (e) => {
    const value = parseInt(e.target.value);

    if (value < totalExpenses) {
      dispatch({
        type: "INVALID_BUDGET",
      });
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: value,
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      Budget: {currency.symbol}
      <input
        required="required"
        type="number"
        step={10}
        id="budget"
        defaultValue={budget}
        style={{ marginLeft: ".5rem", size: 10 }}
        onBlur={updateBudget}
      />
    </div>
  );
};

export default Budget;
