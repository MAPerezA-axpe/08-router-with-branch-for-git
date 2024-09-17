import { lazy, Suspense } from 'react'
import './App.css'
import Error404 from './pages/Error404'
import SearchPage from './pages/Search'
import { Router } from './Router'
import { Route } from './Route'

//Hacemos un import dinámico del Home.jsx para importarlo cuando lo necesitemos
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))

//Hacemos lo mismo con About.jsx
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

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
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={appRoutes} defaultComponent={Error404}>
            <Route path='/' Component={LazyHomePage} />
            <Route path='/about' Component={LazyAboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
