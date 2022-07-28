import React from 'react'
import './CovidInfo.css'
export default function CovidInfo() {
    
  return (
    <div>
        <div className="animatediv " >
  <img src="https://atheistiran.com/wp-content/uploads/2020/03/corona-virus.png"/>
  <img src="https://atheistiran.com/wp-content/uploads/2020/03/corona-virus.png"/>

  {/* <img src="https://atheistiran.com/wp-content/uploads/2020/03/corona-virus.png"/>

  <img src="https://atheistiran.com/wp-content/uploads/2020/03/corona-virus.png"/> */}
</div>
<div className="container text-center">
  <h1 >Covid-19 Cases In <span id="country"></span> </h1>
  
  <div className="card-deck text-center">
    <div className="card mb-2">
      <div className="card-body bg-primary text-light rounded">
        <h5 className="card-title"><i className="fas fa-tachometer-alt fa-2x"></i></h5>
        <h4 className="card-text">Active Cases</h4>
        <p className="card-text badge badge-outline-light" id="Active_Cases">21</p>
      </div>
    </div>
    <div className="card mb-2">
      <div className="card-body bg-info text-light rounded">
        <h5 className="card-title"><i className="fas fa-list fa-2x"></i></h5>
        <h4 className="card-text">Total Cases</h4>
        <p className="card-text badge badge-outline-light" id="Total_Cases">45</p>
      </div>
    </div>
    <div className="card mb-2">
      <div className="card-body bg-warning text-light rounded">
        <h5 className="card-title"><i className="fas fa-times-circle fa-2x"></i></h5>
        <h4 className="card-text">Critical Cases</h4>
        <p className="card-text badge badge-outline-light" id="Critical_Cases">61</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body bg-danger text-light rounded">
        <h5 className="card-title"><i className="fa fa-times fa-2x"></i></h5>
        <h4 className="card-text">Total Death</h4>
        <p className="card-text badge badge-outline-light" id="Total_Death">03</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body bg-success text-light rounded">
        <h5 className="card-title"><i className="fas fa-check-square fa-2x"></i></h5>
        <h4 className="card-text">Recovered Cases</h4>
        <p className="card-text badge badge-outline-light" id="Recovered_Cases"> 87 </p>   
      </div>
    </div>
    <div className="card">
      <div className="card-body bg-secondary text-light rounded">
        <h5 className="card-title"><i className="fas fa-eye fa-2x"></i></h5>
        <h4 className="card-text">Total Test Done</h4>
        <p className="card-text badge badge-outline-light" id="Total_Test_Done"> 21 </p>  
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
