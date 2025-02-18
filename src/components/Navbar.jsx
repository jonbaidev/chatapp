import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">JonBai Chat</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <span>John</span>
          <button>Logout</button>  
        </div>  
    </div>  
   
  )
}

export default Navbar