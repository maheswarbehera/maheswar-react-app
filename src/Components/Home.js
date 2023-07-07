import React from 'react';
import homebanner from '../images/homebanner.png';
// import About from './About';
// import Skill from './Skill';
// import Contact from './Contact';
function Home() {
  return (
    <>
    
        
        <div className="home-page pt-5">
            <div className="desc pt-3">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <img src={homebanner} alt="" />
                    </div>
                    <div className="col-lg-5">
                        <p className="fs-6">
                        <strong>Welcome To My React App! </strong> <br/>
                        <span>Hello, i'm Maheswar </span><br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni, labore rerum animi a assumenda quidem, culpa placeat quibusdam esse libero tempore voluptas. Voluptatibus dicta, vero harum voluptatum corrupti perspiciatis!
                    </p>
                    </div>
                </div>                
            </div>
        </div>
        {/* <About/>
        <Skill/>               
        <Contact/> */}
    </>

  );
}

export default Home;
