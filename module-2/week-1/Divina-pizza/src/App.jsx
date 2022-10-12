import { MainContent } from "./components/MainContent/MainContent"
import { Topbar } from "./components/Topbar/Topbar"
import { ModalProvider } from "./contexts/ModalContext/ModalProvider"

function App() {
  return (
    <ModalProvider>
      <Topbar/>
      <MainContent/>
    </ModalProvider>
  )
}

export default App
