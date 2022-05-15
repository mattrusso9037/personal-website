import * as React from "react";
import './aurora.scss';

export const Aurora: React.FC = () => {
        return (
            <div className={'Aurora'}>
                <iframe
                    src={`https://www.youtube.com/embed/_6Eenn8dWDY`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        )
    };
