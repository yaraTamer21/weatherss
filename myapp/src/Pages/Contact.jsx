import React ,{useState} from 'react'
import { toast } from 'react-toastify'


const inital={
    name:"",
    email:"",
    company:"",
    website:"",
    comment:""
}
const Contact = () => {
const [data,setdata]=useState(inital);
const {name,email,company,website,comment}=data

                  const OnchangesData =(e)=>{
                    const {value,name}=e.target
                    setdata({...data,[name]:value})

                  }
                  const sendData=(e)=>{
                    e.preventDefault();
                    if(name==""||email==""||company==""||website==""||comment==""){
                       
                        
                         toast.error("pleas Fill All fields ")
                    }
else{
    toast.success("thanks for your feedback :)")
    setdata(inital)
}
                  }
    return (
        <>
            <div className="contact p-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="items">
                                <div>
                                    <iframe className='rounded-2 w-100 maps ' style={{ height: "400px" }} id="gmap_canvas" src="https://maps.google.com/maps?q=cairo&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    <div className="contacts  ">
                                        <div className='d-flex  align-items-center'>
                                            <i class="fa-solid fa-location-dot me-2 text-primary fs-5"></i>
                                            <div>
                                                <h5 className='h6'>Company Name INC.
                                                </h5>
                                                <h5 className='h6'> 2803 Avenue Street, Los Angeles</h5>
                                            </div>
                                        </div>
                                        <div className='d-flex information mt-3 '>
                                            <div className='d-flex   align-items-center'>
                                                <i class="fa-solid fa-phone me-1 text-primary  fa-1x"></i> <h5 className='h6 me-sm-5    me-3 '>01013532503</h5>
                                            </div>
                                            <div className='  d-flex  align-items-center'>
                                                <i class="fa-solid fa-envelope me-2 text-primary"></i>   <h5 className='h6 '>ytamer230@gmail.com</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-12 mt-0 mt-md-4 ps-4">
                            <div className="items">
                                <h3 className='text-primary fw-bolder'>Contact us</h3>
                                <p className='text-white-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur inventore ducimus, facilis, numquam id soluta omnis eius recusandae nesciunt vero repellat harum cum. Nisi facilis odit hic, ipsum sed!

                                </p>

                                <div className="row form-contact">
                                    <div className="col-md-6 mt-sm-3 mt-md-0 mt-lg-0 ">
                                        <div className="items">
                                            <input onChange={OnchangesData} name="name" value={name} type='text' className='w-100 text-white' placeholder=" YourName..."  required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-2 mt-sm-2 mt-md-0 mt-lg-0">
                                        <input onChange={OnchangesData} name='email' value={email} type='email' className='w-100 text-white' placeholder=" Email Address..." required />


                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <div className="items">
                                            <input onChange={OnchangesData} name='company' value={company} type='text' className='w-100 text-white' placeholder=" CompanyName..."  required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <input onChange={OnchangesData} name='website' value={website} type='text' className='w-100 text-white' placeholder="YourWebsite..." required />


                                    </div>


                                    <div className="col-md-12">
                                        <textarea value={comment} name="comment" onChange={OnchangesData} className="w-100 mt-3 text_ares ps-3 text-white" rows={7} />
                                    </div>
                                    <button  type='submit' onClick={sendData} className='btn btn-primary w-25 m-auto mt-3'>Sumbit</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
export default Contact