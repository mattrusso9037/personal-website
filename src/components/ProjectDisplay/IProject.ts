import {FunctionComponent} from "react";

export interface IProject {
    title: string;
    description: string;
    fullDescription: string;
    view?: JSX.Element | FunctionComponent<{}>;
    technologiesUsed: string[];
    thumbnailImageUri: string;
    featuredImageUri: string;
    sourceControlUrl?: string;
    resourceUrl?: string;
}
