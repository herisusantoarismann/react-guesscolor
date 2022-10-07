import React from "react";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};

export default Button;
