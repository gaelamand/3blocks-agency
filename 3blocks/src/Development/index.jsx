import React from "react";
import './style.css'
// import trois from "../assets/trois.png"

const Development = () => (

    // Main container
    <div className="flex ">
        {/* Stiky Development text */}
        <div className="flex flex-col w-44 mt-36 ml-32">
            <h4 className="text-2xl font-bold">
                Development
            </h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint ex cum accusantium voluptatem explicabo voluptatibus repellendus ratione eligendi delectus quam sunt vel, molestiae veniam minima quaerat, architecto adipisci non!</p>
        </div>

        <div className="flex flex-col justify-center items-center w-2/3 ml-24 overflow-y ">
            {/* <img src={trois} alt="Bureaux 3blocks" /> */}
            <div className="grid grid-cols-2 w-full gap-10">
                <div>
                    <h5 className="text-xl font-bold">We upgrade</h5>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga nesciunt ducimus ad est reprehenderit molestias eveniet ipsa? Sunt commodi a, culpa est adipisci porro inventore perferendis maxime eum hic.</p>
                </div>
                <div>
                    <h5 className="text-xl font-bold">DAO</h5>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga nesciunt ducimus ad est reprehenderit molestias eveniet ipsa? Sunt commodi a, culpa est adipisci porro inventore perferendis maxime eum hic.</p>
                </div>
                <div>
                    <h5 className="text-xl font-bold">Foundation</h5>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga nesciunt ducimus ad est reprehenderit molestias eveniet ipsa? Sunt commodi a, culpa est adipisci porro inventore perferendis maxime eum hic.</p>
                </div>
                <div>
                    <h5 className="text-xl font-bold">Lorem Ipsum</h5>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga nesciunt ducimus ad est reprehenderit molestias eveniet ipsa? Sunt commodi a, culpa est adipisci porro inventore perferendis maxime eum hic.</p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-6 ">
                <div class="box p-14 flex flex-col justify-center">
                    <h5 class="text-3xl font-bold">Blockchain based Development</h5>
                    <p class="">Help web3 brands and projects building ideas to communicate and stand out advirtising campaigns.</p>
                </div>
                <div class="box p-14">
                    <h5 class="text-3xl font-bold">Tradictional brands Development</h5>
                    <p class="">We are aiming to introduce blockchain technology to traditioal brands who haven't, or barely, entered the space yet. Showing web3 as an upcoming communication opportunity.</p>
                </div>
                <div class="box p-14">
                    <h5 class="text-3xl font-bold">Individual Development</h5>
                    <p class="">We want to be able to help individuals by creating and maximazing their social identity (covers, thumbnails and else), developint their personal web3 needs and advise them managing their own brandings.</p>
                </div>
                <div class="box p-14">
                    <h5 class="text-3xl font-bold">Media Development</h5>
                    <p class="">Over lime, we want to broaden the agency and create different medias (Youtube, advertising sites, magasines...) to help us explore multiple advertising spots for web3 ads.</p>
                </div>
            </div>

            <div className="flex flex-col my-16">
                <h5 className="text-xl font-bold"> Lorem Ipsum </h5>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum dicta vitae reprehenderit eos ipsum doloremque itaque, laudantium modi beatae est laborum repudiandae illo asperiores voluptatem cum officia quae animi!
                </p>
            </div>


        </div>

    </div>

)

export default Development
