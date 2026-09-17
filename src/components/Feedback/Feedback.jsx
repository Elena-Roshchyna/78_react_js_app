import { useState } from "react";
import Button from "../Button/Button"; // Убедитесь в правильности пути к components/Button
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      {/* 1. Лайки: количество СЛЕВА, кнопка справа */}
      <div className="feedback-item">
        <span className="count-display">{likes}</span>
        <Button name="Like" onClick={handleLike} />
      </div>

      {/* 2. Дизлайки: кнопка слева, количество СПРАВА */}
      <div className="feedback-item">
        <Button name="Dislike" onClick={handleDislike} />
        <span className="count-display">{dislikes}</span>
      </div>

      {/* 3. Кнопка сброса */}
      <div className="reset-wrapper">
        <Button name="Reset Results" onClick={handleReset} />
      </div>
    </div>
  );
}

export default Feedback;
