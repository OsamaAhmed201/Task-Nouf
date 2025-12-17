import { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from "react-router-dom";
import logo from './../../../assets/Nimbus logo.png';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تحديث activeItem بناءً على المسار الحالي
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === '/') setActiveItem('home');
    else if (path.includes('features')) setActiveItem('features');
    else if (path.includes('about')) setActiveItem('about');
    else if (path.includes('platforms')) setActiveItem('platforms');
    else if (path.includes('testimonials')) setActiveItem('testimonials');
    else setActiveItem('');
  }, [location]);

  const navItems = [
    { key: "home", label: t('navbar.items.0'), path: "/" },
    { key: "features", label: t('navbar.items.1'), path: "/features" },
    { key: "about", label: t('navbar.items.2'), path: "/about" },
    { key: "platforms", label: t('navbar.items.3'), path: "/platforms" },
    { key: "testimonials", label: t('navbar.items.4'), path: "/testimonials" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className={`absolute inset-0 ${scrolled ? "bg-black/80 shadow-lg backdrop-blur-md" : "bg-transparent"}`}></div>

        <div className="relative mx-auto w-[90%] flex items-center justify-between text-sm text-white py-4 px-6">

          <div className='cursor-pointer'>
            <NavLink to="/" onClick={() => setActiveItem('home')}>
              <img src={logo} className='w-20 mt-1' alt="logo" />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ key, label, path }) => (
              <NavItem
                key={key}
                to={path}
                active={activeItem === key}
                onClick={() => setActiveItem(key)}
              >
                {label}
              </NavItem>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden md:block px-4 py-1 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition"
            >
              {i18n.language === 'en' ? t('navbar.languageToggle.ar') : t('navbar.languageToggle.en')}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden px-3 py-2 rounded-full border border-white/20 bg-white/10"
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-4 md:hidden relative mx-auto w-[90%] rounded-xl bg-black/70 backdrop-blur-md border border-white/10 p-4 text-white">
            <div className="flex flex-col gap-4">
              {navItems.map(({ key, label, path }) => (
                <DropdownItem
                  key={key}
                  to={path}
                  active={activeItem === key}
                  onClick={() => setActiveItem(key)}
                >
                  {label}
                </DropdownItem>
              ))}

              <button
                onClick={toggleLanguage}
                className="mt-2 px-4 py-2 rounded-full border border-white/20 bg-white/10"
              >
                {i18n.language === 'en' ? t('navbar.languageToggle.ar') : t('navbar.languageToggle.en')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function NavItem({ children, active, onClick, to }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `cursor-pointer transition ${isActive || active ? "px-4 py-2 rounded-full bg-white/10 border border-white/20" : "text-gray-300 hover:text-white"}`
      }
    >
      {children}
    </NavLink>
  );
}

function DropdownItem({ children, active, onClick, to }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `cursor-pointer transition block ${isActive || active ? "px-4 py-2 rounded-full bg-white/10 border border-white/20" : "text-gray-300 hover:text-white"}`
      }
    >
      {children}
    </NavLink>
  );
}
