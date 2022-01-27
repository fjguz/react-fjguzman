import * as React from "react";

export const PathContext = React.createContext<ContextType | null>(null);

const PathProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [path, setPath] = React.useState<IPath>(
    {
      path: "/"
    }
  );

  const savePath = (save: IPath) => {
    const newPath: IPath = {
      path: save.path
    };
    setPath({...newPath});
  };

  const updatePath = (route: IPath) => {
    path.path = route.path;
    setPath({...path})
  };

  return (
    <PathContext.Provider value={{ path, savePath: savePath, updatePath }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathProvider;
