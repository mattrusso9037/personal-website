import * as React from "react";
import '../aurora.scss';

export const ShareWithDealer: React.FC = () => {
    return (
        <div className={'Aurora'}>
            <div className={'container'}>
                <div>

                    <label>Dynamic View Design Pattern</label>
                    <div>
                        A crucial requirement was the ability to dynamically render various sections at runtime. To meet this need, I devised a scalable and flexible solution that enables the dynamic configuration of both the modal content and header. This implementation ensures adaptability and extensibility, empowering seamless customization of the component's behavior and appearance.
                    </div>
                </div>
                <img alt='Vehicle Details' src={'./assets/projects/vdp.png'} />
            </div>
            <div className={'container'}>
                <img alt='State management graphic' src={'./assets/projects/state.png'} />

                <div>

                    <label>State Management</label>
                    <div>
                        Recognizing the need for improved scalability and maintainability, I took the initiative to lead the effort in a refactor, advocating for the adoption of a state management solution.

                        By meticulously assessing the existing codebase and collaborating with the development team, I orchestrated the smooth transition to the new state management solution. This involved designing a well-defined architecture, implementing the necessary code changes, and ensuring seamless integration with the existing system.
                    </div>
                    <div>
                        Through effective communication and knowledge sharing, I guided the team in understanding the benefits of the state management solution and its impact on the overall performance and development workflow. I provided mentorship and support, empowering team members to embrace the new paradigm and leverage its capabilities to their fullest potential.
                    </div>
                    <div>
                        The successful refactoring initiative has yielded tangible results, enhancing the component's scalability, reusability, and testability. The adoption of the state management solution has streamlined development processes, reduced code complexity, and improved overall code quality.
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div>

                    <label>Integrations</label>
                    <div>
                        I took the lead in spearheading the first marketplace integration, where I played a pivotal role in crafting real-time solutions to overcome integration challenges. Collaborating across multiple teams and job roles, I ensured a seamless and successful integration process.
                    </div>
                    <div>
                        By closely analyzing the requirements and intricacies of the marketplace integration, I proactively identified potential obstacles and devised innovative solutions on the fly. Through open communication and collaboration, I worked hand in hand with cross-functional teams to address technical complexities.
                    </div>
                    <div>
                        The result of our collective effort was a highly successful marketplace integration that directly impacted conversion metrics. By bridging gaps between systems, streamlining processes, and optimizing user experience, we witnessed a notable increase in conversion rates and overall performance.
                    </div>
                </div>
                <img alt='Integration graphic' src={'./assets/projects/integration.png'} />
            </div>
        </div>
    )
};
