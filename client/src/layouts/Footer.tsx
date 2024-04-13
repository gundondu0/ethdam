import { Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <Flex
            bg="secondary"
            w="100%"
            p={4}
            color="text"
            alignItems="center"
            justifyContent="center"
            border="000000"
        >
            <Text>
                Made for ETHDam 2024 with patience and love
            </Text>
        </Flex>
    );
};

export default Footer;