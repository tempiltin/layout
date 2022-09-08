import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Pages/Layout/Layout';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import LoginReg from './Components/Pages/Auth/LoginReg';

const App = () => {
  return (
   <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact'  element={<Contact />} />
            <Route path='login'  element={<LoginReg />} />
          </Route >
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App;