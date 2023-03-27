import React from "react";
import { Link } from "react-router-dom";
import joconde from "../assets/joconde.jpg"

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
        <div className="flex flex-col my-28">
            <div className="flex w-full justify-center mb-20">
                <div class="flex items-center pr-14">
                    <img className="w-72" src={joconde} alt="Cards projects" />
                </div>
                <div class="flex flex-col justify-center gap-4 w-1/3">
                    <h3 class="font-bold text-5xl">The Alienopedia</h3>
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus?</p>
                    <Link to="/">
                        <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                    </Link>
                </div>
            </div>

            <div className="flex w-full justify-center mb-20">
                <div class="flex flex-col justify-center gap-4 w-1/3">
                    <h3 class="font-bold text-5xl">Blue fren</h3>
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? </p>
                    <Link to="/">
                        <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                    </Link>
                </div>
                <div class="flex items-center pl-14">
                    <img className="w-72" src={joconde} alt="Cards projects" />
                </div>
            </div>

            <div className="flex w-full justify-center mb-20">
                <div class="flex items-center pr-14">
                    <img className="w-72" src={joconde} alt="Cards projects" />
                </div>
                <div class="flex flex-col justify-center gap-4 w-1/3">
                    <h3 class="font-bold text-5xl">La Djoconde</h3>
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? </p>
                    <Link to="/">
                        <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

)

export default Creation
