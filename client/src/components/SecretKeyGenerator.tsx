"use client";

import { useState } from "react";
import { Button, Input, Flex } from "@chakra-ui/react";
import { generateSecretKey } from "@/utils/secretKeyGenerator";

const SecretKeyGenerator = () => {
  const [secretKey, setSecretKey] = useState("");
  const [generated, setGenerated] = useState(false);
  const [sent, setSent] = useState(false);

  const handleGenerateKey = () => {
    const newKey = generateSecretKey();
    setSecretKey(newKey);
    setGenerated(true);
    setSent(false); // Reset sent state when generating a new key
  };

  const handleSend = () => {
    setSent(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecretKey(event.target.value);
    if (event.target.value === "") {
      setGenerated(false);
    }
  };

  return (
    <Flex direction="column" maxW="400px">
      <Button onClick={handleGenerateKey} isDisabled={generated || !!secretKey}>
        Generate Secret Key
      </Button>
      <Input
        value={secretKey}
        placeholder="Generated Secret Key"
        onChange={handleChange}
        isReadOnly={generated || sent}
        bg={sent ? "green.100" : undefined}
      />
      <Button onClick={handleSend} isDisabled={!secretKey || sent}>
        Send
      </Button>
    </Flex>
  );
};

export default SecretKeyGenerator;
