import React from "react";
import { BrowserRouter , Link, Switch, Route} from "react-router-dom";

import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";
import Home from "./Home";
import About from "./About";
import ContactForm from "./Contact";

function Header() {
  return (
    // <header>
    //   <div className="blue window" id="logo">
    //     <h1>
    //       <span role="img" aria-label="tap emoji">
    //         <img />
    //       </span>
    //       BharatT
    //     </h1>
    //   </div>
    // </header>
    <BrowserRouter>
    <header class="l-header">
            <nav class="nav bd-grid">
            <Link to="/">
                <div>
                    <a href="#" class="nav__logo">Bharat Token</a>
                </div>
                </Link>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <Link to="/">
                        <li class="nav__item"> <a class="nav__link active"> Home</a></li>
                        </Link>
                        
                       

                        <Link to="/about">
                        <li class="nav__item"><a class="nav__link">About</a></li>
                        </Link>

                        <Link to="/claim">
                        <li class="nav__item"><a class="nav__link">Claim Free Token</a></li>
                        </Link>

                        <Link to="/check">
                        <li class="nav__item"><a  class="nav__link">Check Balance</a></li>
                        </Link>

                        <Link to="/transfer">
                        <li class="nav__item"><a  class="nav__link">Transfer Token</a></li>
                        </Link>

                        <Link to="/contact">
                        <li class="nav__item"><a class="nav__link">Contact</a></li>
                        </Link>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <Switch>
            <Route exact path="/">
                  {/* <Header /> */}
                  <Home/>

            </Route>

            <Route path="/about">
                <About/>

            </Route>

            <Route path="/claim">

            <Faucet />
             

            </Route>

            <Route path="/check">

            <Balance />
           
            </Route>

            <Route path="/transfer">

            <Transfer />
            
            </Route>

            <Route path="/contact">
                <ContactForm/>
            
            </Route>

          </Switch>
        </BrowserRouter>
  );
}

export default Header;
