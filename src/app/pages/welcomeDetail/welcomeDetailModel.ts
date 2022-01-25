import { ITraining, ITrainingEnum } from "../../api/training/trainingModel";

export interface IWelcomeDetail {
  education: ITraining<ITrainingEnum.Education>[];
  experience: ITraining<ITrainingEnum.Experience>[];
}
