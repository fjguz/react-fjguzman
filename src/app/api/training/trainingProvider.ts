import axios from "axios";
import { ITraining, ITrainingEnum } from "./trainingModel";

const API = "http://localhost:4000";

const get = (url: string) =>
  axios
    .get<ITraining<ITrainingEnum.Education | ITrainingEnum.Experience>[]>(
      `${API}/${url}`
    )
    .then((response) => response.data);

export const trainingProvider = {
  get: get,
};
