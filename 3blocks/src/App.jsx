
// Import components
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import Finance from './Finance';
import Development from './Development';
import Creation from './Creation';
import Collections from './Collections';

// Import Routes
import { Route, Routes } from "react-router-dom";

// Import CSS
import './App.css'



const App = () => {
  
  return (
    <div className="App">

      <Header />

      <Routes>

        <Route
          path='/'
          element={<Homepage />}
        />

        <Route
          path='/finance'
          element={<Finance />}
        />

        <Route
          path='/development'
          element={<Development />}
        />

        <Route
          path='/creation'
          element={<Creation />}
        />

        <Route
          path='/collections'
          element={<Collections />}
        />

      </Routes>

      <Footer />


    </div>
  )
}

export default App
