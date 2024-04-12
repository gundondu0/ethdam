"use client"
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import TestComponent from '../components/test'

export default function Home() {
  return (
    <div>
      <h1>Homepage
      </h1>
      <TestComponent></TestComponent>
      <Button bg={"primary"}></Button>
    </div>
  );
}
