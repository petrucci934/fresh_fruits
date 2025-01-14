
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'

const App=()=> {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
      </main>
    </>
  )
}

export default App
