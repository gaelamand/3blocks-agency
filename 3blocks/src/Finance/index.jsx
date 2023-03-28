import React from "react";
import uniqueCoin from '../assets/uniqueCoin.png'
import { GiOpenChest } from 'react-icons/gi';

const Finance = () => (
    <div className="flex h-screen">
        <div className="flex flex-col w-44 mt-36 ml-32">
            <h4 className="text-2xl font-bold">
                Finance
            </h4>
            <p className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint ex cum accusantium voluptatem explicabo voluptatibus repellendus ratione eligendi delectus quam sunt vel, molestiae veniam minima quaerat, architecto adipisci non!</p>
        </div>

        {/* Coin + Treasury */}
        <div className="flex h-screen">
    <div className="flex items-center justify-center">
        <img className="w-1/2" src={uniqueCoin} alt="coin" />
        <div className="flex flex-col w-96 justify-center">
            <div className="flex items-center mb-2">
                <GiOpenChest className="text-4xl" />
                <h5 className="font-bold text-4xl ml-2">Treasury</h5>
            </div>
            <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit deleniti facilis provident ullam cumque soluta similique, magni voluptate inventore dicta nam, aut voluptas rem enim saepe nemo amet ad?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero laborum perspiciatis quam saepe rerum necessitatibus animi nam, ipsam quae sunt quaerat voluptas expedita tempore laboriosam, amet sit quas molestiae.            
            </p>
        </div>
    </div>
</div>
    </div>

)

export default Finance
