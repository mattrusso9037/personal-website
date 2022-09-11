import React, { FC } from "react";
import { MutatingDots } from 'react-loader-spinner';

interface IProps {

}
export const Loader: FC<IProps> = ({ }) => {
    return (
        <MutatingDots
            height="100"
            width="100"
            color="#F25F5C"
            secondaryColor='#50514F'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
};
