import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import Uye from "./Uye";
import Form from "./form";

const takimUyeleri = [{
  name: 'LebRon James',
  position: 'Forward',
  ppg: '28.8',
  nationality: 'American'
},
{
  name: 'Stephen Curry',
  position: 'Guard',
  ppg: '32.5',
  nationality: 'American'
}]

function App() {

  const [uyeler, setUyeler] = useState(takimUyeleri);
  

  return (
    <div className="App">
      <div className="icerik-kutusu">
        <div className="uyeler">
          <h2 className="uyeler-baslik">Team Members</h2>
          <div className="uyeler-listesi">
          {uyeler.map((player, index) => <Uye key={index} kisi={player} />
          )}
          </div>
        </div>

        <div className="yeni-uye">
          <h2 className="yeni-uye-baslik">Add New Team Member</h2>
          <div className="form-kutusu uye-kutusu">
            <Form formSubmitRun={setUyeler} existingPlayers={uyeler}/>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
