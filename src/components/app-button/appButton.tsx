import { MouseEventHandler } from "react";

export type AppButtonProps = {
  clickHandler: MouseEventHandler;
  text: string;
  width: string;
  height: string;
  color?: string;
  margin?: string;
};

const AppButton = (props: AppButtonProps) => {
  const { width, height, text, color, margin, clickHandler, } = props;
  const styleSheet = { width, height, color, margin };
  return (
    <button
      className="app-btn"
      type="submit"
      onClick={clickHandler}
      style={styleSheet}
    >
      {text}
    </button>
  );
};

export default AppButton;