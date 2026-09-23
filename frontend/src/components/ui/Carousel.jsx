import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselImage = ({ image, className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !image.url) {
    return (
      <div
        role="img"
        aria-label={`${image.alt || "Product image"} unavailable`}
        className={`flex items-center justify-center bg-neutral-100 text-body ${className}`}
      >
        <span className="px-2 text-center text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={image.url}
      alt={image.alt || "Product image"}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

const Carousel = ({
  images = [],
  showThumbnails = true,
  showCounter = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const nextSlide = () => {
    setCurrentIndex((current) =>
      (current + 1) % images.length
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      (current + images.length - 1) % images.length
    );
  };

  const activeIndex = currentIndex % images.length;
  const currentImage = images[activeIndex];

  return (
    <div className={`w-full ${className}`}>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <CarouselImage
          key={currentImage.url}
          image={currentImage}
          className="h-[320px] w-full object-contain sm:h-[360px]"
        />

        {/* Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            className="
              absolute left-3 top-1/2
              flex h-10 w-10
              -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-white/90
              shadow-md
              transition
              hover:bg-white
            "
          >
            <FaChevronLeft size={14} />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="
              absolute right-3 top-1/2
              flex h-10 w-10
              -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-white/90
              shadow-md
              transition
              hover:bg-white
            "
          >
            <FaChevronRight size={14} />
          </button>
        )}

        {/* Counter */}
        {showCounter && images.length > 1 && (
          <span
            aria-live="polite"
            aria-atomic="true"
            className="
              absolute bottom-3 right-3
              rounded-md
              bg-white/90
              px-3 py-1
              text-xs font-medium
              shadow-sm
            "
          >
            {activeIndex + 1} / {images.length}
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`
                h-16 w-20
                shrink-0
                overflow-hidden
                rounded-lg
                border-2
                transition
                ${
                  activeIndex === index
                    ? "border-tertiary"
                    : "border-transparent"
                }
              `}
            >
              <CarouselImage
                image={image}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
