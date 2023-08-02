import React, { useState } from "react";
import { Principal } from "@dfinity/principal"
import { token }   from "../../../declarations/token"
 


function Transfer() {

const [toValue, setTo] = useState("")
const [Amount, setAmount] = useState("")
const [Disabled, setDisabled] = useState(false)

const [buttonValue, setButton] = useState("Transfer")
  
  async function handleClick() {
      setDisabled(true);
      const reply = await token.transfer(Principal.fromText(toValue),Number(Amount));
      setButton(reply);
      setDisabled(false);
  }

  return (
    <div className="home footer">
      <h1 class="home__title">
                    Transfer Bharat Token Easily!
                        <br/>
                        {/* <span class="home__title-color">Bharat Token
                        </span> */}
                        
                    </h1>
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value= {toValue}
                onChange={(e)=>{
                  setTo(e.target.value)
                }}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value= {Amount}
                onChange={(e)=>{
                  setAmount(e.target.value)
                }}
              />
            </li>
          </ul>
        </fieldset>
        <br/>
        <p className="trade-buttons">
          <button id="btn-transfer"  className="button" onClick={handleClick} disabled={Disabled} >
            {buttonValue}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
