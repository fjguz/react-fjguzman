export enum ITrainingEnum {
  Experience = "Experience",
  Education = "Education",
}

export interface ITraining<T> {
  type: T;
  period: string;
  company: string;
  title: string;
  description: string;
}
