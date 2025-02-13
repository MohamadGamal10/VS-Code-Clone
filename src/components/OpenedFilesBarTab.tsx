import { useDispatch, useSelector } from "react-redux"
import { IFileTree } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import CloseIcon from "./SVG/CloseIcon"
import { setClickedFileAction, setOpenedFilesAction, setTabIdToRemoveAction } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"


interface IProps {
  file: IFileTree
}

const OpenedFilesBarTab = ({ file }: IProps) => {

  const dispatch = useDispatch();
  const { openedFiles, clickedFile } = useSelector((state: RootState) => state.tree)
  console.log(openedFiles)
  const { id, name, content } = file;
  const onClick = () => {
    dispatch(setClickedFileAction({ activeTabId: id, filename: name, fileContent: content }))
  }

  const onRemove = (id: string) => {
    const filtered = openedFiles.filter((file) => file.id !== id)
    dispatch(setOpenedFilesAction(filtered))

    const lastTap = filtered[filtered.length - 1];
    if (!lastTap) {
      dispatch(setOpenedFilesAction([]));
      dispatch(setClickedFileAction({ activeTabId: null, filename: "", fileContent: "" }));
      return;
    }

    dispatch(setClickedFileAction({ activeTabId: lastTap.id, filename: lastTap.name, fileContent: lastTap.content }))
  }

  
  return (
    <div onClick={onClick} onContextMenu={e => {
      e.preventDefault();
      dispatch(setTabIdToRemoveAction(id))
    }}
      className={`max-w-screen-md flex items-center p-2 border-t-3 ${id === clickedFile.activeTabId ? "border-[purple]" : "border-transparent"} `}>
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-1 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit ml-1 p-1 rounded-md"
        onClick={e => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        <CloseIcon />
      </span>
    </div>

  )
}

export default OpenedFilesBarTab