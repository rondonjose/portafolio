import React from "react";
import Image from "next/image";

type ScrollMockupProps = {
  src: string;
  alt: string;
};

const ScrollMockup: React.FC<ScrollMockupProps> = ({ src, alt }) => {
  return (
    <div
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        marginBottom: "1.5em",
        borderRadius: "8px",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800} // Adjust width as needed
        height={1200} // Adjust height as needed
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
};

export default ScrollMockup;
