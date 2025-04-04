// import { Button } from "@/components/ui/button";
// import { Link } from "react-scroll"; // Import Link from react-scroll

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src="src\assets\GDG_logo.png"
          alt="Logo"
          className="h-10 w-auto" // Maintain aspect ratio
        />
        <img
          src="src\assets\textLogo.png"
          alt="Logo"
          className="h-10 w-auto hidden sm:block" // Hide on small screens
        />
      </div>
    </header>
  );
};

export default Header;
