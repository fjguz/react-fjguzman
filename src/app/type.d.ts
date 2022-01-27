interface IPath {
  path: string;
}

type ContextType = {
  path: IPath;
  savePath: (path: IPath) => void;
  updatePath: (path: IPath) => void;
};
