"use client"
import SwapBox from '@/components/SwapBox';
import WithdrawalBox from '@/components/WithdrawalBox';
import { Flex, HStack, Spacer, VStack, Text } from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex direction="row" align="center" justify="center" mt="7vh" mr="7vw" ml="7vw">
      <Flex direction="column" align="center" w="40vw">
        <Text fontSize="2xl" fontWeight="bold" color="text">
          Deposit
        </Text>
        <SwapBox />
      </Flex>
      <Spacer minW="4" />

      <Flex direction="column" align="center" w="40vw">
        <Text fontSize="2xl" fontWeight="bold" color="text">
          Withdraw
        </Text>
        <WithdrawalBox />
      </Flex>
    </Flex>
  );
}