import React from "react";
import SkillItem from "../skillItem/skillItem";
import { ISkillItem } from "../skillModel";


interface SkillListProps {
    list: ISkillItem[];
}

const SkillList: React.FC<SkillListProps> = ({list}) => {
    return (  
            <div className="skills-info skills-second-style">
                {            
                    list.map((item, i) =>
                        <SkillItem key={i} item={item}/>
                    )
                }
            </div>
        );
}

export default SkillList;