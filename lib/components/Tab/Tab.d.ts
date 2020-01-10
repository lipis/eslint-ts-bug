import { Component, ReactNode, SFC } from "react";
interface TabPaneProps {
    title: string;
    shouldRender?: boolean;
    children: ReactNode;
}
interface TabProps {
    children: ReactNode;
    defaultActiveTab: string;
}
interface TabState {
    activeTab: string;
}
declare class Tab extends Component<TabProps, TabState> {
    static TabPane: SFC<TabPaneProps>;
    private constructor();
    private handleTabChange;
    render(): JSX.Element;
}
export default Tab;
