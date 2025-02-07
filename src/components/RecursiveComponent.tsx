import { useState } from "react"
import { IFileTree } from "../interfaces"
import RightArrowIcon from "./SVG/Right"
import BottomArrowIcon from "./SVG/Bottom"
import RenderFileIcon from "./RenderFileIcon"

interface IProps {
  fileTree: IFileTree
}

const RecursiveComponent = ({ fileTree: { name, isFolder, children } }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // handlers
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=' mb-2 ml-4 cursor-pointer'>
      <div className="flex items-center mb-1">
        {
          isFolder ? (
            <div onClick={toggle} className="flex items-center">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon /> }
              <RenderFileIcon isOpen={isOpen} isFolder={isFolder} filename={name} />
              <span className="ml-2">{name}</span>
            </div>
          )
            : (
              <div className="flex items-center mr-2">
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