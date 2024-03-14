import React from 'react';

export default function TopReads() {
  return (
    <>
      <div className='TO'>
        <h2 className='TOPR'>Top Reads</h2>
        <h2 className='TOPPP'>Watch Now</h2>
      </div>
      <div className='Read'>
        <div className='TopReads'>
          <div className='one'>
            <h1 className='N'>1</h1>
            <h3 className='C'>Cough Medicine and Diabetes: 5 Things To Look For</h3>
          </div>
          <p className='para'>Medically reviewed by Kelsey Stalvey, PharmD</p> 
          <hr/>  

          <div className='one'>
            <h1 className='N'>2</h1>
            <h3 className='C'>Eating Pizza With Diabetes: 5 Tips</h3>
          </div>
          <p className='para'>Medically reviewed by Lisa Booth, RDN</p> 
          <hr/>  

          <div className='one'>
            <h1 className='N'>3</h1>
            <h3 className='C'>Can You Reverse Type 2 Diabetes? FAQs on Diet and Lifestyle Changes</h3>
          </div>
          <p className='para'>Medically reviewed by Robert Hurd, M.D.</p> 
        </div>
        
        <h2 className='TOP'>Watch Now</h2>
        
        <div className='watch'>
        
          <div className='video'>
            <iframe src='https://players.brightcove.net/6165828826001/GNE80QR1v_default/index.html?videoId=6310495924112' allowFullScreen className="custom-iframe"></iframe>    
          </div>
          <div className='strug'>
             <h3 className='str'>Self-Kindness When Struggling: 6-Minute Guided Meditation</h3>
          </div>
          <div className='min'>
             <p className='miii'>by DiabetesTeam 6 minute watch</p>
          </div>
        </div>
      </div>
    </>
  );
}
