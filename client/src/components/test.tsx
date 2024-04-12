import React from 'react';

interface NewComponentProps {
}

const TestComponent: React.FC<NewComponentProps> = () => {
    return (
        <div>
            Test Component
        </div>
    );
}

export default TestComponent;