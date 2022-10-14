import React from 'react';
import "../components/style.css";

function HowItWorks() {
  return (
    <div className='m-5 justify-center '>
      <h3 className="bg-white w-15 p-4 h-3 mx-20 my-3 flex justify-center items-center md:font-bold lg:font-bold sm:font-bold">
        Pros and Cons of My Medicare
      </h3>
      <p className="bg-teal-300 justify-item-center rounded m-3  ">
        MY MEDICARE’s purpose is simple: make it easier and faster for people to
        schedule appointments with doctors and healthcare providers, without
        waiting on hold or finding out there are no appointments available for
        weeks. With the MY MEDICARE app, users choose the type of care they
        need, including primary care, dentistry, psychiatry, vision,
        dermatology, and more, enter basic information about their location,
        when they need an appointment, and what type of insurance they have.
        From there, the app lets patients view providers with open appointment
        slots in the next 24 hours and book their appointments instantly online.
        MY MEDICARE will also send you reminder notifications. Pros & Cons of My
        Medicare App
        <h4 className="bg-blue-300 text-blue-700 w-15 p-4 h-3 mx-20 my-3 flex justify-center items-center md:font-bold lg:font-bold sm:font-bold">
          Pros:{" "}
        </h4>
        The best feature of My Medicare is its simplicity. It is an online
        directory of healthcare providers, through which patients can find
        available appointments for a variety of services. My Medicare lets users
        search for an available physician based on their geographic location,
        desired appointment time, condition, star rating, and health insurance
        network.  The My Medicare app is available in many different languages,
        including English, Arabic, Spanish, French, and Italian.  Patients can
        use My Medicare to find practitioners for a variety of different
        healthcare needs, including primary care, dermatology, dentistry,
        psychiatry, and gynecology.
        <h4 className="bg-blue-300 text-red-600 w-15 p-4 h-3 mx-20 my-3 flex justify-center items-center md:font-bold lg:font-bold sm:font-bold">
          Cons:{" "}
        </h4>
         The main con of My Medicare is that it is not yet available
        nationwide. Currently, only residents of 10 major regions can use My
        Medicare’s platform to connect with care.  Users’ options are limited
        to practices that have specifically opted in to the My Medicare
        platform, meaning they are not getting the widest possible selection of
        practitioners for their particular need.
      </p>
    </div>
  );
}

export default HowItWorks
