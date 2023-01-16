import React, { useEffect } from "react";
import './main.css';
import digestMessage from "./encrypt";

export default function TechTest({setBox,box,digits1_4,        
    digits5_8,        
    digits9_12,       
    digits13_16,      
    setDigits1_4,     
    setDigits5_8,    
    setDigits9_12,   
    setDigits13_16,  
    cardHolderName, 
    setCardHolderName,
    cvv,
    setCvv,
    month,
    setMonth,
    year,
    setYear,
    cardStatus,
    setCardStatus,
    board,
    setBoard,
    data,
    setData}){
    const resetForm = ()=>{
        document.getElementById('card-form').reset();
        setDigits1_4("ﾠ");
        setDigits5_8(" ");
        setDigits9_12(" ");
        setDigits13_16(" ");
        setCardHolderName(" ");
        setCvv(" ");
        setMonth("01");
        setYear(" ");
    }
    
    const layout = <div className="card-info-form">
  
        <div className={cardStatus}  >
            <div className="card__front">
                <img className="card-chip" src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png" alt="card-chip" />
                <img className="logo" src="https://d27i7n2isjbnbi.cloudfront.net/careers/photos/152550/thumb_photo_1579832660.png" alt="GradiWeb Logo" />
                <p className="front-card-number">{digits1_4} {digits5_8} {digits9_12} {digits13_16}</p>
                <div className="front-card-date-name">
                    <p className="front-card-name">CARD HOLDER <br></br> <strong className="strong">{cardHolderName}</strong></p>
                    <p className="front-card-date">VALID TRHU <br></br><strong className="strong">{month}/{year}</strong></p>
                </div>
            </div>
            <div className="card__back">
                <div className="black-bar"></div>
                <div className="back-card-cvv">CVV<p className="cvv-field">{cvv}</p></div>

            </div>

            
        </div>
    

        <form action="#" id="card-form" onSubmit={(e)=>{data.push([e.target[0].value+" "+e.target[1].value+" "+e.target[2].value+" "+e.target[3].value,e.target[4].value,e.target[5].value+"/"+e.target[6].value.slice(2,4), digestMessage(e.target[7].value) ]);setTable();console.log(data); resetForm()} }>
        <h3 className="section-title">CREDIT CARD NUMBER</h3>
            <label htmlFor="credit-card-number" className="number-boxes-container">
                
                <input type="text" maxLength="4" minLength="4" pattern="[0-9]+"  onChange={(e)=>{setDigits1_4(e.target.value.toString())}} className="no-spin number-box" required/>
                <input type="text" maxLength="4" minLength="4" pattern="[0-9]+" onChange={(e)=>{setDigits5_8(e.target.value.toString())}} className="no-spin number-box" required/>
                <input type="text" maxLength="4" minLength="4" pattern="[0-9]+"  onChange={(e)=>{setDigits9_12(e.target.value.toString())}} className="no-spin number-box" required/>
                <input type="text" maxLength="4" minLength="4" pattern="[0-9]+" onChange={(e)=>{setDigits13_16(e.target.value.toString())}} className="no-spin number-box" required/>
            </label>
            
        <h3 clasNames="section-title">CARD HOLDER NAME</h3>
            <label htmlFor="card-holder-name" className="card-holder-name-container">
                
                <input type="text"  pattern="[a-zA-Z ]{2,254}" onChange={(e)=>{setCardHolderName(e.target.value.toString(),[])}} maxLength="25" className="text-box" required />
            </label>
        <div className="date-cvv-box">
        
            <label htmlFor="card-date" className="card-date-container">
            <h3 className="section-title">VALID THRU</h3>
                
                <select id="cars" name="cars" className="date-box" onChange={(e)=>{setMonth(e.target.value.toString(),[])}} required>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            <input type="number"  onChange={(e)=>{setYear(e.target.value.toString().slice(2,4),[])}} min="2022" max="2099" className="number-box no-spin" required />
            </label>
            
            <label htmlFor="cvv" >
                
                <h3 className="section-title">CVV</h3>
                <input type="number" className="no-spin number-box cvv-box" onChange={(e)=>{setCvv(e.target.value.toString(),[])}} max="999" onFocus={()=>{setCardStatus("card flip")}} onBlur={()=>{setCardStatus("card")}} required />
            </label>



        </div>
        <input type="submit" value="SUBMIT DETAILS" className="submit-button button btn-red" id="" />
        </form>
    
    </div>;

    const table = ()=>{
        let rows=[];
        for(let i =0; i<data.length; i++){
            rows.push(
                <tr>
                    <td>{"**** **** **** " +data[i][0].slice(15,19)}</td>
                    <td>{data[i][1]}</td>
                    <td>{data[i][2]}</td>
                </tr>
            )

        }
        return <div> <table className="board">
            <thead>
                <th>Card Number</th>
                <th>Card Holder Name</th>
                <th>Valid thru</th>
            </thead>
                {rows}
            </table></div>
    }

    
    

    const setLayout = ()=>{
        setBox(layout);
    }
    const setTable = () =>{
        setBoard(table)
    }
    useEffect(()=>{
        setTable();
    },[])
    useEffect(()=>{
        
        setLayout();
        
    },[digits1_4,digits5_8,digits9_12,digits13_16,month,year,cardHolderName,cvv,cardStatus]);

    return(<React.Fragment>
    
        {box}
        {board}
       

    </React.Fragment>);


}