import { AppContext } from "./contexts/app-context"
import { Home } from "./pages/Home"

function App() {

  return (
    <div className="App">
      <AppContext>
        <Home/>
      </AppContext>
    </div>
  )
}

export default App
