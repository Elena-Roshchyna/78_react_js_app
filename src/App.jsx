import "./App.css";
// Lessons imports
// import Lesson01 from "./lessons/Lesson01/Lesson01";
// import Lesson02 from "./lessons/Lesson02/Lesson02";
// import Lesson03 from "./lessons/Lesson03/Lesson03";
// import Lesson04 from "./lessons/Lesson04_React_state/Lesson04";

// Homeworks imports
// import Homework02 from "./homeworks/Homework02/Homework02";
import Homework02_My from "./homeworks/Homework02_My/Homework02_My";

function App() {
  return (
    <div className="app">
      {/* Lesson 01. Introduction */}
      {/* <Lesson01 /> */}
      {/* Lesson 02. Props */}
      {/* <Lesson02 /> */}
      {/* Homework 02. Props */}
      <Homework02_My />
      {/* Lesson 03. Map components */}
      {/* <Lesson03/> */}
      {/* Lesson 04. State */}
      {/* <Lesson04 /> */}
    </div>
  );
}

export default App;
