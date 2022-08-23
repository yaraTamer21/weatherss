import React from 'react'

const LiveCamera = () => {
    return (
        <>
            <div className="live_camera py-5">
                <div className="container p-5">
                    <h2 className='text-white '>Live cameras</h2>
                    <div className="row my-4">
                        <div className="col-md-3">
                            <div className="items">
                                <div className="images">
                                    <img src='./images/newyork.jpg' className='w-100 rounded-2'  style={{height:"200px"}} />

                                    <div className="icons">
                                 <a href='https://www.youtube.com/watch?v=TI4zcmScFQk' target='_blanck'>   <i class="fa-solid fa-circle-play"></i></a>
                                    </div>
                                </div>
                                <h5 className='mt-3 text-white '>New York</h5>
                                <p className='text-white-50'>8 oct, 8:00AM</p>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="items ">
                                <div className="images">
                                    <img src='./images/LosAngeles.jpg' className='w-100 rounded-2 ' style={{height:"200px"}} />
                                    <div className="icons">
                                 <a href='https://www.youtube.com/watch?v=vvOjJoSEFM0' target='_blanck'>   <i class="fa-solid fa-circle-play"></i></a>
                                    </div>
                                </div>
                                <h5 className='mt-3 text-white '>Los Angeles</h5>
                                <p className='text-white-50'>8 oct, 8:00AM</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="items">
                                <div className="images">
                                    <img src='./images/Chicago.jpg' className='w-100 rounded-2'  style={{height:"200px"}} />
                                    <div className="icons">
                                 <a href='https://www.youtube.com/watch?v=th178qnH-Ik' target='_blanck'>   <i class="fa-solid fa-circle-play"></i></a>
                                    </div>

                                </div>
                                <h5 className='mt-3 text-white '>Chicago</h5>
                                <p className='text-white-50'>8 oct, 8:00AM</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="items">
                                <div className="images">
                                    <img src='./images/London.jpg' className='w-100 rounded-2'  style={{height:"200px"}} />
                                    <div className="icons">
                                 <a href='https://www.youtube.com/watch?v=V00D4K9OshI' target='_blanck'>   <i class="fa-solid fa-circle-play"></i></a>
                                    </div>



                                </div>
                                <h5 className='mt-3 text-white '>London</h5>
                                <p className='text-white-50'>8 oct, 8:00AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default LiveCamera