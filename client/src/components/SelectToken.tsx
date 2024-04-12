import React from 'react'; 
import { Select } from '@chakra-ui/react' 
 
interface SelectTokenProps { 
 
} 
 
const SelectToken: React.FC<SelectTokenProps> = () => { 
    return ( 
        <div> 
            <div style={{ width: '150px' }}> 
                <Select placeholder='ETH' size='lg'> 
                    <option value='DAI'>DAI</option> 
                    <option value='USDC'>USDC</option> 
                    <option value='USDT'>USDT</option> 
                </Select> 
            </div> 
        </div> 
    ); 
}

export default SelectToken;