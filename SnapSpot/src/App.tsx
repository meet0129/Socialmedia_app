import { Routes ,Route } from 'react-router-dom';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import Authlayout from './_auth/Authlayout';
import RootLayout from './_root/RootLayout';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
          {/* <Public Routes>*/ }
          <Route element={<Authlayout />}>
                <Route path='/sign-in' element={<SigninForm />} />
                <Route path='/sign-up' element={<SignupForm />} />
          </Route>
          
          {/* <Private Routes> */}
          <Route element={<RootLayout />}>
                <Route index element={<Home/>} />
          </Route>
        </Routes>
        <Toaster />
    </main>
  )
}

export default App