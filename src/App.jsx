import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router'
import Error404 from './pages/Error404'
import SearchPage from './pages/Search'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path:'/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <>
      <main>
        <Router routes={appRoutes} defaultComponent={Error404}/>
      </main>
    </>
  )
}

export default App
