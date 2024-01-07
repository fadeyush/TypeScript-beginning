import React from 'react';

interface CradProps {
    width: string;
    height?: string;
    children?: React.ReactNode;
}

const Card = ({width, height, children}: CradProps) => {
    return (
        <div style={{width, height, border: '1px solid gray'}}>
            {children}
        </div>
    );
};

export default Card;