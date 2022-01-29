import React from "react";
import TimeLineItem from "../TimelineItem/TimeLineItem";
import { ITimeLine } from "../timeLineModel";

interface TimeLineListProps { 
    list: ITimeLine[];
}

const TimeLineList: React.FC<TimeLineListProps> = ({list}) => {
    return (  
            <div className="timeline timeline-second-style clearfix">
                {            
                    list.map((item, i) =>
                        <TimeLineItem key={i} item={item}/>
                    )
                }
            </div>
        );
}

export default TimeLineList;