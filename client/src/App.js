import "./App.css";

import { DiseaseLib } from "./components/Library/diseaseLib";
import VideoPlayer from "./components/VideoCall/";
import Appointment from "./components/Appointment/index.js";

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      {/* <DiseaseLib /> */}
      {/* <Appointment /> */}
    </div>
  );
}

export default App;
