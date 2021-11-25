import React, { Component } from 'react';
import HEREMap from 'react-here-maps';
 
export default class Map extends Component {
    render() {
        return (
            <HEREMap 
                appId={"sDHmMuBEVGIAHKUBVrQo"}
                appCode={'sDHmMuBEVGIAHKUBVrQo'}
                // apikey={"xnlzYffs28Ulilc8LNLHFCDU_8tgSd_I8dw7GKo2mtA"}
                center={{ lat: 0, lng: 0 }}
                zoom={14}
            />
        )
    }
}