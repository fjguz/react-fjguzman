const enum PathEnum {
  MAIN = "/",
  FRONT = "/frontend",
  BACK = "/backend",
}

interface IPath {
  path: PathEnum | string;
}

type ContextType = {
  path: IPath;
  savePath: (path: IPath) => void;
  updatePath: (path: IPath) => void;
};
