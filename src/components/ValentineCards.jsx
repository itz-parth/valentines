import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
    { id: 1, date: "February 7", title: "Rose Day", description: "Roses can be unseen, your beauty cannot." },
    { id: 2, date: "February 8", title: "Propose Day", description: "Propose? You were mine the day my eyes met yours." },
    { id: 3, date: "February 9", title: "Coming soon"},
    { id: 4, date: "February 10", title: "Coming soon"},
    { id: 5, date: "February 11", title: "Coming soon"},
    { id: 6, date: "February 12", title: "Coming soon"},
    { id: 7, date: "February 13", title: "Coming soon"},
    { id: 8, date: "February 14", title: "Coming soon"},

//   { id: 1, date: "February 7", title: "Rose Day", description: "Express love with beautiful roses." },
//   { id: 2, date: "February 8", title: "Propose Day", description: "A perfect day to confess your feelings." },
//   { id: 3, date: "February 9", title: "Chocolate Day", description: "Sweeten your love with chocolates." },
//   { id: 4, date: "February 10", title: "Teddy Day", description: "Gift a cute teddy as a sign of warmth." },
//   { id: 5, date: "February 11", title: "Promise Day", description: "Make a heartfelt promise to your love." },
//   { id: 6, date: "February 12", title: "Hug Day", description: "Share warm hugs and spread love." },
//   { id: 7, date: "February 13", title: "Kiss Day", description: "Seal your love with a kiss." },
//   { id: 8, date: "February 14", title: "Valentine's Day", description: "Celebrate love with your special one." },
];

const ValentineCards = () => {
    const navigate = useNavigate()
    
    const handleClick = (event) => {
        navigate(`/dates/${event.id}`);
      };
      

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center  bg-[url('../../bg2.jpg')] bg-cover">
        <h1 className="text-4xl font-bold text-white mb-6 font-[Source Code Pro]">
            💖 Valentine's Week Special 💖
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {events.map((event) => (
            <div
                key={event.id}
                className="relative bg-[#202022] text-white max-w-[15rem] p-6 rounded-lg transition-all duration-200 transform hover:scale-110 hover:shadow-xl cursor-pointer"
                style={{
                transform: `rotate(${event.id % 2 === 0 ? "-5deg" : "5deg"})`,
                }}
                onClick={() => handleClick(event)}>
                <div className="text-lg font-bold flex justify-between items-center">
                    {event.title}
                    <span className="w-4 h-4 bg-transparent border border-pink-500 rounded-full shadow-inner shadow-pink-500"></span>
                </div>
                <p className="text-pink-400 text-sm mt-2">{event.date}</p>
                <p className="text-sm mt-2">{event.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ValentineCards;
