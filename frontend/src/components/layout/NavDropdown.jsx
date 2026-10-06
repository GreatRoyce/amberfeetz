import { useEffect, useId, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { H3 } from "../ui/Typography";

const NavDropdown = ({ label, options, isOpen, onToggle, onClose, align = "center" }) => {
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const dropdownId = useId();
  const alignment = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  }[align];

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (event) => {
      // Let inside links navigate before their own onClick closes the menu.
      if (!dropdownRef.current?.contains(event.target)) onClose();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <li ref={dropdownRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1 sm:min-h-10 sm:gap-2"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dropdownId : undefined}
      >
        <H3>{label}</H3>

        <IoIosArrowDown
          size={12}
          className={`text-tertiary transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={dropdownId}
          className={`
            absolute top-full z-50 ${alignment}
            mt-2 w-max min-w-24 max-w-[calc(100vw-1rem)]
            overflow-hidden rounded-sm
            border border-neutral-200
            bg-white
            text-inverted
            shadow-lg
          `}
        >
          {options.map((option) => (
            <Link
              key={option.path}
              to={option.path}
              onClick={onClose}
              className="
                block break-words
                px-3 py-2 sm:px-4 sm:py-3
                text-[10px] sm:text-sm md:text-base tracking-wider
                shade
                transition-colors
                hover:bg-neutral-100
                textshade
              "
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
