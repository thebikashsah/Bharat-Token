import React, { useState } from "react";
import { Principal } from "@dfinity/principal"
import { token }   from "../../../declarations/token"
 
function Balance() {

  const [inputValue, setInput] = useState("")
  const [balanceAmount, setBalance] = useState("")
  const [isHidden, setHidden] = useState(true)
  const [symbol, setSymbol] = useState("")
  
  async function handleClick() {

      const balance = await token.balanceOf(Principal.fromText(inputValue));

      setBalance(balance.toLocaleString());

      setSymbol(await token.getSymbol());

      setHidden(false);

  }


  return (
    <div className="home footer">
      <h1 class="home__title">
      Check account token balance:
                        <br/>
                        <span class="home__title-color">Bharat Token
                        </span>
                        
                    </h1>
    
      <p>
        <input className="contact__form"
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value= {inputValue}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
        />
      </p>
      <p  >
        <br/>
        <button className="button"
          // id="balance-principal-id"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p className="footer__title" hidden={isHidden}>This account has a balance of {balanceAmount} {symbol}.</p>
    </div>
  );
}

export default Balance;
