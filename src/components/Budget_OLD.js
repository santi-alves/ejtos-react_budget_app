//! ORIGINAL Budget
/* import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget: £{budget}</span>
    </div>
  );
};

export default Budget; */
//! Fin ORIGINAL Budget

import React, { useContext /* useState */ } from "react";
import { AppContext } from "../context/AppContext";

const Budget = (props) => {
  const {
    dispatch,
    budget,
    /*expenses, */ currency,
    remaining,
    totalExpenses,
  } = useContext(AppContext);

  /* const remainingBudget = (budget, expenses) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    return budget - totalExpenses;
  }; */

  const updateBudget = (e /* expenses */) => {
    const value = parseInt(e.target.value);
    // const totalExpenses = expenses.reduce((total, item) => {
    //   return (total += item.cost);
    // }, 0);
    //! increment / decrement bad
    /* if (e.target.value > budget) {
      const increment = e.target.value + 10;
      return increment;
    } else if (e.target.value < budget) {
      const decrement = e.target.value - 10;
      re turn decrement;
    }*/
    //! fin increment / decrement bad

    //! ???
    /* if (budget < remainingBudget(budget, expenses)) {
      alert("You cannot reduce the budget value lower than the spending");
      //updateBudget(budget);
      dispatch({
        type: "INVALID_BUDGET",
      });
      //return;
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: budget,
      });
    } */
    //! fin ???
    console.log(
      "type of target.value: ",
      typeof value,
      "\ntype of totalExpenses: ",
      typeof totalExpenses
    );
    console.log("e.target.value < totalExpenses ?", value < totalExpenses);

    if (value < totalExpenses) {
      // alert("You cannot reduce the budget value lower than the spending");
      //updateBudget(budget);
      dispatch({
        type: "INVALID_BUDGET",
      });
      //return;
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: value,
      });

      //* set_budget (Funciona)
      /* dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    }); */
      //* fin set_budget (Funciona)
    }
  };

  return (
    <div className="alert alert-secondary">
      Budget: {currency.symbol}
      <input
        required="required"
        type="number"
        step={10}
        // expenses.reduce((total, item) => {
        //   return (total += item.cost);
        // }, 0)

        // min={() => {
        //   const totalExpenses = expenses.reduce((total, item) => {
        //     return (total += item.cost);
        //   }, 0);
        //   if (budget < totalExpenses) {
        //     alert("You cannot reduce the budget value lower than the spending");
        //     //updateBudget(budget);
        //     dispatch({
        //       type: "default",
        //     });
        //     //return;
        //   }
        // }}

        // min={remainingBudget(budget, expenses)}
        // max={20000}
        id="budget"
        defaultValue={budget}
        style={{ marginLeft: ".5rem", size: 10 }}
        // onChange={(event) => updateBudget(event.target.value, expenses)}
        onBlur={updateBudget}
      />
      {/* </input> */}
      {/* <span>Budget: £{budget}</span> */}
    </div>
  );
};

export default Budget;
