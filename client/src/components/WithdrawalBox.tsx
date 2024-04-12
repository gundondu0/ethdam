"use client";
import { useState } from "react";
import { Input, Flex, Button, CloseButton } from "@chakra-ui/react";

interface Wallet {
  address: string;
  amount: string;
}

const CryptoWithdrawalForm = () => {
  const [wallets, setWallets] = useState<Wallet[]>([
    { address: "", amount: "" },
  ]);

  const handleInputChange = (
    index: number,
    key: keyof Wallet,
    value: string
  ) => {
    const newWallets = [...wallets];
    newWallets[index][key] = value;
    setWallets(newWallets);
  };

  const handleAddWallet = () => {
    setWallets([...wallets, { address: "", amount: "" }]);
  };

  const handleRemoveWallet = (index: number) => {
    if (index === 0) return; // Prevent removing the first address
    const newWallets = [...wallets];
    newWallets.splice(index, 1);
    setWallets(newWallets);
  };

  const handleWithdrawal = () => {
    // Handle withdrawal logic here
    console.log("Withdrawal initiated:", wallets);
    // You can perform your withdrawal logic here, like sending a request to an API
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      maxWidth="400px"
      margin="auto"
      border="1px solid #CBD5E0"
      borderRadius="md"
      p={4}
      maxHeight="300px"
      overflowY="auto"
    >
      {wallets.map((wallet, index) => (
        <Flex key={index} alignItems="center" mb={4}>
          <Flex flex="3" alignItems="center">
            <Input
              flex="1"
              placeholder="Enter Wallet Address"
              value={wallet.address}
              onChange={(e) =>
                handleInputChange(index, "address", e.target.value)
              }
              mr={2}
            />
          </Flex>
          <Flex flex="1" alignItems="center">
            <Input
              flex="1"
              type="number"
              placeholder="Amount"
              value={wallet.amount}
              onChange={(e) =>
                handleInputChange(index, "amount", e.target.value)
              }
            />
          </Flex>
          {index !== 0 && (
            <Flex alignItems="center" width="32px">
              <CloseButton
                size="sm"
                onClick={() => handleRemoveWallet(index)}
              />
            </Flex>
          )}
        </Flex>
      ))}
      <Flex>
        <Button colorScheme="blue" onClick={handleWithdrawal} mr={2}>
          Withdraw
        </Button>
        <Button colorScheme="blue" onClick={handleAddWallet}>
          + Add Wallet
        </Button>
      </Flex>
    </Flex>
  );
};

export default CryptoWithdrawalForm;
