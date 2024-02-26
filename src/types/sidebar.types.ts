import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element: ReactNode
}
export type TUesrPath = {

    name: string,
    path ? : string,
    element ?: ReactNode,
    children ?: TUesrPath[],


}

export type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
}