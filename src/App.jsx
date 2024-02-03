import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Homepage from './pages/Homepage'
import Statistics from './pages/Statistics/Statistics'
import Overview from './pages/Overview/Overview';
import Analytics from './pages/Analytics/Analytics';
import './App.scss';
function App() {

  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}>
            <Route index element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/analytics' element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App
