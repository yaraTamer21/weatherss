import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [checkColor,setcheckColor]=useState(false)
  
    const [checkColor1,setcheckColor1]=useState(false)
    const [checkColor2,setcheckColor2]=useState(false)
    const [checkColor3,setcheckColor3]=useState(false)
    const [checkColor4,setcheckColor4]=useState(false)
    const [bar,setbar]=useState(false)


  return (
   <>
   <div className="navbars">
   <div className="container">
     <div className="row h-100 justify-content-between w-100 align-items-center">
        <div className=" col-6  d-flex align-items-center">
        <img src='./images/logo22.png'/>
        <h1 className='h6 text-white fw-bolder mt-3 ms-3 header-navbar'>WheatherName</h1>

    </div>
        <div className=" col-6  ">
            <ul className='  list-navber mb-0 ' >
               <NavLink className='links' to="/">
               <li    onMouseEnter={()=>setcheckColor(true)} onMouseOut={()=>setcheckColor(false)} className={checkColor?"changecolor ":""}   >
                    Home
                </li>
               </NavLink>

             <NavLink className='links' to='/news'>
             <li     onMouseEnter={()=>setcheckColor1(true)} onMouseOut={()=>setcheckColor1(false)} className={checkColor1?"changecolor ":""} >
                   News
                </li>
             </NavLink>
               <NavLink className='links'  to='/live'>
               <li   onMouseEnter={()=>setcheckColor2(true)} onMouseOut={()=>setcheckColor2(false)} className={checkColor2?"changecolor ":""} >
                    LiveCamera
                </li>
               </NavLink>
               
             <NavLink className='links' to='/photos'>
             <li  onMouseEnter={()=>setcheckColor3(true)} onMouseOut={()=>setcheckColor3(false)} className={checkColor3?"changecolor ":""} >
                    Photos
                </li>
             </NavLink>
              <NavLink className='links' to='/contact'>
              <li   onMouseEnter={()=>setcheckColor4(true)} onMouseOut={()=>setcheckColor4(false)} className={checkColor4?"changecolor ":""} >
                   Contact
                </li>
              </NavLink>
            </ul>
      <div className=' icons-navber  justify-content-end position-relative'>
      <i  onClick={()=>setbar(!bar)} class="fa-solid fa-bars fs-3 text-white"></i>
      <div className=  {bar?'position-absolute list':'position-absolute list1'} >
         <ul className= ' px-5 py-2 d-flex flex-column   mb-0 ' >
               <NavLink className='links' to="/">
               <li  onClick={()=>setbar(false)}   onMouseEnter={()=>setcheckColor(true)} onMouseOut={()=>setcheckColor(false)} className={checkColor?"changecolor ":""}   >
                    Home
                </li>
               </NavLink>

             <NavLink className='links' to='/news'>
             <li  onClick={()=>setbar(false)}   onMouseEnter={()=>setcheckColor1(true)} onMouseOut={()=>setcheckColor1(false)} className={checkColor1?"changecolor ":""} >
                   News
                </li>
             </NavLink>
               <NavLink className='links'  to='/live'>
               <li onClick={()=>setbar(false)}  onMouseEnter={()=>setcheckColor2(true)} onMouseOut={()=>setcheckColor2(false)} className={checkColor2?"changecolor ":""} >
                    LiveCamera
                </li>
               </NavLink>
               
             <NavLink className='links' to='/photos'>
             <li onClick={()=>setbar(false)} onMouseEnter={()=>setcheckColor3(true)} onMouseOut={()=>setcheckColor3(false)} className={checkColor3?"changecolor ":""} >
                    Photos
                </li>
             </NavLink>
              <NavLink className='links' to='/contact'>
              <li  onClick={()=>setbar(false)} onMouseEnter={()=>setcheckColor4(true)} onMouseOut={()=>setcheckColor4(false)} className={checkColor4?"changecolor ":""} >
                   Contact
                </li>
              </NavLink>
            </ul>
    </div>
      </div>
   
          
        </div>
    </div>
   </div>
   </div>
   
   
   
   </>
  )
}

export default Navbar