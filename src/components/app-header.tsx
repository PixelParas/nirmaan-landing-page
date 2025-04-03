import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-5 items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="src\assets\GDG_logo.png" alt="Logo" className="h-10 w-15" />
        <img src="src\assets\textLogo.png" alt="Logo" className="h-15 w-30" />
      </div>


      {/* Right: Navigation Links */}
      <nav className="flex items-center gap-4">
        <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost">Brochure</Button>
        </a>
        <a href="#prizes">
          <Button variant="ghost">Prizes</Button>
        </a>
        <a href="#timeline">
          <Button variant="ghost">Timeline</Button>
        </a>
        <a href="#sponsors">
          <Button variant="ghost">Sponsors</Button>
        </a>
        <a href="#testimonials">
          <Button variant="ghost">Testimonials</Button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
