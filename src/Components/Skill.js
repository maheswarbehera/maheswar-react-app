import React from 'react';


 export default function Skill() {
  return (
    <>
    <div className="Skill-page py-5">
        <h2 className="pb-5">Skills</h2>
        

        <div className="row">
            <div className="col-5">
                <div className="frontend pb-4">
                    <h3>Frontend developer</h3>
                    <span>More then 1 years</span>
                </div>
                <div className="css d-flex justify-content-between">
                    <div className="">HTML</div>
                    <div className="">95</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                    <div className="progress-bar" style={{width:"95%"}}></div>
                </div>
                <div className="css d-flex justify-content-between">
                    <div className="">CSS</div>
                    <div className="">85</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                    <div className="progress-bar" style={{width:"85%"}}></div>
                </div>
                <div className="css d-flex justify-content-between">
                    <div className="">JAVASCRIPT</div>
                    <div className="">75</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                    <div className="progress-bar" style={{width:"75%"}}></div>
                </div>                
            </div>
            <div className="col-2"></div>
            <div className="col-5">
                <div className="frontend pb-4">
                    <h3>Backend developer</h3>
                    <span>More then 1 years</span>
                </div>
                <div className="php d-flex justify-content-between">
                    <div className="">PHP</div>
                    <div className="">80</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                    <div className="progress-bar" style={{width:"95%"}}></div>
                </div>
                <div className="Mysql d-flex justify-content-between">
                    <div className="">MYSQL</div>
                    <div className="">85</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                    <div className="progress-bar" style={{width:"85%"}}></div>
                </div>
                <div className="java d-flex justify-content-between">
                    <div className="">JAVA</div>
                    <div className="">75</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"10px"}}>
                    <div className="progress-bar" style={{width:"75%"}}></div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

 