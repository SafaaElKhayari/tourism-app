import React from 'react'
import "bootstrap-css-only/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

const DescriptionSection =() =>{
    return (
        <div className="description container-sm">
            <div className="row justify-content-end">
                <div className="col">
                    <h5 className="organizing-trip-title">We organize your trip</h5>
                            <p> We suggest a lot of interesting trajects tried by our clients that include recommendated attractions and authentic restaurants hotels  </p>
                </div>
        
                <div className="organizing-trip-inner col">
                    <div className="organizing-trip-content container ">
                        <div className="row row-cols-3">
                            <div className="col-3">
                                <i class="fas fa-bus-alt fa-2x  circle-icon"></i><div className="icon-text">Transport</div>
                            </div>
                            <div className="col-3">
                                <i class="far fa-compass fa-2x circle-icon"></i><div className="icon-text">Trip Guiding</div>
                            </div>
                        <div className="col-3">
                            <i class="fas fa-utensils fa-2x circle-icon"></i><div className="icon-text">Food & Bed</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row justify-content-end part2">
                <div className="col stunning-places-inner">
                    <div className="organizing-trip-content stunning container ">
                            <div className="row row-cols-3">
                                <div className="col-3">
                                    <i class="fab fa-pagelines fa-2x  circle-icon"></i><div className="icon-text">Nature</div>
                                </div>
                                <div className="col-3">
                                    <i class="fas fa-mosque fa-2x circle-icon"></i><div className="icon-text">Monuments</div>
                                </div>
                            <div className="col-3">
                                <i class="fas fa-dice fa-2x circle-icon"></i><div className="icon-text">Entertainment</div>
                            </div>
                        </div>
                </div>
                </div>
                <div className="col">
                    <h5 className="stunning-places-title">We help you discover stunning places</h5>
                    <p className="stunning-places-p">historical monuments, waterfalls, beaches, and cultural attractions such as the souks and old Medina, in addition to information on accommodations in the region (hotels, restaurants, cafes, etc.)</p>
                </div>
            </div>
        
            
        </div>
    )
}
export default DescriptionSection;