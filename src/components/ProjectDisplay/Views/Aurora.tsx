import * as React from "react";
import './aurora.scss';

export const Aurora: React.FC = () => {
    return (
        <div className={'Aurora'}>
            <div className={'container'}>
                <div>

                    <label>Undo/Redo</label>
                    <div>The Undo/Redo engine considers the state of each
                        machine vision tool, and allows users to undo and redo ROI movements, rotations, and settings configurations quickly. Since these ROI's must be pixel perfect, it's common for users to jump back and forth
                        through states to position them correctly.</div>
                </div>
                <img alt='Pixel Count Tool' src={'./assets/projects/pixel_count.png'} />
            </div>
            <div className={'container'}>
                <div>
                    <img alt='Subject Comparison' src={'./assets/projects/golden_image_compare_2.png'} />
                    <a target={'_blank'} rel='noreferrer' href={'https://www.youtube.com/watch?v=n-d0GhVa43I'}>View Video</a>
                </div>
                <div>

                    <label>Golden Image Compare</label>
                    <div>Golden image compare utilizes synchronized HTML5 canvases to allow users to view images side by side. Users are able to pan
                        and zoom images in tandem. It allows users to compare their current subject image to a model image and inspect the differences, so they can adjust their camera settings appropriately.</div>
                </div>

            </div>
            <div className={'container'}>
                <div>

                    <label>QuickDraw</label>
                    <div>To optimize the integration of machine vision tools, we developed the QuickDraw feature, allowing users to define a region of interest and effortlessly add a corresponding tool to the canvas area. My role in implementing the canvas menu architecture played a crucial part in enabling multiple menus for different use cases. The menu's contextual awareness ensures it dynamically positions itself, staying within the application's bounds for seamless and user-friendly navigation. This thoughtful architecture streamlines the process, empowering users to work efficiently with the machine vision tools while maintaining a smooth and intuitive experience within the application.</div>
                </div>
                <div className="dbl-img">

                    <img alt='QuickDraw' src={'./assets/projects/quickdraw.png'} />
                    <img alt='QuickDraw' src={'./assets/projects/quickdraw2.png'} />
                </div>
            </div>
            <div className={'container'}>
                <img alt='File Menu' src={'./assets/projects/file_menu.png'} />
                <div>

                    <label>Dynamic File Menu</label>
                    <div>To cater to the dynamic requirements of the Aurora application, I crafted a configuration-based file menu that seamlessly adapts to the user's location within the app. This solution elegantly addresses the need for a menu that evolves in real-time, enhancing user experience and navigation. By implementing this flexible approach, I ensured that the file menu always aligns with the user's context, providing a smooth and intuitive interaction throughout the application.</div>
                </div>
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
