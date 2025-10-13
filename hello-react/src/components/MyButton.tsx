import React, { type PropsWithChildren } from "react";

interface MyButtonProps extends PropsWithChildren {
  test: string;
}

// type MyButtonPropsType = MyButtonProps & PropsWithChildren;

// Types mergen met &
// type MyButtonProps = {
//   test: string;
// } & PropsWithChildren;

// 1

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Geklikt op de knop ", event.target);
};

const MyButton = (props: MyButtonProps) => {
  // 2

  return <button onClick={handleClick}>{props.children}</button>;
};

export default MyButton;
