"use client"
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import TestComponent from '../components/test'
import AmountInput from '../components/AmountInput';
import SelectToken from '../components/SelectToken';
import TransactionConfirmed from '@/components/TransactionConfirmed';
import ErrorTransaction from '@/components/ErrorTransaction';


export default function Home() {
  return (
    <div>
      <h1>Title of the Page
      </h1>
      <AmountInput></AmountInput>
      <TestComponent></TestComponent>
      <SelectToken></SelectToken>
      <TransactionConfirmed></TransactionConfirmed>
      <ErrorTransaction></ErrorTransaction>
      <Button bg={"primary"}></Button>
    </div>
  );
}
