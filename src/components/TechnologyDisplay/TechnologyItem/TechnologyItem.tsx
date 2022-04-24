import React, {FC} from 'react';

interface ITechnologyItemProps {
    name: string;
    icon?: string;
}

export const TechnologyItem: FC<ITechnologyItemProps> = ({name, icon}) => {
    return (
        <li className={`TechItem ${name}`}>
            {icon && <img alt={name} src={`/assets/tech_icons/${icon}.png`}/>}
            {name}
        </li>
    )
};
