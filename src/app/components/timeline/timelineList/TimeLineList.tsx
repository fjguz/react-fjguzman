import React from "react";
import TimeLineItem from "../TimelineItem/TimeLineItem";
import { ITimeLine } from "../timeLineModel";

interface TimeLineListProps { 
    list: ITimeLine[];
}

const TimeLineList: React.FC<TimeLineListProps> = ({list}) => {
    return (  
            <ul className="timeline timeline-second-style clearfix">
                {            
                    list.map((item, i) =>
                        (<li key={i} >
                            <TimeLineItem item={item}/>
                        </li>)
                    )
                }
            </ul>
        );
}

export default TimeLineList;