import * as React from "react";
import '../aurora.scss';

export const AutoNav: React.FC = () => {
    return (
        <div className={'Aurora'}>
            <div className={'container'}>
                <div>
                    <label>Vehicle Details</label>
                    <div>
                        The vehicle details page is a critical step in the user journey. Throughout its development, my focus has been on creating UI components that prioritize reusability and maintainability.
                        Understanding the vital role this page plays in the overall user experience, I have crafted components that not only meet immediate requirements but also have a long-term vision of scalability and adaptability.
                        By maximizing reusability, these components contribute to streamlined development processes and efficient maintenance.
                    </div>
                </div>
                <img alt='Vehicle Details' src={'./assets/projects/vdp.png'} />
            </div>
            <div className={'container'}>
            <img alt='Integration graphic' src={'./assets/projects/integration.png'} />

                <div>
                    <div>
                        <label>Integrations</label>
                        <div>In this feature area, I collaborated across teams and job roles to integrate, debug, and implement micro-frontend components. With meticulous attention to detail and a shared commitment to excellence, we successfully integrated these components into the larger framework. By fostering teamwork and open communication, we overcame challenges and delivered integrated features on time and within budget. These integrated micro components represent our dedication to high-quality results through effective collaboration.
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div>

                    <label>Prototyping</label>
                    <div>In the dynamic landscape of feature implementation and refactoring, uncertainties often arise, carrying potential repercussions. To proactively mitigate risks and establish clear requirements, I have developed multiple functioning prototypes. These prototypes have facilitated comprehensive risk analysis, shaped JIRA story requirements, influenced architectural decisions, and fostered team alignment. By addressing these aspects early in the process, we empower teams to devise more accurate timelines and delivery dates, optimizing project planning and success.</div>
                </div>
                <img alt='Prototyping' src={'./assets/projects/prototype.png'} />
            </div>
            <div className={'container'}>
            <img alt='Dashboard graphic' src={'./assets/projects/dashboard.png'} />

                <div>

                    <label>Application Monitoring</label>
                    <div>
                        Using industry-standard tools, I've created an application monitoring dashboard to track critical business functions. It delivers real-time insights into performance, user behavior, and system health.

                        This dashboard provides actionable insights for informed decision-making. It enables historical analysis and trend identification, uncovering patterns, performance issues, and optimization opportunities. The dashboard seamlessly integrates with existing monitoring systems, ensuring compatibility and interoperability.
                    </div>
                </div>
            </div>
        </div>
    )
};
