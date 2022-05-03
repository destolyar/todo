import { LayoutProps } from "../enities/interfaces/layout"


export const Layout = ({children}: LayoutProps) => {
  return(
    <div className="layout">{children}</div>
  )
}