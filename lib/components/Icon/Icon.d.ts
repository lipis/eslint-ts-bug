import React from "react";
interface IconProps {
    /** Name of the Icon * */
    name: string;
    /** Size of the Icon * */
    size?: number;
    /** Color of the Icon
     * @default "#000"
     */
    color?: string;
    style?: any;
}
declare const Icon: React.SFC<IconProps>;
export default Icon;
