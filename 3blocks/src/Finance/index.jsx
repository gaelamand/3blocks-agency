import React from "react";
import coin from '../assets/coin.png'
import { GiOpenChest } from 'react-icons/gi';

const Finance = () => (
    <div className="flex flex-col  items-center h-screen">
        <div className="flex">

            {/* Stiky Finance text */}
            <div className="flex flex-col w-44 mt-36 ml-32">
                <h4 className="text-2xl font-bold">
                    Finance
                </h4>
                <p className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint ex cum accusantium voluptatem explicabo voluptatibus repellendus ratione eligendi delectus quam sunt vel, molestiae veniam minima quaerat, architecto adipisci non!</p>
            </div>

            {/* Coin + Treasury */}
            <div className="flex items-center justify-between ml-40 mt-44">
                <img className="w-96 mr-8" src={coin} alt="coin" />

                <div className="flex flex-col w-80">
                    <div className="flex items-center mb-2">
                        <GiOpenChest className="text-4xl" />
                        <h5 className="font-bold text-4xl ml-2">Treasury</h5>
                    </div>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit deleniti facilis provident ullam cumque soluta similique, magni voluptate inventore dicta nam, aut voluptas rem enim saepe nemo amet ad?
                    </p>
                </div>
            </div>
        </div>
    </div>

)

export default Finance
