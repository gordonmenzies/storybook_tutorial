import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
};

const ButtonNumberTwo = ({ onClick, label }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonNumberTwo;
