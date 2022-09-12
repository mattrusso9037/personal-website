import * as React from "react";
import './aurora.scss';

export const Aurora: React.FC = () => {
        return (
            <div className={'Aurora'}>
                <div className={'container'}>
                    <label>Undo/Redo</label>
                    <div>The Undo/Redo engine considers the state of each
                    machine vision tool, and allows users to undo and redo ROI movements, rotations, and settings configurations quickly. Since these ROI's must be pixel perfect, it's common for users to jump back and forth
                    through states to position them correctly.</div>
                    <img alt='Pixel Count Tool' src={'./assets/projects/pixel_count.png'} />
                </div>
                <div className={'container'}>
                    <label>Golden Image Compare</label>
                    <div>Golden image compare utilizes synchronized HTML5 canvases to allow users to view images side by side. Users are able to pan
                    and zoom images in tandem. It allows users to compare their current subject image to a model image and inspect the differences, so they can adjust their camera settings appropriately.</div>
                    <img alt='Image Comparison' src={'./assets/projects/golden_image_compare_2.png'} />
                    <a target={'_blank'} rel='noreferrer' href={'https://www.youtube.com/watch?v=n-d0GhVa43I'}>View Video</a>
                </div>
                <div className={'container'}>
                    <label>QuickDraw</label>
                    <div>To streamline the process of adding machine vision tools, a QuickDraw feature was built which enables users to define a
                        region of interest, and add a tool to the canvas area with that defined region. I implemented a canvas menu architecture, allowing for multiple menus to be defined for different uses. The menu is contextually aware, positioning
                    itself to ensure it remains within the bounds of the application.</div>
                    <img alt='QuickDraw' src={'./assets/projects/quickdraw.png'} />
                    <img alt='QuickDraw' src={'./assets/projects/quickdraw2.png'} />
                </div>
                <div className={'container'}>
                    <label>Dynamic File Menu</label>
                    <div>The Aurora application had a need for a dynamic file menu based on user's location within the app. To satisfy this requirement, I built a
                    configuration-based file menu that dynamically changes as needed.</div>
                    <img alt='File Menu' src={'./assets/projects/file_menu.png'} />
                </div>
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
