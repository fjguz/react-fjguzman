import React from "react";
import { ISkillItem } from "../skillModel";
interface SkillItemProps {
    item: ISkillItem
}

const SkillItem: React.FC<SkillItemProps> = ({item}) => {
    return (  
            <>
                <div className="skill clearfix">
                    <h4>{item.label}</h4>
                        <div className="skill-value">{item.percent}%</div>
                    </div>
                    <div className={`skill-container skill-${item.percent}`}>
                    <div className="skill-percentage"></div>
                </div>
            </>
        );
}

export default SkillItem;