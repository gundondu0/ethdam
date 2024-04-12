import React, { useState } from 'react';
import { Select } from '@chakra-ui/react'

interface SelectTokenProps {

}

const SelectToken: React.FC<SelectTokenProps> = () => {
    const [value, setValue] = useState('ETH');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    };

    return (
        <div style={{ width: '150px' }}>
            <Select placeholder='Select a token' size='medium' value={value} onChange={handleChange}>
                <option value='WETH'>ETH</option>
            </Select>
        </div>
    );
}

export default SelectToken;