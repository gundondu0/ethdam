// pages/page.tsx
import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { MetaMaskButton } from "@metamask/sdk-react-ui";

const ButtonState = () => {
  // State to hold which button to show based on the boolean from the server
  const [showFirstButton, setShowFirstButton] = useState(true); // Default to true

  useEffect(() => {
    const fetchButtonState = async () => {
      // Simulating a server response with a delay
      setTimeout(() => {
        // Simulate fetching data that returns true or false
        const serverResponse = true; // Change to false as needed to simulate different responses
        setShowFirstButton(serverResponse);
      }, 1000); // Delay of 1 second
    };

    fetchButtonState();
  }, []);

  return (
    <div>
      {showFirstButton ? (

        <MetaMaskButton theme={"light"} color="orange" icon="no-icon"></MetaMaskButton>

      ) : (
        <Button as="a" bg="primary">
          Swap
        </Button>
      )}
    </div>
  );
};

export default ButtonState;
