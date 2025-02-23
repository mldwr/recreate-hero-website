
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    { name: "Verbrauchsausweis", type: "Self Service", price: "ab 69,95 €" },
    { name: "Bedarfsausweis", type: "Self Service", price: "ab 99,95 €" },
    { name: "Bedarfsausweis", type: "Full Service im Video-Call", price: "ab 249,95 €" },
    { name: "Bedarfsausweis", type: "Full Service vor Ort", price: "ab 349,96 €" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold">ENERGIE AUSWEIS ONLINE</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              >
                <span>Produkte</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border">
                  <div className="py-2">
                    {products.map((product, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">{product.name}</span>
                          <span className="text-sm text-gray-600">{product.type}</span>
                          <span className="text-sm text-primary font-medium">{product.price}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/preise" className="text-gray-800 hover:text-primary transition-colors">
              Preise
            </a>
            <a href="/uber-uns" className="text-gray-800 hover:text-primary transition-colors">
              Über uns
            </a>
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
            <div className="block px-3 py-2">
              <button 
                className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Produkte</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Mobile Dropdown */}
              {isDropdownOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-sm text-gray-600">{product.type}</span>
                        <span className="text-sm text-primary font-medium">{product.price}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/preise" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Preise
            </a>
            <a href="/uber-uns" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Über uns
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
