import React from "react";

const Option = (props) => {
  const { /* _key, _name, _symbol, */ content } = props;

  return (
    <>
      <option>{content}</option>
    </>
  );
};

export default Option;
