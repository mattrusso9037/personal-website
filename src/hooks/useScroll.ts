import {MutableRefObject, useRef} from 'react';
import {Sections} from '../components/Main/SectionTypes';

interface IUseScrollParams {
}

interface IUseScroll {
    scrollToElement: ScrollTo;
    getRef: GetRef;
}

export type ScrollTo = (containerId: number) => void;
type RefMap = { [key: number]: MutableRefObject<HTMLDivElement | null> };
type GetRef = (id: number) => MutableRefObject<HTMLDivElement | null>;

export const useScroll = ({}: IUseScrollParams): IUseScroll => {
    const aboutRef = useRef<HTMLDivElement>(null);

    const refMap: RefMap = {
        [Sections.About]: aboutRef
    };

    const scrollToElement: ScrollTo = (containerId) => {
        const ref: MutableRefObject<HTMLDivElement | null> = refMap[containerId];

        window.scrollTo({
            behavior: 'smooth',
            top: ref.current?.offsetTop,
        });
    };

    const getRef: GetRef = (id: number) => {
        return refMap[id];
    };

    return {scrollToElement, getRef}
}