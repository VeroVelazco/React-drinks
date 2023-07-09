import { Route, BrowserRouter , Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/Login'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/' 
                element={<Home/>}
            />
            <Route 
                path='*' 
                element={<NotFound/>}
            />
            <Route 
                path='login' 
                element={<Login/>}
            />
        </Routes>
    </BrowserRouter>
  )
}
