import React, {useState} from "react";
import { AuthClient } from '@dfinity/auth-client';
import { Principal } from "@dfinity/principal"
import { token, canisterId, createActor }   from "../../../declarations/token"

function Footer() {
  const [isHidden, setHidden] = useState(true)
    const [principal_id, setprincipal] = useState();
    const [balanceAmount, setBalance] = useState("")
  
  
  

    checkAuth();

    async function checkAuth(){
        const auth = await AuthClient.create();


       
        
        if(await auth.isAuthenticated()){
            const identity = await auth.getIdentity();
            const authenticatedCanister = createActor(canisterId, { 
              agentOptions: {
                identity,
              },
            });
            const val = identity._principal.toString();
            setprincipal(val);
            const balance = await authenticatedCanister.balanceOf(identity._principal);

      setBalance(balance.toLocaleString());

            console.log(val);
            console.log("Logged In!");
             // handleAuth(auth);
             setHidden(false);
         }
    }
  return (
    <footer class="footer">
      <div hidden={isHidden}>
            <p class="footer__title"   >Authenticated!</p>
            
            <h2 > PRINCIPAL ID :  <span class="principal_id"> {principal_id} </span>  </h2>
            <h2 > BALANCE :  <span class="principal_id"> {balanceAmount} BHT</span>  </h2>
            <hr/>

      </div>
       
            <p class="footer__title"> Bharat Token</p>
            
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p class="footer__copy"> Made in India</p>
            <a  href="https://www.linkedin.com/in/bikash-sah-7222951b8/"  target="_blank">&#169;<h3 >Bikash Sah</h3></a>
        </footer>
  );
}

export default Footer;
