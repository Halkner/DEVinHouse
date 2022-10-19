import { Home } from "./components/pages/Home/Home"
import { ModalProvider } from "./contexts/ModalContext/ModalProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <ModalProvider>
      <GlobalStyles/>
      <Home/>
    </ModalProvider>
  )
}

export default App
