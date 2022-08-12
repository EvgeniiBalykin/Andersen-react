import { IButton } from "../../../componentTypes";
import styles from "./button.module.scss";

function Button({ className, title, onClick }: IButton) {
  return (
    <div className={styles.buttonContainer}>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
