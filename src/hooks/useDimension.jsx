import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const updateDimention = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateDimention();
    window.addEventListener("resize", updateDimention);

    return () => {
      window.removeEventListener("resize", updateDimention);
    };
  }, []);

  return dimension;
};

export default useDimension;
