import { IFileTree } from "../interfaces";

export const doesFileObjectExist = (arr: IFileTree[], id: string) => {
  return arr.some(obj => obj.id === id);
};