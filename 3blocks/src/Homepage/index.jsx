import React from "react";
import trois from '../assets/trois.png'
import cards from '../assets/cards.png'
import coin from '../assets/coin.png'
import wave from '../assets/wave.png'
import { Link } from "react-router-dom";


const Homepage = () => (
    <div className="">
        <div class="flex flex-col items-center justify-center h-screen">
            <h2 class="text-xl mb-4">Welcome to 3blocks</h2>
            <div class="text-center">
                <h1 class="text-8xl mb-6 font-bold">The first <br /> Advertising dAgency.</h1>
            </div>
            <p class="mb-8">Secure. Transparent. Decentralized</p>
            <img class="w-24 mt-10" src={trois} alt="Logo 3blocks" />
        </div>

        <div className="h-screen border">

        </div>

        <div class="flex h-screen">
            <div class="flex-1 flex flex-col justify-center gap-4 pr-10 pl-40">
                <h3 class="font-bold text-7xl">Creation</h3>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? Earum, fugiat sit corporis nihil rerum velit, dignissimos qui dolorem laboriosam autem placeat impedit ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus?</p>
                <Link to="/creation">
                    <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                </Link>
            </div>
            <div class="flex-1 flex items-center justify-center pr-10">
                <img className="w-6/5" src={cards} alt="Cards projects" />
            </div>
        </div>

        <div class="flex h-screen">
            <div class="flex-1 flex items-center justify-center pr-10">
                <img className="max-w-3xl" src={wave} alt="Cards projects" />
            </div>
            <div class="flex-1 flex flex-col justify-center gap-4 pl-10 pr-28">
                <h3 class="font-bold text-7xl">Development</h3>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? Earum, fugiat sit corporis nihil rerum velit, dignissimos qui dolorem laboriosam autem placeat impedit ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus?</p>
                <Link to="/development">
                    <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                </Link>
            </div>
        </div>

        <div class="flex h-screen">
            <div class="flex-1 flex flex-col justify-center gap-4 pl-40 pr-10">
                <h3 class="font-bold text-7xl">Finance</h3>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? Earum, fugiat sit corporis nihil rerum velit, dignissimos qui dolorem laboriosam autem placeat impedit ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus?</p>
                <Link to="/finance">
                    <button class="btn btn-outline hover:text-black w-32 text-base">Explore {">"} </button>
                </Link>
            </div>
            <div class="flex-1 flex items-center justify-center pr-10">
                <img className="w-6/5" src={coin} alt="Cards projects" />
            </div>
        </div>

        <div class="flex h-96 w-1/2">
            <div class="flex-1 flex flex-col justify-center gap-4 pl-40">
                <h3 class="font-bold text-7xl">Let's talk</h3>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa mollitia, nobis accusantium cupiditate necessitatibus? </p>
                <a href="mailto:3blocks_dagency@gmail.com" class="btn btn-outline hover:text-black w-32 text-base">Contact</a>

            </div>
        </div>

        
    </div>
    )

export default Homepage
