import React from 'react';

interface CradProps {
    width: string;
    height?: string;
}

const Card = ({width, height}: CradProps) => {
    return (
        <div style={{width, height, backgroundColor: 'gray'}}>
            
        </div>
    );
};

export default Card;