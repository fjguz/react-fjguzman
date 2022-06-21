import { render, screen, within } from "@testing-library/react";
import SkillList from "../SkillList";
import { ISkillItem } from "../../skillModel";
describe('SKillListComponent', () => {

  const skillListProps :ISkillItem[] = [
    {
      label: "Typescript",
      percent: 95,
      type: "frontend"
    },
    {
      label: "Javascript",
      percent: 96,
      type: "frontend"
    }
  ]

  beforeEach(() => {
    render(<SkillList key={1} list={skillListProps} />);
  })
   
  test('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  }); 

  test('should render list of 2 Skills', () => {
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(2);
  });  

});