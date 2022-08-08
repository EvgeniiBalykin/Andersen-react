import React from "react";
import styles from "./input.module.scss";

function Input({ placeholder, type, value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
