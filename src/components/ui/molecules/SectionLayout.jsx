import React, { useEffect, useRef } from "react";
import { SContainer, STitle } from "../../common/style";

const SectionLayout = ({ children, title, onHeaderActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current.scrollTop;
      scrollTop > 10 ? onHeaderActive(false) : onHeaderActive(true);
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerElement) {
        containerElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <SContainer ref={containerRef}>
      <div style={{ margin: "30px 0 120px 0" }}>
        <STitle style={{ marginBottom: "30px", fontSize: "30px" }}>
          {title}
        </STitle>
        {children}
      </div>
    </SContainer>
  );
};

export default SectionLayout;
