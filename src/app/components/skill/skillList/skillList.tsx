import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import { ISkillItem } from "../skillModel";
interface SkillListProps {
    list: ISkillItem[];
}

const SkillList: React.FC<SkillListProps> = ({list}) => {
    return (  
            <ul className="skills-info skills-second-style">
                {            
                    list.map((item, i) =>
                        (<li key={i}>
                            <SkillItem  item={item}/>
                        </li>)
                    )
                }
            </ul>
        );
} 

export default SkillList;  