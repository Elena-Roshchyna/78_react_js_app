import AnimalCard from "../../components/AnimalCard/AnimalCard";
import LessonCard from "../../components/LessonCard/LessonCard";
import "./styles.css";
function Lesson02() {
  return (
    <div className="lesson02-wrapper">
      <LessonCard />
      <LessonCard />
      <AnimalCard />
      <AnimalCard />
    </div>
  );
}
export default Lesson02;
