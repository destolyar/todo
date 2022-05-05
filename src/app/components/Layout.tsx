import { LayoutProps } from "../enities/interfaces/layout"
import '../styles/components/layout.scss'
import {useSelector} from 'react-redux'
import { RootState } from "../store/store"

export const Layout = ({children}: LayoutProps) => {
  const theme = useSelector((state: RootState) => state.themeSlice.theme)
  
  return(
    <div className={(theme === 'Light') ? "layout" : "layout-dark"}>
      {children}
    </div>
  )
}