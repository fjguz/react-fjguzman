import { render, screen, within } from "@testing-library/react";
import { ITimeLine } from "../../timeLineModel";
import TimeLineList from "../TimeLineList";

describe('TimeLineListComponent', () => {

  const TimeLineListProps :ITimeLine[] = [
    {
      "id": 2,
      "type": "Education",
      "period": "2011",
      "company": "University of Jaen",
      "title": "Technical Engineer in Management Informatics",
      "description": "University studies whose discipline combines an important teaching load in economics and business management with the acquisition of scientific and technical knowledge, for the design and implementation of information and communication technology management systems and processes."
  },
  {
      "id": 3,
      "type": "Experience",
      "period": "2016 - Today",
      "company": "Ezentis Tecnología",
      "title": "Senior FullStack Developer | UX Designer",
      "description": "Working in the Ezentis Technology area in GIS solutions, mainly oriented in the specification and design of interfaces, as well as their implementation. Having extensive experience in some client frameworks (Angular 12, Ionic 3, React, Backbone ...) and client libraries such as RXJS, Redux, Rxjs, Xstate, Cytoscapejs, Swagger, Material ... In addition to server frameworks such as NodeJs, ExpressJs, Feathers, Node-red, ASP .NET, ... Highlight knowledge of Agile methodologies such as SCRUM, use of patterns in design, component modularization for modular architecture solutions and support to the work team."
  },
  ]

  beforeEach(() => {
    render(<TimeLineList key={1} list={TimeLineListProps} />);//         // console.log("This will run after each test");
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