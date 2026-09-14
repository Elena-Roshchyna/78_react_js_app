import Button from "../../components/Button/Button";
import "./styles.css";

function Homework02_My() {
  return (
    <div className="homework02-my-wrapper">
      <h2 className="homework02-my-title">Homework 02: Personal Version</h2>
      
      <div className="homework02-my-buttons">
        <Button name="Confirm" type="button" />
        <Button name="Submit Form" type="submit" />
      </div>
    </div>
  );
}

export default Homework02_My;
