import { useCallback, useEffect, useState } from "react";
import { Logo } from "../ui/Logo";
import { Small } from "../ui/Typography";
import NavDropdown from "./NavDropdown";
import menuData from "../../data/menuData";
import business from "../../data/business";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const closeMenu = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    let lastScrollY = Math.max(0, window.scrollY);

    const handleScroll = () => {
      const scrollY = Math.max(0, window.scrollY);

      if (scrollY <= 24) {
        setIsHidden(false);
        lastScrollY = scrollY;
        return;
      }

      // Ignore tiny movements so the navbar does not flicker while scrolling.
      if (Math.abs(scrollY - lastScrollY) < 10) return;

      const scrollingDown = scrollY > lastScrollY;
      setIsHidden(scrollingDown);
      if (scrollingDown) closeMenu();
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closeMenu]);

  const handleToggle = (label) => {
    setOpenMenu((currentMenu) => (currentMenu === label ? null : label));
  };
  return (
    <div
      inert={isHidden}
      className={`p-2 bg-secondary flex flex-col space-y-2 fixed top-0  left-0 w-full z-50 transition-transform duration-300 motion-reduce:transition-none ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-2xl md:max-w-4xl lg:max-w-6xl lg:flex-row lg:justify-between lg:px-6 xl:max-w-7xl">
        <div className="contents lg:block lg:shrink-0 lg:text-center">
          <Logo className="lg:w-52" />
          <Small className="uppercase shade">{business.tagline}</Small>
        </div>
        <ul className="flex w-full items-center justify-evenly pt-4 lg:w-auto lg:justify-end lg:gap-12 lg:pt-0">
          {menuData.map((menu, index) => (
            <NavDropdown
              key={menu.label}
              label={menu.label}
              options={menu.options}
              align={index === 0 ? "start" : index === menuData.length - 1 ? "end" : "center"}
              isOpen={openMenu === menu.label}
              onToggle={() => handleToggle(menu.label)}
              onClose={closeMenu}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
