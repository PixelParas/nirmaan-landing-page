import { CountdownTimer } from "./countdown-timer";

export const LogoAndText = () => {
  return (
    <div className="flex flex-col gap-5 h-auto items-center w-9/12 sm:w-1/2 absolute top-1/10 sm:top-1/3 left-1/2 transform -translate-x-1/2">
      <img src="src/assets/middleLogo.png" alt="Middle Logo" />
      <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
        MIT's Biggest Hackathon
      </h1>
      <CountdownTimer />
    </div>
  );
};