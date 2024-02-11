import React, { ComponentProps } from "react";
import styles from "./h1.module.scss";
import cn from "classnames";

function H1(props: ComponentProps<"h1">) {
  return <h1 {...props} className={cn(props.className, styles.h1)} />;
}

export default H1;
