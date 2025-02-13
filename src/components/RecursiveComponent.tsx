import { useState } from "react"
import { IFileTree } from "../interfaces"
import RightArrowIcon from "./SVG/Right"
import BottomArrowIcon from "./SVG/Bottom"
import RenderFileIcon from "./RenderFileIcon"
import { useDispatch, useSelector } from "react-redux"
import { setClickedFileAction, setOpenedFilesAction } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"
import { doesFileObjectExist } from "../utils/functions"

interface IProps {
  fileTree: IFileTree
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree)
  // console.log(openedFiles)

  // handlers
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleFileClick = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    dispatch(setClickedFileAction({  activeTabId: id, filename: name, fileContent: content }))
    if (exists) return;
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]))
  }

  return (
    <div className=' mb-2 ml-4 cursor-pointer'>
      <div className="flex items-center mb-1">
        {
          isFolder ? (
            <div onClick={toggle} className="flex items-center">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
              <RenderFileIcon isOpen={isOpen} isFolder={isFolder} filename={name} />
              <span className="ml-2">{name}</span>
            </div>
          )
            : (
              <div className="flex items-center mr-2" onClick={handleFileClick}>
                <RenderFileIcon isOpen={isOpen} isFolder={isFolder} filename={name} />
                <span className="ml-2">{name}</span>
              </div>
            )
        }



      </div>

      {isOpen && children && children?.map((file, index) => {
        return (
          <RecursiveComponent fileTree={file} key={index} />
        )
      })}
    </div>
  )
}

export default RecursiveComponent



// recursive function
// function factorial(x: number): number {
//   if (x === 0) {
//     return 1
//   }
//   return x * factorial(x - 1)
// }

// console.log(factorial(5)) 