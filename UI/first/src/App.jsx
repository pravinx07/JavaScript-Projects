import { Fade } from './components/Fade'
import  Card from './components/Card'
import './App.css'
import RemovableCards from './components/RemovableCards'
import ScrollDemo from './components/ScrollDemo'
import AnimatedNavbar from './components/AnimatedNavbar'
import Page from './components/Page'

function App() {

  return (
    <div className='h-screen bg-gray-900'>
    {/* <Fade/> */}
    {/* <Card/> */}
    <AnimatedNavbar/>
    {/* <Page/> */}
    <RemovableCards/>
    <ScrollDemo/>
    </div>
  )
}

export default App
