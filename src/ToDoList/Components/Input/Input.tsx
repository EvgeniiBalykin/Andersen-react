import { InputType } from "../../../componentTypes";
import styles from "./input.module.scss";

const Input = ({ placeholder, type, value, onChange }: InputType) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
