import { TRoute, TUesrPath } from "../types"



export const routesGenerator = (items : TUesrPath[])=>{
     const routes = items.reduce((acc: TRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            })
        }
    
        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!,
                    element: child.element
                })
            })
        }
        return acc
    }, [])
    return routes;
    
}
export default routesGenerator