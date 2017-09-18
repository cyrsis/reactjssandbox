import React from 'react'

//Stateless Components

export const Footer = (props) => {
    return (
        <div>
            <div className="container-fluid tabStrip">
                <ul className="nav nav-tabs text-center">
                    <li className="col-sm-3 grey"><a href=""><i className="fa fa-truck fa-2x col-sm-12"></i><span className="col-sm-12">Packers and Movers</span></a></li>
                    <li className="col-sm-3 orange"><a href=""><i className="fa fa-ship fa-2x col-sm-12"></i><span className="col-sm-12">Cargo</span></a></li>
                    <li className="col-sm-3 blue"><a href=""><i className="fa fa-building fa-2x col-sm-12"></i><span className="col-sm-12">Warehouse</span></a></li>
                    <li className="col-sm-3 green"><a href=""><i className="fa fa-building fa-2x col-sm-12"></i><span className="col-sm-12">Transport</span></a></li>
                </ul>
            </div>
        </div>
    )
}


