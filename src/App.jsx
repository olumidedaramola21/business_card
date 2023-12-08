import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
        return (
                <div className='app--container'>
                        <div className='app--container--two'>
                        <Header  />
                        <Main />
                        <Footer />
                </div>
                </div>
        )
}

export default App
