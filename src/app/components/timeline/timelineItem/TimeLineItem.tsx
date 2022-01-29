import React from "react";
import { ITimeLine } from "../timeLineModel";

interface TimeLineItemProps {
    item: ITimeLine
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({item}) => {
    return (  
            <div className="timeline-item clearfix">
                <div className="left-part">
                    <h5 className="item-period">{item.period}</h5>
                    <span className="item-company">{item.company}</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                    <h4 className="item-title">{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        );
}

export default TimeLineItem;