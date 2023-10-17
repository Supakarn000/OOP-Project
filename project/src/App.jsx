import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Index from './index.jsx'
import Kor1 from '../jode/kor1'
import Kor2 from '../jode/kor2'
import Kor3 from '../jode/kor3'
import Kor4 from '../jode/kor4'
import Kor5 from '../jode/kor5'
import Kor6 from '../jode/kor6'
import Kor7 from '../jode/kor7'
import Kor8 from '../jode/kor8'
import Kor9 from '../jode/kor9'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/kor1' element={<Kor1/>}/>
          <Route path='/kor2' element={<Kor2/>}/>
          <Route path='/kor3' element={<Kor3/>}/>
          <Route path='/kor4' element={<Kor4/>}/>
          <Route path='/kor5' element={<Kor5/>}/>
          <Route path='/kor6' element={<Kor6/>}/>
          <Route path='/kor7' element={<Kor7/>}/>
          <Route path='/kor8' element={<Kor8/>}/>
          <Route path='/kor9' element={<Kor9/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
