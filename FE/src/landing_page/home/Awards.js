import React from 'react';

function Rwards() {
    return ( 
        <div className='container mt-5'>
         <div className='row'>
            <div className='col-6 p-5'>
                <img src='media/images/largestBroker.svg'/>
            </div>
            <div className='col-6 mt-5'>
              <h1>Largest stock broker in India</h1>
              <p className='mb-5'>2+ million zerodha client contribute to over 15% of all retail order
                volume in india daily by trading and investing in:</p> 
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>Future and Option</li>
                            <li>Commodity derivatives</li>
                            <li>Current derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                            <li>Stock & IPOs</li>
                            <li>Direct mutual Funds</li>
                            <li>Bonds and Gov. Security</li>
                        </ul>
                    </div>
                    </div> 
                    <img src='media\images\pressLogos.png' alt='pressLogo' style={{width:"90%"}} />
            </div>
         </div>
        </div>
     );
}

export default Rwards;