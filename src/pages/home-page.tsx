import React, { useState, useEffect } from "react";
import { LogoAndText } from "@/components/logo-and-text";
import { CountdownTimer } from "@/components/countdown-timer";
import { TimelineLayout } from "@/components/timeline-layout";
import { TimelineElement } from "@/components";
import { timelineData } from "@/assets/data"; // Assuming you have a timelineData file
import { Button } from "@/components/ui/button";

const sponsors = [
  { name: "Aptos", image: "src/assets/sponsers/Aptos.png" },
  { name: "BrainlyAI", image: "src/assets/sponsers/BrainlyAI.png" },
  { name: "Geekster", image: "src/assets/sponsers/Geekster.png" },
  { name: "Lanaevi Solutions", image: "src/assets/sponsers/Lanaevi Solutions.png" },
  // Add more sponsors as needed
];

const HomePage = () => {
  return (
    <div
      className="relative w-full flex flex-col items-center"
      style={{
        backgroundImage: "url('src/assets/websiteBackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating Elements */}
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-red-500 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-14 h-14 sm:w-20 sm:h-20 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-5 left-1/4 sm:bottom-10 sm:left-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-500 rounded-full opacity-70 animate-spin"></div>
      <div className="absolute bottom-10 right-1/5 sm:bottom-20 sm:right-1/4 w-10 h-10 sm:w-14 sm:h-14 bg-green-500 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-1/5 left-1/5 sm:top-1/4 sm:left-1/4 w-6 h-6 sm:w-10 sm:h-10 bg-purple-500 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 sm:bottom-1/3 sm:right-1/3 w-12 h-12 sm:w-18 sm:h-18 bg-orange-500 rounded-full opacity-70 animate-bounce"></div>

      {/* Logo, Text, and Timer */}
      <div className="flex flex-col gap-5 h-auto items-center w-9/12 sm:w-1/2 absolute top-1/10 sm:top-1/3 left-1/2 transform -translate-x-1/2">
        <img src="src/assets/middleLogo.png" alt="Middle Logo" className="mt-4" />
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
          MIT's Largest Hackathon
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
        <Button 
          className="bg-white text-gray-800 shadow-lg hover:shadow-xl hover:text-white transition-all relative after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-blue-500 after:via-red-500 after:to-yellow-500 after:blur-lg"
          onClick={() => window.location.href = '/brochure.pdf'}
        >
          Download Brochure
        </Button>
        <Button 
          className="bg-white text-gray-800 shadow-lg hover:shadow-xl hover:text-white transition-all relative after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-blue-500 after:via-red-500 after:to-yellow-500 after:blur-lg"
          onClick={() => window.location.href = '/register'}
        >
          Register Now
        </Button>
        </div>

        <CountdownTimer />

        {/* Prizes Section */}
        <div className="w-full bg-gray-100 py-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Prizes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-5xl">
            {/* Prize Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-600">First Prize</h3>
              <p className="text-gray-700 mt-2">Description of the first prize.</p>
            </div>
            {/* Prize Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-red-600">Second Prize</h3>
              <p className="text-gray-700 mt-2">Description of the second prize.</p>
            </div>
            {/* Prize Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600">Third Prize</h3>
              <p className="text-gray-700 mt-2">Description of the third prize.</p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="w-full bg-white py-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Timeline</h2>
          <TimelineLayout items={timelineData} size="lg" iconColor="primary" />
        </div>

        {/* Sponsors Section */}
        <div className="w-full bg-gray-100 py-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Sponsors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-5xl">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-40 h-auto mb-4"
                />
                <p className="text-lg font-medium text-gray-700">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
