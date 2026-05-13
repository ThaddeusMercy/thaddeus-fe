"use client";
import { useEffect, useState, useRef } from "react";
import { useAnimationControls, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const NameInfiniteScroll = () => {
  const searchParams = useSearchParams();
  const rawTab = searchParams.get("tab") || "home";
  const tab = rawTab === "pay" ? "home" : rawTab;
  const containerRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const controls = useAnimationControls();

  // Get the width of the screen and text on component mount
  useEffect(() => {
    const updateMeasurements = () => {
      const currentScreenWidth = window.innerWidth;
      setScreenWidth(currentScreenWidth);

      // Get the width of a single text element including its margin
      if (containerRef.current) {
        const textElement = containerRef.current.querySelector(
          ".text-element",
        ) as HTMLElement;
        if (textElement) {
          // Include the element width plus its margins
          const style = window.getComputedStyle(textElement);
          const marginRight = Number.parseInt(style.marginRight);
          setTextWidth(textElement.offsetWidth + marginRight);
        }
      }
    };

    // Initial measurement
    updateMeasurements();

    // Update on resize
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  // Start the animation once we have the text width
  useEffect(() => {
    if (textWidth > 0 && screenWidth > 0) {
      // If text is smaller than screen, we need to adjust the animation
      if (textWidth < screenWidth) {
        // Calculate how many copies we need to fill the screen
        const copies = Math.ceil(screenWidth / textWidth) + 1;

        // Update the animation to move the full width of all needed copies
        controls.start({
          x: -((textWidth * copies) / 2),
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        });
      } else {
        // Normal animation for when text is larger than screen
        controls.start({
          x: -textWidth,
          transition: {
            duration: 15,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        });
      }
    }
  }, [textWidth, screenWidth, controls]);

  // Calculate how many copies we need based on screen size
  const textCopies =
    screenWidth > 0 && textWidth > 0
      ? Math.max(3, Math.ceil((screenWidth * 2) / textWidth))
      : 3;

  return (
    <div
      ref={containerRef}
      className="fixed -top-7 md:-top-15 lg:-top-18 2xl:-top-24 w-full overflow-hidden z-50"
    >
      {tab === "home" && (
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={controls}
        >
          {/* Generate enough copies to fill the screen with spacing between them */}
          {Array.from({ length: textCopies }).map((_, index) => (
            <div key={index} className="text-element mr-10 md:mr-18 lg:mr-10">
              <h1 className="font-bold text-secondary text-7xl md:text-9xl lg:text-[165px] 2xl:text-[220px]">
                Mercy Thaddeus
              </h1>
            </div>
          ))}
        </motion.div>
      )}

      {tab === "blog" && (
        <h1 className="font-bold text-secondary text-7xl md:text-9xl lg:text-[165px] 2xl:text-[220px] -ml-5">
          Blogs
        </h1>
      )}

      {tab === "talks" && (
        <h1 className="font-bold text-secondary text-7xl md:text-9xl lg:text-[165px] 2xl:text-[220px] -ml-5">
          Talks
        </h1>
      )}

      {tab === "resources" && (
        <h1 className="font-bold text-secondary text-7xl md:text-9xl lg:text-[165px] 2xl:text-[220px] -ml-5">
          Resources
        </h1>
      )}
    </div>
  );
};

export default NameInfiniteScroll;
