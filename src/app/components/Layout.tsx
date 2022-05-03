import { LayoutProps } from "../enities/interfaces/layout"
import '../styles/components/layout.scss'
import {useSelector} from 'react-redux'

export const Layout = ({children}: LayoutProps) => {
  const theme = useSelector((state: {theme: string}) => state.theme)
  
  return(
    <div className={(theme === 'Light') ? "layout" : "layout-dark"}>
      {children}
    </div>
  )
}