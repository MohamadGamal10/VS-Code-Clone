import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import OpenedFilesBarTab from "./OpenedFilesBarTab"
import ContextMenu from "./ui/ContextMenu"
import { useState } from "react"
// import FileSyntaxHighlighter from "./FileSyntaxHighlighter"



const OpenedFilesBar = () => {
  const [menuPosition, setmenuPosition] = useState<{ x: number; y: number; }>({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { openedFiles } = useSelector((state: RootState) => state.tree)
  // console.log(openedFiles)
  return (
    <div className="w-full">
      <div 
      onContextMenu={e => {
      e.preventDefault();
      setmenuPosition({ x: e.clientX, y: e.clientY });
      setShowMenu(true);
      }} 
       className="flex items-center border-b-[1px] border-[#ffffff1f]" >
        {
          openedFiles.map(file => (
            <OpenedFilesBarTab key={file.id} file={file} />
          ))
        }
      </div>
      {showMenu && <ContextMenu positions={menuPosition} setShowMenu={setShowMenu} />}
    </div>
  )
}

export default OpenedFilesBar