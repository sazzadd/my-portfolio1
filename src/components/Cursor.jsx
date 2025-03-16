import { gsap } from "gsap";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      if (window.innerWidth > 768) {
        gsap.to("#cursor", {
          x: clientX - 20 / 2,
          y: clientY - 20 / 2,
          delay: 0,
          ease: "power4.out",
        });

        // Floating Effect
        gsap.to(".floating", {
          x: (clientX - window.innerWidth / 2) * 0.02,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* <div
        id="cursor"
        className="h-[20px] w-[20px] bg-[#2b74cd79] fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      ></div> */}
    </>
  );
};

export default Cursor;
