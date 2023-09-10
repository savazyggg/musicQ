import React, { useEffect, useRef } from "react";
import { theme } from "../../common/core";
import { SContainer, STitle } from "../../common/style";

const SectionLayout = ({ children, title, onHeaderActive = undefined }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!onHeaderActive) return () => {};
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
      <div style={{ margin: "40px 0 120px 0" }}>
        <STitle style={{ margin: "auto", fontSize: "30px" }}>{title}</STitle>

        {children}
      </div>
    </SContainer>
  );
};

export default SectionLayout;
