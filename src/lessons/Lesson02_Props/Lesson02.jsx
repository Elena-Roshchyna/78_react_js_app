import AnimalCard from "../../components/AnimalCard/AnimalCard";
import LessonCard from "../../components/LessonCard/LessonCard";
import "./styles.css";
import { lionData, zebraData } from "./data";

function Lesson02() {
  return (
    <div className="lesson02-wrapper">
      <LessonCard />
      <LessonCard />
      <AnimalCard
        name={lionData.name}
        species={lionData.species}
        imgSrc={lionData.image}
      />
      <AnimalCard
        name={zebraData.name}
        species={zebraData.species}
        imgSrc={zebraData.image}
      >
        <p>{zebraData.role}</p>
        <img src={zebraData.imgFriend}/>
      </AnimalCard>
    </div>
  );
}

export default Lesson02;
