import React from "react";
import { ISkillItem } from "../skillModel";
interface SkillItemProps {
    item: ISkillItem
}

const SkillItem: React.FC<SkillItemProps> = ({item}) => {
    const {label, percent} = item;
    return (  
            <>
                <div className="skill clearfix">
                    <h4>{label}</h4>
                    <div className="skill-value">{percent}%</div>
                </div>
                <div className={`skill-container skill-${percent}`}>
                    <div className="skill-percentage"></div>
                </div>
            </>
        );
}

export default SkillItem;