import React, { type MouseEvent, type PropsWithChildren } from "react";

// type MyMouseEvent = React.MouseEvent<HTMLButtonElement>

interface MyButtonProps extends PropsWithChildren {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

// type MyButtonPropsType = MyButtonProps & PropsWithChildren;

// Types mergen met &
// type MyButtonProps = {
//   test: string;
// } & PropsWithChildren;

// 1

// const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   console.log("Geklikt op de knop ", event.target);
// };

const MyButton = ({ onClick, children }: MyButtonProps) => {
  // 2

  return <button onClick={onClick}>{children}</button>;
};

export default MyButton;
