import React from 'react';

function Team() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
         <h1 className='fs-4 text-centre '>People</h1>
        </div>
        <div className='row p-5 mt-5 border-top text-muted fs-6'>
        <div className='col-6 p-5 text-centre'>
         <img src='media/images/nithinkamath.jpg'
         style={{borderRadius: "100%" , width:"50%"}}
         
         />
         <h4 className='mt-5'>Nithin Kamath</h4>
         <h6>Founder, CEO</h6>
        </div>
        <div className='col-6 p-5'>
       <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage //</a> <a href='' style={{textDecoration:"none"}}>TradingQnA /</a> <a href='' style={{textDecoration:"none"}}> Twitter</a></p>
        </div>
        </div>
       </div>
     );
}

export default Team;