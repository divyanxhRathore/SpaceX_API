import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

const Cards = ({response}) => {
    return (
        <>
            <header>Total Rockets: {response.length}</header>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {response.map((data)=>{
                        return(
                            <div key={data.id} className="col-sm-6">
                                <div className="card rocketCard my-3 alert-success">
                                <img src={data.flickr_images[0]} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <hr className="seperator" />
                                    <div className="row">
                                        <div className="col-sm-4 col-md-6 col-lg-6">
                                            <p className="rocket-details">Height: {Math.floor(data.height.feet)} ft</p>
                                        </div>
                                        <div className="col-sm-4 col-md-6 col-lg-6">
                                            <p className="rocket-details">Mass: {Math.floor(data.mass.kg/1000)} tones</p>
                                        </div>
                                        <div className="col-sm-4 col-md-6 col-lg-6">
                                            <p className="rocket-details">Success Rate: {Math.floor(data.success_rate_pct)} %</p>
                                        </div>
                                    </div>
                                    <hr className= "seperator"/>
                                    <p className="card-text">{data.description}</p>
                                    <a href={data.wikipedia} className="btn navigatorBtn">I want to know about this</a>
                                </div>
                            </div>
                            </div>
                            
                        )
                    })}
                    
                    
                </div>
            </div>
        </>
    )
}

export default Cards
