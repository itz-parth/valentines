import React from 'react';

const Date2 = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-[url('../../pday_bg.jpg')] bg-cover">
      <h1 
        className="text-red-600 text-3xl mb-4" 
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Propose Day
      </h1>
      <img src="../../../propose_day.webp" alt="Propose Day" />
      <h1 
        className="text-red-600 text-3xl mt-4" 
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Will you be my forever?
      </h1>
    </div>
  );
};

export default Date2;
