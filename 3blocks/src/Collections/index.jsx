import React from "react";
import './style.css'
// import { useState } from "react";
import images from '../data/images';

// import Groupe3 from "../assets/JUNGLE/Groupe3.png"
// import Groupe4 from "../assets/JUNGLE/Groupe4.png"
// import Groupe5 from "../assets/JUNGLE/Groupe5.png"
// import Groupe6 from "../assets/JUNGLE/Groupe6.png"
// import Groupe7 from "../assets/JUNGLE/Groupe7.png"
// import Groupe8 from "../assets/JUNGLE/Groupe8.png"
// import Groupe9 from "../assets/JUNGLE/Groupe9.png"
// import Groupe10 from "../assets/JUNGLE/Groupe10.png"
// import Groupe11 from "../assets/JUNGLE/Groupe11.png"
// import Groupe12 from "../assets/JUNGLE/Groupe12.png"
// import Groupe13 from "../assets/JUNGLE/Groupe13.png"
// import Groupe14 from "../assets/JUNGLE/Groupe14.png"
// import Groupe15 from "../assets/JUNGLE/Groupe15.png"
// import Groupe16 from "../assets/JUNGLE/Groupe16.png"
// import Groupe17 from "../assets/JUNGLE/Groupe17.png"
// import Groupe18 from "../assets/JUNGLE/Groupe18.png"
// import Groupe19 from "../assets/JUNGLE/Groupe19.png"
// import Groupe20 from "../assets/JUNGLE/Groupe20.png"
// import Zefaris1 from "../assets/SABLE/Zefaris1.png"
// import Zefaris2 from "../assets/SABLE/Zefaris2.png"
// import Zefaris3 from "../assets/SABLE/Zefaris3.png"
// import Zefaris4 from "../assets/SABLE/Zefaris4.png"
// import Zefaris5 from "../assets/SABLE/Zefaris5.png"
// import Zefaris6 from "../assets/SABLE/Zefaris6.png"
// import Zefaris7 from "../assets/SABLE/Zefaris7.png"
// import Zefaris8 from "../assets/SABLE/Zefaris8.png"
// import Zefaris9 from "../assets/SABLE/Zefaris9.png"
// import Zefaris10 from "../assets/SABLE/Zefaris10.png"
// import Zefaris11 from "../assets/SABLE/Zefaris11.png"
// import Zefaris12 from "../assets/SABLE/Zefaris12.png"
// import Zefaris13 from "../assets/SABLE/Zefaris13.png"
// import Zefaris14 from "../assets/SABLE/Zefaris14.png"
// import Zefaris15 from "../assets/SABLE/Zefaris15.png"
// import Zefaris16 from "../assets/SABLE/Zefaris16.png"
// import Zefaris17 from "../assets/SABLE/Zefaris17.png"
// import Zefaris18 from "../assets/SABLE/Zefaris18.png"
// import Zefaris19 from "../assets/SABLE/Zefaris19.png"
// import Zefaris20 from "../assets/SABLE/Zefaris20.png"


const Collections = () => 

    // Main container
    <div className="flex">
        {/* Stiky Development text */}
        <div className="flex flex-col w-48 mt-36 ml-32 fixed">
            <h4 className="text-2xl font-bold">
                Creation
            </h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint ex cum accusantium voluptatem explicabo voluptatibus repellendus ratione eligendi delectus quam sunt vel, molestiae veniam minima quaerat, architecto adipisci non!</p>
        </div>

        {/* Collections paragraph */}
        <div className="flex flex-col mt-28 w-full ml-80">
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-7xl line-1 anim-typewriter">THE ALIENOPEDIA</h1>
            </div>

            <div className="flex justify-center items-center">
                <h2 className="font-bold text-4xl my-10 text-lime-500">THE ERGOLZ</h2>
            </div>

            {/* Catégories */}
            <div className="flex justify-center items-center gap-5 flex-wrap">
                <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-lime-500 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Environment
                    </div>
                    <div className="collapse-content text-primary">
                        <lu>
                            <li>Lush jungle</li>
                            <li>Deep forest</li>
                        </lu>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-lime-500 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Housing
                    </div>
                    <div className="collapse-content text-primary">
                        <p>high-tech regen cities</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-lime-500 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Food
                    </div>
                    <div className="collapse-content text-primary">
                        <p>high-tech regen cities</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-lime-500 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Religion
                    </div>
                    <div className="collapse-content text-primary">
                        <p>worship Landai, spirit of the forest </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-lime-500 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-primary">
                        Characteristics
                    </div>
                    <div className="collapse-content text-primary">
                        <p>very organized, develop great technology, profound respect for nature</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 flex-wrap my-10">
                <div className="flex flex-col justify-center items-center gap-2">
                    {
                    images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
                {/* <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe2} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe3} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe4} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe5} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe6} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe7} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe8} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe9} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe10} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe11} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe12} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe13} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe14} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe15} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe16} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe17} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe18} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe19} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Groupe20} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div> */}
            </div>

            <div className="flex justify-center items-center">
                <h2 className="font-bold text-4xl my-10 text-yellow-500">THE ZEFARIS</h2>
            </div>

            {/* <div className="flex justify-center items-center gap-5 flex-wrap">
                <div tabIndex={0} className="collapse collapse-arrow border-primary bg-yellow-500 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Environment
                    </div>
                    <div className="collapse-content text-primary">
                        <lu>
                            <li>Lush jungle</li>
                            <li>Deep forest</li>
                        </lu>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border-primary bg-yellow-500  bg-primary-100 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Housing
                    </div>
                    <div className="collapse-content text-primary">
                        <p>high-tech regen cities</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border-primary bg-yellow-500  bg-primary-100 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Food
                    </div>
                    <div className="collapse-content text-primary">
                        <p>high-tech regen cities</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border-primary bg-yellow-500  bg-primary-100 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-center text-primary">
                        Religion
                    </div>
                    <div className="collapse-content text-primary">
                        <p>worship Landai, spirit of the forest </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border-primary bg-yellow-500  bg-primary-100 rounded-box w-48">
                    <div className="collapse-title text-xl font-medium text-primary">
                        Characteristics
                    </div>
                    <div className="collapse-content text-primary">
                        <p>very organized, develop great technology, profound respect for nature</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 flex-wrap my-10">
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris1} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris2} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris3} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris4} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris5} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris6} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris7} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris8} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris9} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris10} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris11} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris12} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris13} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris14} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris15} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris16} alt="Cards projects" />
                    <h3 className="">#1 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris17} alt="Cards projects" />
                    <h3 className="">#2 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris18} alt="Cards projects" />
                    <h3 className="">#3 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris19} alt="Cards projects" />
                    <h3 className="">#4 THE MUSICIAN</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-52 rounded-xl" src={Zefaris20} alt="Cards projects" />
                    <h3 className="">#5 THE MUSICIAN</h3>
                </div>
            </div> */}
        </div>
    </div>



export default Collections
