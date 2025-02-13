import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

interface IProps {
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    showLeftPanel: boolean;
}

const ResizablePanel = ({ defaultLayout = [20, 80], leftPanel, rightPanel, showLeftPanel }: IProps) => {

    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
    };

    return (
        <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition" >
            {
                showLeftPanel && (
                    <>
                        <Panel className="h-full flex flex-col space-y-2 py-4 bg-gray-800" defaultSize={defaultLayout[0]} collapsible>
                            {leftPanel}
                        </Panel>
                        <PanelResizeHandle className="border-r-2 border-gray-400 bg-gray-800" />

                    </>
                )
            }

            <Panel defaultSize={defaultLayout[1]} >
                {rightPanel}
            </Panel>
        </PanelGroup>
    )
}

export default ResizablePanel