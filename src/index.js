import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Mahavidyapeetha from "./components/About/Mahavidyapeetha/Mahavidyapeetha";
import Jsspolytechnic from "./components/About/Jsspolytechnic/Jsspolytechnic";
import "./components/styles/pfc-stylecd2e.css";
import "./components/styles/style20b9.css";
import "./components/styles/tcy-front-style.min8a54.css";
import "./components/styles/style.mincd2e.css";
import Contact from "./components/contact/Contact";
import Program from "./components/programs/Program";
import Ncc from "./components/Activities/NCC/Ncc";
import Nss from "./components/Activities/NSS/Nss";
import Complaint from "./components/Complaints/Complaint";
import GovenmCM from "./components/GCM/GovenmCM";
import Gallary from "./components/Gallary/Gallary";
import Photo1 from "./components/Gallary/Photo1/Photo1";
import Photo2 from "./components/Gallary/Photo2/Photo2";
import Civil from "./components/programs/department/Civil";
import Computer from "./components/programs/department/Computer";
import Electronic_com from "./components/programs/department/Electronic_com";
import Electric_elec from "./components/programs/department/Electric_elec";
import Information from "./components/programs/department/Information";
import Mechanical from "./components/programs/department/Mechanical";
import Mechatronic from "./components/programs/department/Mechatronic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Route>
        <Route path="/Mahavidyapeetha" element={<Mahavidyapeetha />}></Route>
        <Route path="/Jsspolytechnic" element={<Jsspolytechnic />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/program" element={<Program />}></Route>
        <Route path="/civil" element={<Civil />}></Route>
        <Route path="/computer" element={<Computer />}></Route>
        <Route path="/electronic-communication" element={<Electronic_com />}></Route>
        <Route path="/electric-electronic" element={<Electric_elec />}></Route>
        <Route path="/informationScience" element={<Information />}></Route>
        <Route path="/mechanical" element={<Mechanical />}></Route>
        <Route path="/mechatronic" element={<Mechatronic />}></Route>
        <Route path="/Ncc" element={<Ncc />}></Route>
        <Route path="/Nss" element={<Nss />}></Route>
        <Route path="/Complaints" element={<Complaint />}></Route>
        <Route path="/GCM" element={<GovenmCM />}></Route>
        <Route path="/Gallary" element={<Gallary />}></Route>
        <Route path="/photo1" element={<Photo1 />}></Route>
        <Route path="/photo2" element={<Photo2 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
