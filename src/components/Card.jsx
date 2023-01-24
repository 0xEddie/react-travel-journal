import React from "react"
import LocationPin from "/src/assets/location-pin.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--info">
                <div className="card--location">
                    <img src={LocationPin} />
                    <h4 className="card--country">{props.location.toUpperCase()}</h4>
                    <a className="card--gmapsUrl" href="{props.googleMapsUrl}">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}