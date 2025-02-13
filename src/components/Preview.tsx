import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBar from "./OpenedFilesBar";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const Preview = () => {
  const {clickedFile: { fileContent }} = useSelector(({ tree }: RootState) => tree);

  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={fileContent} />
    </>
  );
};

export default Preview;
