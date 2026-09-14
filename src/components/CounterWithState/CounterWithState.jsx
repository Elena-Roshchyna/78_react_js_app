import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
// Для создания state необходимо использовать хук - useState
// Состояние - это как внутренне хранилище внутри компонента, которое со
// временем может изменять своё значение и актуальное значение мы сможем увидеть на странице
// (обычные переменные так не могут). В этом хранилище может храниться любой тип данных
function CounterWithState() {
  // При вывозве useState мы передаём значение по умолчанию для state
  // useState при вызове возвращает массив из 2-х элементов (1-текущее значение, 2 - функция)
  // Состояние можно изменить только с помощью функции, которую возвращает useState
  // const state = useState(6);
  const [count, setCount] = useState(7);
  // console.log(state);
  return (
    <div className="counter-with-state-wrapper">
      <div className="button-wrapper">
        <Button name="-" />
      </div>
      <div className="result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" />
      </div>
    </div>
  );
}
export default CounterWithState;
// Обновление компонентов в React возможно только в 3-х случаях
// - когда изменяется значение props
// - изменение состояния (state)
// - с помощью специальной функции (forceUpdate)
