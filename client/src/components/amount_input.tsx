import React from 'react'; // Import React
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const AmountInput = () => { // Define a component named AmountInput
  return (
    <NumberInput defaultValue={0} min={0}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default AmountInput; // Export the component named AmountInput
