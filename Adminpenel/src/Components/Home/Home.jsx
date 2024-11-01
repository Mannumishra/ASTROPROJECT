import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllOrder from '../../Pages/Orders/AllOrder'
import EditOrder from '../../Pages/Orders/EditOrder'
import AllUsers from '../../Pages/Users/AllUsers'
import AllDay from '../../Pages/Day/AllDay'
import AddDay from '../../Pages/Day/AddDay'
import EditDay from '../../Pages/Day/EditDay'
import AllMonths from '../../Pages/Months/AllMonths'
import AddMonths from '../../Pages/Months/AddMonths'
import EditMonth from '../../Pages/Months/EditMonth'
import AddSamvat from '../../Pages/Samvat/AddSamvat'
import AllSamvat from '../../Pages/Samvat/AllSamvat'
import EditSamvat from '../../Pages/Samvat/EditSamvat'
import AllSocialMedia from '../../Pages/SocialMedia/AllSocialMedia'
import AddSocialMedia from '../../Pages/SocialMedia/AddSocialMedia'
import EditSocialMedia from '../../Pages/SocialMedia/EditSocialMedia'
import AllBlog from '../../Pages/Blog/AllBlog'
import AddBlog from '../../Pages/Blog/AddBlog'
import EditBlog from '../../Pages/Blog/EditBlog'
import AllService from '../../Pages/Service/AllService'
import AddService from '../../Pages/Service/AddService'
import EditService from '../../Pages/Service/EditService'
import Panchang from '../../Pages/Panchange/Panchang'
import Login from '../auth/Login'

const Home = () => {
  const isLoggedIn = sessionStorage.getItem("login");
  return (
    <>
      {
        isLoggedIn ? (
          <>
            <Header />
            <div className="rightside">
              <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />

                <Route path={"/all-panchang"} element={<Panchang />} />

                {/* Category --  */}
                <Route path={"/all-day"} element={<AllDay />} />
                <Route path={"/add-day"} element={<AddDay />} />
                <Route path={"/edit-day/:id"} element={<EditDay />} />

                {/* Product --  */}
                <Route path={"/all-samvat"} element={<AllSamvat />} />
                <Route path={"/add-samvat"} element={<AddSamvat />} />
                <Route path={"/edit-samvat/:id"} element={<EditSamvat />} />


                {/* --- Orders --- */}
                <Route path={"/all-users"} element={<AllUsers />} />

                {/* --- Vouchers --- */}
                <Route path={"/all-service"} element={<AllService />} />   {/* // All Vouchers */}
                <Route path={"/add-service"} element={<AddService />} />
                <Route path={"/edit-service/:id"} element={<EditService />} />

                {/* --- Tags --- */}
                <Route path={"/all-blogs"} element={<AllBlog />} />
                <Route path={"/add-blog"} element={<AddBlog />} />
                <Route path={"/edit-blog/:id"} element={<EditBlog />} />

                {/* --- Banners --- */}
                <Route path={"/all-months"} element={<AllMonths />} />
                <Route path={"/add-month"} element={<AddMonths />} />
                <Route path={"/edit-month/:id"} element={<EditMonth />} />

                {/* --- Banners --- */}
                <Route path={"/all-social-media"} element={<AllSocialMedia />} />
                <Route path={"/add-social-media"} element={<AddSocialMedia />} />
                <Route path={"/edit-social-media/:id"} element={<EditSocialMedia />} />

                {/* --- Orders --- */}
                <Route path={"/all-orders"} element={<AllOrder />} />
                <Route path={"/edit-order/:id"} element={<EditOrder />} />

              </Routes>
            </div>

          </>
        ) : <Login />
      }
    </>
  )
}

export default Home