import './App.css'
import { fileTree } from './data/FileTree'
import RecursiveComponent from './components/RecursiveComponent'
import OpenedFilesBar from './components/OpenedFilesBar'
import ResizablePanel from './components/ResizablePanel'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import WelcomeTab from './components/WelcomeTab'
import Preview from './components/Preview'

function App() {
  const { openedFiles } = useSelector(({tree}: RootState) => tree);
  return (
    <div className='bg-gray-900 h-svh flex items-center justify-center'>
        <ResizablePanel 
        leftPanel={<RecursiveComponent fileTree={fileTree} />} 
        rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />} 
        showLeftPanel={true} />
    </div>
  )
}

export default App


