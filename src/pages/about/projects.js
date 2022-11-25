import * as React from "react";
import background from "../../images/fata_in_munti2.jpg";
import Layout from "../../components/Layout";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Projects() {
    return <Layout img={background}>
        <VerticalTimeline>

        <VerticalTimelineElement
                className="vertical-timeline-element--work font-light"
                contentStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192,15,244)' }}
                date="July 2022-October 2022"
                iconStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}>

                <h3 className="vertical-timeline-element-title font-normal">Software Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle font-extralight">Google, Munich Germany</h4>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--work font-light"
                contentStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192,15,244)' }}
                date="September 2021-November 2021"
                iconStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}>

                <h3 className="vertical-timeline-element-title font-normal">STEP Intern</h3>
                <h4 className="vertical-timeline-element-subtitle font-extralight">Google, Munich Germany</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work font-light"
                contentStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192,15,244)' }}
                date="September 2020-February 2021"
                iconStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title font-normal">Programming Trainer</h3>
                <h4 className="vertical-timeline-element-subtitle font-extralight">Logiscool, Bucharest Romania</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work font-light"
                contentStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192,15,244)' }}
                date="May 2020"
                iconStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title font-normal">Project: Academy Network</h3>
                <h4 className="vertical-timeline-element-subtitle font-extralight"> Built in C a system that aggregates information about 100k+ scientific articles and
responds to queries using the latest saved data.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work font-light"
                contentStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192,15,244)' }}
                date="May 2020"
                iconStyle={{ background: 'rgb(115,26,114)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title font-normal">Project: Academy Network</h3>
                <h4 className="vertical-timeline-element-subtitle font-extralight"> Built in C a system that aggregates information about 100k+ scientific articles and
responds to queries using the latest saved data.</h4>
            </VerticalTimelineElement>

        </VerticalTimeline>
    </Layout>
}
