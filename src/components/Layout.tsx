import { Outlet, Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-flamingo rounded-lg flex items-center justify-center transform group-hover:-rotate-12 transition-transform shadow-lg shadow-flamingo/20">
                <span className="text-white font-bold text-xl leading-none font-display">F</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                Flamingo
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-ink transition-colors">How it works</a>
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-ink transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-ink transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-ink transition-colors">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="hidden lg:inline-flex">Log in</Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 -mr-2 text-gray-600 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <a href="#how-it-works" className="block px-3 py-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>How it works</a>
              <a href="#features" className="block px-3 py-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#pricing" className="block px-3 py-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="block px-3 py-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2 px-3">
                <Button variant="outline" className="w-full justify-center">Log in</Button>
                <Button className="w-full justify-center">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            <div className="col-span-2 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6 inline-flex">
                <div className="w-8 h-8 bg-flamingo rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl leading-none font-display">F</span>
                </div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  Flamingo
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                Modern solutions designed to help brands grow faster, convert better, and scale smarter. Build the future with Flamingo.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4 lg:mb-6">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4 lg:mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4 lg:mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Flamingo Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
