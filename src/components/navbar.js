"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (dropdownName) => {
    
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu
        setOpenDropdown(null); // Close any open dropdowns
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* Menu Button */}
      <button
        ref={buttonRef}
        id="menu-btn"
        className={`hamburger z-30 flex flex-col items-center justify-center space-y-1 focus:outline-none lg:hidden ${isOpen ? "open" : ""}`}
        onClick={navToggle}
      >
        <span className="hamburger-line h-[3px] w-6 bg-white transition-transform duration-300"></span>
        <span className="hamburger-line h-[3px] w-6 bg-white transition-transform duration-300"></span>
        <span className="hamburger-line h-[3px] w-6 bg-white transition-transform duration-300"></span>
      </button>
      {/* Desktop menu */}
      <ul className="hidden items-center justify-center space-x-4 pb-6 text-xl lg:flex lg:pb-0">
        {/* Produse Dropdown */}
        <li className="group relative">
          <div className="hover:text-fireRed focus:outline-none">
            Produse
          </div>
          <ul className="absolute left-1/2 hidden w-48 -translate-x-1/2 space-y-2 rounded-lg bg-zinc-900 px-2 pt-2 text-center text-base group-hover:block">
            <li>
              <Link
                href="/produse/salcie"
                className="block pt-1 hover:text-fireRed"
              >
                Lemn de plop si salcie
              </Link>
            </li>
            <div className="my-2 h-px bg-white opacity-50"></div>
            <li>
              <Link
                href="/produse/fag"
                className="block pt-1 hover:text-fireRed"
              >
                Lemn de fag
              </Link>
            </li>
            <div className="my-2 h-px bg-white opacity-50"></div>
            <li>
              <Link
                href="/produse/scandura"
                className="block py-1 hover:text-fireRed"
              >
                Scandura de fag
              </Link>
            </li>
          </ul>
        </li>

        {/* Locatii Drowpdown */}
        {/* <li className="group relative">
          <div className="hover:text-fireRed focus:outline-none">
            Locatii
          </div>
          <ul className="absolute left-1/2 hidden w-auto -translate-x-1/2 space-y-2 rounded-lg bg-zinc-900 px-4 pt-2 text-center text-base group-hover:block">
            <li>
              <Link
                href="/locatii/Galati"
                className="block pt-1 hover:text-fireRed"
              >
                Galati
              </Link>
            </li>
            <div className="my-2 h-px bg-white opacity-50"></div>
            <li>
              <Link
                href="/locatii/Braila"
                className="block pt-1 hover:text-fireRed"
              >
                Braila
              </Link>
            </li>
            <div className="my-2 h-px bg-white opacity-50"></div>
            <li>
              <Link
                href="/locatii/Tulcea"
                className="block py-1 hover:text-fireRed"
              >
                Tulcea
              </Link>
            </li>
          </ul>
        </li> */}

        <a href="/#faq-accordion" className="hover:text-fireRed">
          Informații
        </a>

        {/* Articole Drowpdown */}
        {/* <li className="group relative">
          <div  className="hover:text-fireRed focus:outline-none">
            Articole
          </div>
          <ul className="absolute left-1/2 hidden w-24 -translate-x-1/2 space-y-2 rounded-lg bg-zinc-900 px-4 pt-2 text-center text-base group-hover:block">
            <li>
              <Link
                href="/articole/1"
                className="block pt-1 hover:text-fireRed"
              >
                Articol 1
              </Link>
            </li>
            <div className="my-2 h-px bg-white opacity-50"></div>
            <li>
              <Link
                href="/articole/2"
                className="block pt-1 hover:text-fireRed"
              >
                Articol 2
              </Link>
            </li>
            <div className="my-2 h-px bg-white opacity-50"></div>
            <li>
              <Link
                href="/articole/3"
                className="block py-1 hover:text-fireRed"
              >
                Articol 3
              </Link>
            </li>
          </ul>
        </li> */}

        <Link href="/contact" className="hover:text-fireRed">
          Contact
        </Link>
      </ul>
      {/* Mobile menu */}
      <nav
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } fixed left-0 top-32 z-20 h-screen w-52 bg-zinc-900/95 lg:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4 text-xl">
          {/* Produse Dropdown */}
          <li className="relative w-full text-center">
            <button
              onClick={() => handleDropdownToggle("produse")}
              className="w-full hover:text-fireRed focus:outline-none"
            >
              Produse
            </button>
            {openDropdown === "produse" && (
              <ul className="w-full space-y-2 bg-inherit p-2 text-center text-base">
                <li>
                  <Link
                    href="/produse/salcie"
                    className="block pt-1 text-sm hover:text-fireRed"
                  >
                    Lemn de plop si salcie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produse/fag"
                    className="block pt-1 text-sm hover:text-fireRed"
                  >
                    Lemn de fag
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produse/scandura"
                    className="block py-1 text-sm hover:text-fireRed"
                  >
                    Scandura de fag
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Locatii Dropdown */}
          {/* <li className="relative w-full text-center">
            <button
              onClick={() => handleDropdownToggle("locatii")}
              className="w-full hover:text-fireRed focus:outline-none"
            >
              Locatii
            </button>
            {openDropdown === "locatii" && (
              <ul className="w-full space-y-2 bg-inherit p-2 text-center text-base">
                <li>
                  <Link
                    href="/locatii/Galati"
                    className="block pt-1 text-sm hover:text-fireRed"
                  >
                    Galati
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locatii/Braila"
                    className="block pt-1 text-sm hover:text-fireRed"
                  >
                    Braila
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locatii/Tulcea"
                    className="block py-1 text-sm hover:text-fireRed"
                  >
                    Tulcea
                  </Link>
                </li>
              </ul>
            )}
          </li> */}
          {/* Articole Dropdown */}
          {/* <li className="relative w-full text-center">
            <button
              onClick={() => handleDropdownToggle("articole")}
              className="w-full hover:text-fireRed focus:outline-none"
            >
              Articole
            </button>
            {openDropdown === "articole" && (
              <ul className="w-full space-y-2 bg-inherit p-2 text-center text-base">
                <li>
                  <Link
                    href="/articole/1"
                    className="block pt-1 text-sm hover:text-fireRed"
                  >
                    Articol 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articole/2"
                    className="block pt-1 text-sm hover:text-fireRed"
                  >
                    Articol 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articole/3"
                    className="block py-1 text-sm hover:text-fireRed"
                  >
                    Articol 3
                  </Link>
                </li>
              </ul>
            )}
          </li> */}
          {/* Informații Link */}
          <li onClick={() => handleDropdownToggle(null)}>
            <Link href="/#faq-accordion" className="hover:text-fireRed">
              Informații
            </Link>
          </li>
          {/* Contact link */}
          <li onClick={() => handleDropdownToggle(null)}>
            <Link href="/contact" className="hover:text-fireRed">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
