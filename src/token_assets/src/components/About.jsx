import React from "react";

function About() {
  return (
    <section class="about section " id="about">
                <h2 class="section-title">About</h2>


                   
                    <div class="about__container bd-grid">
                        <h2 class="about__subtitle">What is Bharat Token?</h2>
                        <p class="about__text">Bharat Token is Made in India CryptoCurrency. At its heart, Bharat Token is a crypto movement that makes people think about decentralisation! 
                            It is also an peer-to-peer 
                        cryptocurrency that utilises blockchain technology, a highly secure decentralised system of 
                        storing information as a public ledger that is maintained by a network of computers called nodes. 
                        It is Built on ICP Blockchain. Using Motoko Backend.
                        </p>           
                    </div>  
                    <hr />
                    <div class="about__container bd-grid">
                    
                        <h2 class="about__subtitle">Who is the Founder of Bharat Token?</h2>
                        <div class="about__img">
                        <img src="Founder.jpg" alt="Founder"/>
                        <hr/>
                        <p class="about__text">
                            Founder of Bharat Token is <a href="https://www.linkedin.com/in/bikash-sah-7222951b8/"  target="_blank"> Bikash Sah. </a>
                            A Final Year CS Undergrad at <a href="https://jadavpuruniversity.in/"  target="_blank"> Jadavpur University.</a>
                        </p> 
                    </div>
                        
                                  
                    </div>  
                    <hr />
                    <div class="about__container bd-grid">
                        <h2 class="about__subtitle">Why there is a need for Bharat Token?</h2>
                        <p class="about__text">
                            During 2008 Financial Crisis, we finally came to know the Disadvantages of Centralised Banking
                            System.
                            The amount of money looted by the rich in the name of Credit was enormous.
                            Therefore there is a need of a Decentralised Currency from India called Bharat Token. 
                        </p>           
                    </div>   
                             

            </section>
  );
}

export default About;