import React from "react";
import { BrowserRouter , Link, Switch, Route} from "react-router-dom";
import Faucet from "./Faucet";

function Home() {
  return (
    <BrowserRouter>
    <main class="l-main">
   <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">
                        Welcome 
                        To
                        <br/>
                        <span class="home__title-color">Bharat Token
                        </span>
                        
                    </h1>
                    {/* <br/> */}
                        <h2>Future of Crypto Currency!</h2>
                        <br/>
                        
                        <Link to="/claim"> 
                    <a href="/" class="button">
                    Claim Your FREE Tokens Here!    </a>   </Link>
                </div>

                {/* <div class="home__social">
                    <a href="/" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div> */}
                <br/>
                        <br/>
                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image class="home__blob-img" x="50" y="60" href="bitcoin.png"/>
                        </g>
                    </svg>
                </div>
            </section>
            </main>
            <Switch>
            

            <Route path="/claim">

               <Faucet/>
             

            </Route>

           

          </Switch>
            </BrowserRouter>
                

);
}

export default Home;