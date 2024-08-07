import { useEffect, useState } from "react";

// Define the shape of the dimension object
interface Dimension {
  width: number;
  height: number;
}

// Custom hook to track the window's dimensions
const useDimension = (): Dimension => {
  // State to hold the current dimensions of the window
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  // Function to update the dimension state based on the current window size
  const updateDimension = (): void => {
    // Get the current window size
    const { innerWidth, innerHeight } = window;

    setDimension({ width: innerWidth, height: innerHeight });
  };

  // useEffect to handle the side effects related to dimension changes
  useEffect(() => {
    updateDimension();

    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", updateDimension);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  // Return the current dimension object
  return dimension;
};

export default useDimension;
