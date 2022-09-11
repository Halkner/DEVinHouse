import {ThemeContextProvider} from './context/ThemeContext/ThemeContextProvider'
import {Layout} from './layout'

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>

        <Layout/>

      </ThemeContextProvider>
    </div>
  )
}

export default App
