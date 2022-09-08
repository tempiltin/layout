import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Pages/Layout/Layout';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import LoginReg from './Components/Pages/Auth/LoginReg';
import SendPasswordResetEmail from './Components/Pages/Auth/SendPasswordResetEmail';
import ResetPasword from './Components/Pages/Auth/ResetPasword';
import AdminLayout from './Components/Pages/Layout/AdminLayout';
import HomePage from './Components/Pages/Admin/HomePage';

const App = () => {
  return (
   <>
      <BrowserRouter>
        <Routes >
          <Route path='/auth' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact'  element={<Contact />} />
            <Route path='login'  element={<LoginReg />} />
            <Route path='send-password-reset-email'  element={<SendPasswordResetEmail />} />
            <Route path='reset'  element={<ResetPasword />} />
              
          </Route >
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App;