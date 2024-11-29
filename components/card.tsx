import { Models } from "node-appwrite";

export const Card = ({ file }: { file: Models.Document }) => {
  return <div>{file.name}</div>;
};
