import style from "./namePage.module.scss";
import { Link } from "react-router-dom";
import useBindDispatch from "../../../hooks/useBindDispatch";
import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Input/Input";
import { useSelector } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { addNameAction as _addNameAction } from "../../../redux/actions";
import { selectName } from "../../../redux/selectors";

function NamePage() {
  const addNameAction = useBindDispatch(_addNameAction);

  const name = useSelector(selectName);

  return (
    <div className={style.nameContainer}>
      <h1 className={style.title}>Hi! Enter your name below to start</h1>
      <div className={style.inputContainer}>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => addNameAction(e.target.value)}
        />
        <Link to="/listpage">
          <Button className={style.btnLog} title={<FiLogIn />} />
        </Link>
      </div>
    </div>
  );
}

export default NamePage;
