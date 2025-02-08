import React from 'react';
import { useParams } from 'react-router-dom';
import Date1 from './dates/Date1';
import Date2 from './dates/Date2';
import Default from './dates/Default'; 

const EventDetails = () => {
  const { id } = useParams(); 

  let content;

  switch (id) {
    case '1':
      content = <Date1 />;
      break;
    case '2':
      content = <Date2 />;
      break;
    default:
      content = <Default />; 
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white">
      {content}
    </div>
  );
};

export default EventDetails;
