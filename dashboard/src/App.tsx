import { ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { LightTheme } from "./shared/layout"


export const App =() => {

  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  )
}