import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle,setSideToggle] = useState(false)

  const handletoggleBtn =()=>{
    setSideToggle(!sidetoggle)
  }
  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>Vedic Jyotishe Admin Panel</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="" target="_blank">
              <i class="fa-solid fa-globe"></i>
              Go To Website
            </a>

            <div className="logout">
              Log Out <i class="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>

        </div>

        <div className={`rightNav ${sidetoggle ? "active" : "" } `  }>
          <ul>
            <li><Link to="/dashboard" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Dashboard</Link></li>
            {/* <li><Link to="/all-day" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Day</Link></li> */}
            <li><Link to="/all-panchang" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Panchang</Link></li>
            {/* <li><Link to="/all-months" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Month</Link></li>
            <li><Link to="/all-samvat" onClick={handletoggleBtn}> <i class="fa-solid fa-layer-group"></i> Manage Samvat</Link></li> */}
            <li><Link to="/all-social-media" onClick={handletoggleBtn}> <i class="fa-brands fa-unsplash"></i> Manage Social Media</Link></li>
            <li><Link to="/all-blogs" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Blogs</Link></li>
            <li><Link to="/all-service" onClick={handletoggleBtn}> <i class="fa-brands fa-cc-discover"></i> Manage Service</Link></li>
            <li><Link to="/all-users" onClick={handletoggleBtn}> <i class="fa-solid fa-user"></i> All Users</Link></li>
            <li><Link to="/all-orders" onClick={handletoggleBtn}> <i class="fa-solid fa-truck-arrow-right"></i> Manage Orders</Link></li>
            
            <button className='logout mb-5'>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>

          </ul>
        </div>

      </header>
    </>
  )
}

export default Header