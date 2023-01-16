
import React,{useState} from 'react';
import TechTest from '../TechTest';
import './main.css';

function App() {
  const [box , setBox] = useState();
  const [digits1_4 , setDigits1_4] = useState("ﾠ");
  const [digits5_8 , setDigits5_8] = useState("");
  const [digits9_12 , setDigits9_12] = useState("");
  const [digits13_16 , setDigits13_16] = useState("");
  const [cardHolderName , setCardHolderName] = useState("");
  const [cvv , setCvv] = useState("");
  const [month , setMonth] = useState("01");
  const [year , setYear] = useState("");
  const [cardStatus , setCardStatus] = useState("card");
  const [board,setBoard] = useState();
  const [data,setData] = useState([]);
  

  
  
  return (
    <div className="App">
      <TechTest
      box={box}
      setBox={setBox}
      digits1_4         = {digits1_4}
      digits5_8         = {digits5_8}
      digits9_12        = {digits9_12}
      digits13_16       = {digits13_16}
      setDigits1_4      = {setDigits1_4}
      setDigits5_8      = {setDigits5_8}
      setDigits9_12     = {setDigits9_12}
      setDigits13_16    = {setDigits13_16}
      cardHolderName    ={cardHolderName}
      setCardHolderName ={setCardHolderName}
      cvv               ={cvv}
      setCvv            ={setCvv}
      month             ={month}
      setMonth          ={setMonth}
      year              ={year}
      setYear           ={setYear}
      cardStatus        ={cardStatus}
      setCardStatus     ={setCardStatus}
      board             ={board}
      setBoard          ={setBoard}
      data              ={data}
      setData           ={setData}

      />
    </div>
  );
}

export default App;
