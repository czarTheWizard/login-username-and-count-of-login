import { useState } from "react";
import Education from "./components.jsx/Education";
import GeneralInfo from "./components.jsx/GeneralInfo";
import Experience from "./components.jsx/Experience";
import { GeneInfo, ExperienceInfo, EducationInfo } from "./data/InfoData";

function App() {
  const [genInfo, setGenInfo] = useState(GeneInfo);

  const [ExpInfo, setExInfo] = useState(ExperienceInfo);

  const [EducInfo, setEducInfo] = useState(EducationInfo);

  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfo genInfo={genInfo} setGenInfo={setEducInfo} />
      <Education EducInfo={EducInfo} setEducInfo={setEducInfo} />

      <Experience ExpInfo={ExpInfo} setExInfo={setExInfo} />
    </div>
  );
}
export default App;
