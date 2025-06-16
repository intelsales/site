
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">IntelSales</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-neutral-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-neutral-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-neutral-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-neutral-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-neutral-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contato')}
              className="gradient-purple text-white hover:opacity-90 transition-opacity"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-purple-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-neutral-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-neutral-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-neutral-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-neutral-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-neutral-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('contato')}
                  className="gradient-purple text-white hover:opacity-90 transition-opacity w-full"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
