import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router'
import Error404 from './pages/Error404'
import SearchPage from './pages/Search'
import { Route } from './Route'

const appRoutes = [
  {
    path:'/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <>
      <main>
        <Router routes={appRoutes} defaultComponent={Error404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </main>
    </>
  )
}

export default App
