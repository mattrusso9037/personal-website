import React from "react";

interface ITestProps {
    color: string;
}

export const Test: React.FC<ITestProps> = ({color}) => {
    return (
        <div style={{color: color}}>Test</div>
    )
};
