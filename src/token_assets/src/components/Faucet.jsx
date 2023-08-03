import React, { useState } from "react";
import { token, canisterId, createActor }   from "../../../declarations/token"
import { AuthClient } from '@dfinity/auth-client';
import App from "./App";



function Faucet() {

  const [isDisabled, setDisabled] = useState(false)
  const [showText, setShow] = useState("Claim Now!")

  async function handleClick(event) {

    
    setDisabled(true);
    const auth = await AuthClient.create();
    authentication(auth);
    const identity = await auth.getIdentity();
    const authenticatedCanister = createActor(canisterId, { 
      agentOptions: {
        identity,
      },
    });
    console.log(identity._principal.toString());

    const reply = await authenticatedCanister.payOut();
    console.log(reply);
    setShow(reply);

  }


async function authentication(auth){

  


  if(await auth.isAuthenticated()){
     console.log("Logged In!");
      // handleAuth(auth);
  }else{
    await auth.login({
      identitiyProvider: "https://identity.ic0.app/#authorize",
  
      onSuccess: () =>{
        handleAuth(auth);
      }
    })

  }

}

async function handleAuth(auth){
  <App/>
}




  return (
    <div className="home footer">
      <div class="home__data">
                    <h1 class="home__title">
                    Get your free Bharat Tokens here!
                        <br/>
                        <span class="home__title-color">Bharat Token
                        </span>
                        
                    </h1>
                    {/* <br/> */}
                        <h2>Claim 100 BHT token to your account!</h2>
                        <br/>


                    {/* <a href="/" class="button">
                    <Link to="/claim"> Claim Your FREE Tokens Here! </Link></a>  */}
                </div>
      {/* <label> </label> */}
      <p >
        <button disabled={isDisabled} className="button" onClick={handleClick}>
        <p class="footer__title">{showText}</p>
          
        </button>
      </p>
    </div>
  );
}

export default Faucet;
