"use client"
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import TestComponent from '../components/test'
import AmountInput from '../components/amount_input';

export default function Home() {
  return (
    <div>
      <h1>Homepage
      </h1>
      <AmountInput></AmountInput>
      <TestComponent></TestComponent>
      <Button bg={"primary"}></Button>
    </div>
  );
}
