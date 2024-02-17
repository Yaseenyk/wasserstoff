import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GamesAnalytics from './pages/Dashboard/GamesAnalytics';
import Homepage from './pages/Homepage'
import GameDashboard from './pages/Download/GameDashboard'
import Overview from './pages/Overview/Overview';
import Analytics from './pages/Analytics/Analytics';

import './App.scss';
function App() {
  

  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}>
            <Route index element={<GameDashboard />} />
            <Route path='/dashboard' element={<  GameDashboard />} />
            <Route path='/Download' element={<Analytics />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/analytics' element={<GamesAnalytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App
