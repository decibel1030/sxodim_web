import { Outlet, Link } from 'react-router-dom'
import Header from './components/header'
import "./assets/css/index.css"
import 'leaflet/dist/leaflet.css';

import Content from './components/content'
function App() {
  return (
    <>
      <Header/>
      <Content/>
    </>
  )
}

export default App
