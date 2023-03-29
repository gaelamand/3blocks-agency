import React from "react";
import { Link } from "react-router-dom";
import Alienopedia from "../assets/Alienopedia.png"
import bluefren from "../assets/bluefren.png"


const Creation = () => (

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
        <div className="flex flex-col mt-28">
            <div className="flex justify-center mb-10">
                    <img className="w-96" src={Alienopedia} alt="Cards projects" />
                <div class="flex flex-col justify-center gap-4 w-1/3">
                    <h3 class="font-bold text-5xl">The Alienopedia</h3>
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus?</p>
                    <Link to="/Collections">
                        <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center mb-10">
                <div class="flex flex-col justify-center gap-4 w-1/3">
                    <h3 class="font-bold text-5xl text-end">Blue fren</h3>
                    <p class="text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? </p>
                    <Link to="/">
                        <button class="btn btn-outline hover:text-black w-32 text-base ml-72">Explore {">"} </button>
                    </Link>
                </div>
                <div class="">
                    <img className="w-96" src={bluefren} alt="Cards projects" />
                </div>
            </div>
        </div>
    </div>

)

export default Creation
