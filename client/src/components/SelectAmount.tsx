import React from 'react'; 
import { RadioGroup, Stack, Radio, Divider } from '@chakra-ui/react'; 
 
const SelectAmount: React.FC = () => { 
 const [value, setValue] = React.useState('1'); 
 
 return ( 
    <RadioGroup onChange={setValue} value={value}> 
      <Stack direction='row' spacing={6}> 
        <Stack direction='column' alignItems='center'> 
          <Radio value='1' /> 
          <span style={{ textAlign: 'center' }}>0.1 WETH</span> 
        </Stack> 
        <Divider orientation="vertical" /> 
        <Stack direction='column' alignItems='center'> 
          <Radio value='2' /> 
          <span style={{ textAlign: 'center' }}>1 WETH</span> 
        </Stack> 
        <Divider orientation="vertical" /> 
        <Stack direction='column' alignItems='center'> 
          <Radio value='3' /> 
          <span style={{ textAlign: 'center' }}>10 WETH</span> 
        </Stack> 
        <Divider orientation="vertical" /> 
        <Stack direction='column' alignItems='center'> 
          <Radio value='4' /> 
          <span style={{ textAlign: 'center' }}>100 WETH</span> 
        </Stack> 
      </Stack> 
    </RadioGroup> 
 ); 
}; 
 
export default SelectAmount;