"use client"
import AmountInput from '@/components/AmountInput';
import ButtonState from '@/components/ButtonState';
import ErrorTransaction from '@/components/ErrorTransaction';
import SelectToken from '@/components/SelectToken';
import SwapBox from '@/components/SwapBox';
import TransactionConfirmed from '@/components/TransactionConfirmed';
import WithdrawalBox from '@/components/WithdrawalBox';
import { Flex, HStack, Spacer, VStack } from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex direction="row" align="center" mt="4">
      <SwapBox />

      <WithdrawalBox />
    </Flex>
  );
}