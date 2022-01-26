export enum ISkillEnum {
  Framework = "Framework",
  Code = "Code",
  Test = "Test",
}

export interface ISkill<T> {
  type: T;
  label: string;
  percent: number;
}
