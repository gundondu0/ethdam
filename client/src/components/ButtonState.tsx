// pages/page.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const State = () => {
  // State to hold which button to show based on the boolean from the server
  const [showFirstButton, setShowFirstButton] = useState(true); // Default to true

  useEffect(() => {
    const fetchButtonState = async () => {
      // Simulating a server response with a delay
      setTimeout(() => {
        // Simulate fetching data that returns true or false
        const serverResponse = false; // Change to false as needed to simulate different responses
        setShowFirstButton(serverResponse);
      }, 1000); // Delay of 1 second
    };

    fetchButtonState();
  }, []);

  return (
    <div>
      {showFirstButton ? (
        <Link href="/first-link" passHref>
          <Button as="a" colorScheme="blue">
            Go to First Link
          </Button>
        </Link>
      ) : (
        <Link href="/second-link" passHref>
          <Button as="a" colorScheme="teal">
            Go to Second Link
          </Button>
        </Link>
      )}
    </div>
  );
};

export default State;
