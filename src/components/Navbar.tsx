
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold">ENERGIE AUSWEIS</span>
              <span className="text-primary text-xl font-bold">48</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors">
                <span>Lösung für</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors">
                <span>Produkte</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="/preise" className="text-gray-800 hover:text-primary transition-colors">
              Preise
            </a>
            <a href="/uber-uns" className="text-gray-800 hover:text-primary transition-colors">
              Über uns
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors">
                <span>Events & News</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
              Jetzt bestellen
            </button>
            <button className="text-primary hover:text-primary-dark transition-colors">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Lösung für
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Produkte
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Preise
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Über uns
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Events & News
            </a>
            <button className="w-full mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
              Jetzt bestellen
            </button>
            <button className="w-full mt-2 text-primary hover:text-primary-dark">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
