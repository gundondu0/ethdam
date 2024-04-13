// pages/page.tsx
import React, { useState } from "react";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useSDK } from "@metamask/sdk-react-ui";

const ButtonState = () => {
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts: any = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <div>
      {!connected ? (
        <Button
          bg="primary"
          onClick={connect}
          borderColor="black" // Sets the border color
          borderWidth="1px" // Sets the border width
          borderStyle="solid"
        >
          Connect Wallet
        </Button>
      ) : (
        <Flex direction={"column"} align="center">
          <Button
            bg="primary"
            borderColor="black" // Sets the border color
            borderWidth="1px" // Sets the border width
            borderStyle="solid"
          >
            Swap
          </Button>
          <Spacer minW={4} />
          <Flex direction="column">
            <Text fontSize={"xs"}>
              {chainId && `Connected chain: ${chainId}`}
            </Text>
            <Text fontSize={"xs"}>
              {account && `Connected account: ${account}`}
            </Text>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default ButtonState;
