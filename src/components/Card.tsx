import React from 'react';

interface CradProps {
    width: string;
    height?: string;
    children?: React.ReactNode;
}

const Card = ({width, height}: CradProps) => {
    return (
        <div style={{width, height, border: '1px solid gray'}}>
            
        </div>
    );
};

export default Card;