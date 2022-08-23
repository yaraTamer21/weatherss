import React, { useState } from 'react'

const Photos = () => {
 const [data,setdata]=useState(0)
 const [data1,setdata1]=useState(0)



 console.log(data)
    return (
        <>
            <div className="photos p-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/London.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                            {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/italy.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata1(yara)} class=  {yara<=data1?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/paris.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>




                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/cairo.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/LosAngeles.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/brazel.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/Chicago.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/newyork.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/mt3m.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>




                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/maldef.gif' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let yara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(yara)} class=  {yara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/alex.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let sara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(sara)} class=  {sara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="items ">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='./images/sharm.jpg' className='w-100' style={{ height: "170px" }} />
                                    </div>
                                    <div className="col-md-7 pt-3 pe-1">
                                        <h4 className='text-white h5'>Neque porro quisquam</h4>
                                        <p className='mb-0 text-white-50'>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
                                        <div className='my-2'>
                                        {[...Array(5)].map((star , i) => {
                                                let sara=i+1
                                                return (<>
                                                    <i onClick={()=>setdata(sara)} class=  {sara<=data?"fa-solid fa-star  me-1 text-primary":"fa-solid text-dark fa-star  me-1"} ></i>

                                                </>)
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Photos