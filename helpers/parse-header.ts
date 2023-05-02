export const parseHeader = (header?: string[]) => {
  return header?.at(0)?.split(";", 1).at(0)?.split("=")[1];
};
