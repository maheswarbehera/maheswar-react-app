import React from 'react';
import aboutbanner from '../images/aboutbanner.png'
function About() {
  return (
    <>
    <div className="about-page py-5">
        <h2 className="pb-5">About Me</h2>
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="desc pt-3">
                    <p className="fs-6"> <strong>Hi I'm Maheswar Behera,</strong> When I have free time, it's great to indulge in some of my favorite hobbies like study Maths & Science and exploring different kinds of new technology.
                    I have strong foundation in HTML, CSS, JS, ANGULAR and PHP. I am interested in working on projects with an open-source focus.</p>
                    <p className="fs-6">We are a team of developers who love building software and creating beautiful user experiences.</p>
                </div>
            </div>
            <div className="col-lg-7">
                <img src={aboutbanner} alt="" />
            </div>
        </div>
    </div>
    </>
  );
}

export default About;
