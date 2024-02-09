import React, { useState } from 'react'
import './BMI.css'
function BMI() {

    const[height,setHeight]= useState('');
    const[weight,setWeight]= useState('');
    const[bmi,setBmi]=useState();
    const[status,setStatus]=useState('')
    const[error,setError]=useState(false);

    const bmiCalc=()=>{
        const isValidHeight= /^\d+$/.test(height)
        const isValidWeight= /^\d+$/.test(weight)

        if(isValidHeight && isValidWeight){
        const heightInMeter = height/100;
        const bmiresult=weight/ (heightInMeter * heightInMeter)
        setBmi(bmiresult.toFixed(2))
        setError(false)
        console.log(bmi)
        if(bmiresult<18.5){
            setStatus('Under Weight')
        }
        else if(bmiresult<24.9 && bmiresult>18.5){
            setStatus('Normal')
        }
        else if(bmiresult>25 && bmiresult<30){
            setStatus('Over Weight')
        }
        else{
            setStatus('Obesity')
        }
    }
    else{
        setBmi(null)
        setStatus('')
        setError(true)
    }
    }
    const clearAll=()=>{
        setBmi(null)
        setStatus('')
        setHeight('')
        setWeight('')
        setError(false)
    }
    
  return (
    <div>
        <div className="bmiContainer">
            <div className="leftContainer"></div>
            <div className="rightContainer">
                <h1>BMI Calculator</h1>
                {error && <p className="error">Please enter valid numeric values for height & weight</p>}
                <label htmlFor="bmiHeight">Height <span>(cm)</span></label>
                <input type="text"   name='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
                <label htmlFor="bmiWeight">Weight <span>(kg)</span></label>
                <input type="text" name='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                <div className="btn">
                <button onClick={bmiCalc}>Calculate BMI</button>
                <button onClick={clearAll}>Clear All</button>
                </div>
            {bmi && <div className="bmiResults">
                <p>Your BMI is : {bmi}</p>
                <p>Status: <span>{status}</span></p>
                </div>
                }
            </div>
        </div>
         
    </div>
  )
}

export default BMI