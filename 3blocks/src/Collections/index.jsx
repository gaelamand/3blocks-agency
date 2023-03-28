import React from "react";
import { Link } from "react-router-dom";
import joconde from "../assets/joconde.jpg"

const Collections = () => (

    // Main container
    <div className="flex">
        {/* Stiky Development text */}
        <div className="flex flex-col w-48 mt-36 ml-32">
            <h4 className="text-2xl font-bold">
                Creation
            </h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint ex cum accusantium voluptatem explicabo voluptatibus repellendus ratione eligendi delectus quam sunt vel, molestiae veniam minima quaerat, architecto adipisci non!</p>
        </div>

        {/* Collections paragraph */}
        <div className="flex flex-col my-28">
        <div className="">
            <h6 className="">
                The 3blocks people
            </h6>
        </div>
        <img className="w-72" src={joconde} alt="Cards projects" />
        </div>
    </div>

)

export default Collections
