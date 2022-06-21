import {render, screen, waitFor} from "@testing-library/react";
import { ISkillItem } from "../../skillModel";
import SkillItem from "../SkillItem";

describe('SKillItemComponent', () => {

  const skillItemProps: ISkillItem = {
    label: "Typescript",
    percent: 95,
    type: "frontend"
  };
  
  beforeEach(() => {
    render(<SkillItem key={1} item={skillItemProps} />);
  })
  
  test('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  }); 

  test('should show label', () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(skillItemProps.label);
  });  

  test('should show percent value', () => {
    expect(screen.getByText(RegExp(/95%/i))).toBeInTheDocument();
  }); 
  
  test('should exist classname ´skill-{percent}´', () => {
    const container = render(<SkillItem key={1} item={skillItemProps} />).container;
    const boxes = container.getElementsByClassName(`skill-${skillItemProps.percent}`);
    expect(boxes.length).toBe(1);
  }); 
});