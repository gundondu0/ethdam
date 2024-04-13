"use client";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import TestComponent from "../components/test";
import AmountInput from "../components/AmountInput";
import SelectToken from "../components/SelectToken";
import TransactionConfirmed from "@/components/TransactionConfirmed";
import ErrorTransaction from "@/components/ErrorTransaction";
import State from "@/components/ButtonState";
import SelectAmount from "../components/SelectAmount";
import InitialFocus from "@/components/CustomTransaction";
import WithdrawItem from "@/components/WithdrawItem";
import WithdrawBox from "@/components/WithdrawBox";

export default function Home() {
  return (
    <div>
      <h1>Title of the Page</h1>
      <AmountInput></AmountInput>
      <TestComponent></TestComponent>
      <SelectToken></SelectToken>
      <TransactionConfirmed></TransactionConfirmed>
      <ErrorTransaction></ErrorTransaction>
      <Button bg={"primary"}></Button>
      <State></State>
      <h1>Amount</h1>
      <SelectAmount></SelectAmount>
      <ErrorTransaction></ErrorTransaction>
      <WithdrawBox />
    </div>
  );
}
