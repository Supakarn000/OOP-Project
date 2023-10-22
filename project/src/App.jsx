import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from './start.jsx'
import Kor1 from '../jode/kor1'
import Kor2 from '../jode/kor2'
import Kor3 from '../jode/kor3'
import Kor4 from '../jode/kor4'
import Kor5 from '../jode/kor5'
import Kor6 from '../jode/kor6'
import Kor7 from '../jode/kor7'
import Kor8 from '../jode/kor8'
import Kor9 from '../jode/kor9'
import Kor11 from '../jode/kor11'
import Kor15 from '../jode/kor15'
import Kor16 from '../jode/kor16'
import Kor22 from '../jode/kor22'
import Kor23 from '../jode/kor23'
import Kor24 from '../jode/kor24'
import Kor25 from '../jode/kor25'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/kor1' element={<Kor1/>}/>
          <Route path='/kor2' element={<Kor2/>}/>
          <Route path='/kor3' element={<Kor3/>}/>
          <Route path='/kor4' element={<Kor4/>}/>
          <Route path='/kor5' element={<Kor5/>}/>
          <Route path='/kor6' element={<Kor6/>}/>
          <Route path='/kor7' element={<Kor7/>}/>
          <Route path='/kor8' element={<Kor8/>}/>
          <Route path='/kor9' element={<Kor9/>}/>
          <Route path='/kor11' element={<Kor11/>}/>
          <Route path='/kor15' element={<Kor15/>}/>
          <Route path='/kor16' element={<Kor16/>}/>
          <Route path='/kor22' element={<Kor22/>}/>
          <Route path='/kor23' element={<Kor23/>}/>
          <Route path='/kor24' element={<Kor24/>}/>
          <Route path='/kor25' element={<Kor25/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
