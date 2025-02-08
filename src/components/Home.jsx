import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoveQuestion = () => {
  const [message, setMessage] = useState("Will you be my Valentine?");
  const [showBtn, setShowBtn] = useState(true)
  const noBtnRef = useRef(null);
  const navigate = useNavigate()

  const handleYesClick = () => {
    setShowBtn(false)
    setMessage("I Love You :)");
    setTimeout(() => {
      navigate('/dates')
    }, 3000);
  }

  const handleNoHover = () => {
    if (noBtnRef.current) {
      const btn = noBtnRef.current;
      const btnWidth = btn.offsetWidth;
      const btnHeight = btn.offsetHeight;

      const maxX = window.innerWidth - btnWidth - 20;
      const maxY = window.innerHeight - btnHeight - 20;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      btn.style.position = "fixed";
      btn.style.left = `${randomX}px`;
      btn.style.top = `${randomY}px`;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[url('../../public/valentine.jpg')] bg-cover overflow-hidden relative">
      <div className="relative w-auto h-auto">
        <h1
            className="text-7xl text-center text-white font-sacramento relative z-10"
            style={{
            fontFamily: '"Sacramento", cursive',
            textShadow:
                '0 0 5px #fff, 0 0 10px #ff6ec7, 0 0 15px #ff6ec7, 0 0 20px #ff6ec7, 0 0 30px #ff6ec7, 0 0 40px #ff6ec7',
            }}>{message}</h1>
        <div className="absolute inset-0 bg-red-500 bg-opacity-90 blur-lg z-0"></div>
    </div>
      
        {showBtn &&
          <div className="mt-24 flex items-center justify-center gap-6 z-10 relative">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg cursor-pointer" onClick={handleYesClick}>
              Yes
            </button>
              <button
              ref={noBtnRef}
              className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg transition-all duration-200 cursor-pointer"
              onMouseOver={handleNoHover}>
              No
            </button>
          </div>
        }
    </div>
  );
};

export default LoveQuestion;
