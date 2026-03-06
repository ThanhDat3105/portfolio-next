'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'About Me', id: 'aboutMePage' },
    {
      name: 'Edu. & Cert.',
      id: 'educationAndCertificatePage'
    },
    { name: 'skills', id: 'skillsPage' },
    { name: 'projects', id: 'projectsPage' },
    { name: 'companies', id: 'companiesPage' },
    { name: 'contact', id: 'contactPage' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-5 transition-all duration-500 ${
        scrolled ? 'bg-[#141414] shadow-md' : 'bg-transparent backdrop-blur'
      }`}
    >
      <div className='m-auto flex items-center justify-between px-5 sm:max-w-[540px] sm:px-0 md:max-w-[720px] md:min-w-[720px] lg:max-w-[960px] lg:min-w-[960px] xl:max-w-[1200px] xl:min-w-[1200px] 2xl:max-w-[1290px] 2xl:min-w-[1290px]'>
        <div className='text-2xl font-bold text-white'>Portfolio.</div>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-5 text-sm font-bold text-gray-300 lg:flex'>
          {navItems.map((item) => (
            <button
              key={item.id}
              className='hoverItemMenu relative cursor-pointer px-2 py-1 text-lg text-white outline-none'
              onClick={() => scrollToSection(item.id)}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='z-50 flex flex-col gap-1.5 lg:hidden'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label='Toggle menu'
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#141414] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className='mt-20 flex flex-col gap-6 p-8'>
          {navItems.map((item) => (
            <button
              key={item.id}
              className='text-left text-lg font-bold text-white transition-colors hover:text-gray-300'
              onClick={() => scrollToSection(item.id)}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
