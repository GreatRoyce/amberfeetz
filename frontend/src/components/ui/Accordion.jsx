import { useId, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ items = [] }) => {
  const [openItem, setOpenItem] = useState(null);
  const accordionId = useId();

  const handleToggle = (index) => {
    setOpenItem((current) =>
      current === index ? null : index
    );
  };

  return (
    <div className="space-y-1">
      {items.map((item, index) => {
        const isOpen = openItem === index;
        const buttonId = `${accordionId}-question-${index}`;
        const panelId = `${accordionId}-answer-${index}`;

        return (
          <div
            key={item.question}
            className="
              overflow-hidden
              rounded-xl
              border border-tertiary/20
              bg-secondary/60
            "
          >
            {/* Question */}
            <h3>
            <button
              id={buttonId}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="
                flex min-h-9 w-full
                items-center justify-between
                gap-1
                p-1
                text-left
                transition-colors hover:bg-tertiary/10
                focus-visible:outline focus-visible:outline-2
                focus-visible:-outline-offset-2 focus-visible:outline-primary
              "
            >
              <span
                className="
                  text-[10px]
                  font-medium
                  text-inverted
                  leading-relaxed
                "
              >
                {item.question}
              </span>

              <MdKeyboardArrowDown
                size={16}
                aria-hidden="true"
                className={`
                  shrink-0
                  text-tertiary
                  transition-transform
                  duration-300
                  motion-reduce:transition-none
                  ${isOpen ? "rotate-180" : ""}
                `}
              />
            </button>
            </h3>

            {/* Answer */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`
                grid transition-all duration-300 motion-reduce:transition-none
                ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className="
                    border-t border-inverted/10
                    p-1
                    text-[8px]
                    leading-relaxed
                    text-body
                  "
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
