
import {render, screen, } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import SkillItem from '../skillItem';
// import { ISkillItem } from '../../skillModel';

// const item:ISkillItem = {
//     "type": "Framework",
//     "label": "React",
//     "percent": 95
// };

// const typeSkillItem = ({ label}): { labelElement: HTMLElement; } => {
//     const labelElement:HTMLElement = screen.getByRole("heading");
//     if (label) {
//         userEvent.type(labelElement,label);
//     }
//     return {
//         labelElement
//     }
// }
// describe("SkillItem", ()=> {
//     beforeEach(() => {
//         // console.log("this will run before each test");
//         const {rerender} = render(<SkillItem  key={1} item={item} />);
//     });

//     beforeAll(() => {
//         // console.log("this will run once before all the test");
//     })


//     afterEach(() => {
//         // console.log("This will run after each test");
//     });

//     afterAll(()=> {
//         // console.log("This will run once after all the test");
//     })

//     test('label should be initially value', () => {
//         // 1) Rending the component we want to test

//         const {labelElement} = typeSkillItem({label: "reactor"})
//         // console.log(labelElement);
//         expect(labelElement).toHaveTextContent(item.label);
        
//         expect(labelElement.textContent).toBe(item.label); 
//         expect(labelElement.textContent).toEqual(item.label); 
//     });

//     test('label should be initially value', () => {
//         // 1) Rending the component we want to test

//         const labelElement:HTMLElement = screen.getByRole("heading");
//         expect(labelElement).toHaveTextContent(item.label);
        
//         expect(labelElement.textContent).toBe(item.label); 
//         expect(labelElement.textContent).toEqual(item.label); 
//     });
// });