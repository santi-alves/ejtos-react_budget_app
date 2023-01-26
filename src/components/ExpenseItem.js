import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";

import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const cursor = "pointer";

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency.symbol} {props.cost}
      </td>
      <td>
        <IoMdAddCircle
          size="2em"
          style={{ color: "green", cursor }}
          onClick={(event) => increaseAllocation(props.name)}
        ></IoMdAddCircle>
      </td>

      <td>
        <IoMdRemoveCircle
          size="2em"
          style={{ color: "darkred", cursor }}
          onClick={(event) => decreaseAllocation(props.name)}
        ></IoMdRemoveCircle>
      </td>

      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
