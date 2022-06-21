import { render, screen } from "@testing-library/react";
import { ITimeLine } from "../../timeLineModel";
import TimeLineItem from "../TimeLineItem";

describe('TimeLineItemComponent', () => {

  const timeLineProps: ITimeLine = {
    "id": 2,
    "type": "Education",
    "period": "2011",
    "company": "University of Jaen",
    "title": "Technical Engineer in Management Informatics",
    "description": "University studies whose discipline combines an important teaching load in economics and business management with the acquisition of scientific and technical knowledge, for the design and implementation of information and communication technology management systems and processes."
  };
  beforeAll(() => {
    render(<TimeLineItem key={1} item={timeLineProps} />);//         // console.log("This will run after each test");
  })
  
  test('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });
  
  test('should show period', () => {
    const container = render(<TimeLineItem key={1} item={timeLineProps} />).container;
    const elements = container.getElementsByClassName(`item-period`);
    expect(elements.length).toBe(1);
    expect(elements[0].textContent).toBe(timeLineProps.period);
  });  


  test('should show company', () => {
    const container = render(<TimeLineItem key={1} item={timeLineProps} />).container;
    const elements = container.getElementsByClassName(`item-company`);
    expect(elements.length).toBe(1);
    expect(elements[0].textContent).toBe(timeLineProps.company);
  }); 

  test('should show title', () => {
    const container = render(<TimeLineItem key={1} item={timeLineProps} />).container;
    const elements = container.getElementsByClassName(`item-title`);
    expect(elements.length).toBe(1);
    expect(elements[0].textContent).toBe(timeLineProps.title);
  }); 

  test('should show description', () => {
    const container = render(<TimeLineItem key={1} item={timeLineProps} />).container;
    const elements = container.getElementsByTagName("p");
    expect(elements.length).toBe(1);
    expect(elements[0].textContent).toBe(timeLineProps.description);
  }); 

});