import { ITraining, ITrainingEnum } from "../../api/models/trainingModel";

export interface IWelcomeDetail {
  education: ITraining<ITrainingEnum.Education>[];
  experience: ITraining<ITrainingEnum.Experience>[];
}
