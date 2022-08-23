import React from 'react'

const News = () => {
    return (
        <>
            <div className="news  py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 containers-news col-md-6">
                            <div className="items">
                                <h4 className='text-white fw-bolder'>Nemo enim ipsam voluptatem quia voluptas</h4>
                                <img src='./images/weather/Lightsleet.jpg' className='w-100 rounded-2 mt-2' style={{ height: "300px" }} />
                                <p className='text-white-50 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.

                                </p>
                                <button className='btn btn-primary rounded-4'> Read More</button>
                            </div>
                            <hr />
                            <div className="items">
                                <h4 className='text-white fw-bolder'>Nemo enim ipsam voluptatem quia voluptas</h4>
                                <img src='./images/weather/Moderateorheavyrainshower.jpg' className='w-100 rounded-2 mt-2' style={{ height: "300px" }} />
                                <p className='text-white-50 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.

                                </p>
                                <button className='btn btn-primary rounded-4'> Read More</button>
                            </div>
                            <hr />

                            <div className="items">
                                <h4 className='text-white fw-bolder'>Nemo enim ipsam voluptatem quia voluptas</h4>
                                <img src='./images/weather/Heavysnow.jpg' className='w-100 rounded-2 mt-2' style={{ height: "300px" }} />
                                <p className='text-white-50 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.

                                </p>
                                <button className='btn btn-primary rounded-4'> Read More</button>
                            </div>

                        </div>
                        <div className="col-lg-4  col-md-6 px-5 ">
                            <div className='d-flex  justify-content-center mt-5'>
                                <div className="child-news  w-100  px-4 py-4  rounded-2">
                                    <h5 className='text-white-50 mb-4 '>Hot News</h5>
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Accusamus dignissimos</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6> Ducimus praesentium </h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Accusamus dignissimos</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Voluptatum deleniti corrupti</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Wuos dolores excepturi sint</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Occaecati provident dolor</h6>
                                    </div>
                                </div>
                            </div>




                            {/* <div className='d-flex justify-content-center mt-5'>
                                <div className="child-news px-4 py-4  rounded-2">
                                    <h5 className='text-white-50 mb-4' >Categories</h5>
                                    <div className='d-flex ps-1 mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Nemo enim ipsam</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Voluptatem voluptas</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Aspernatur aut odit</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Consequuntur magni</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Dolores ratione</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Voluptatem nesciunt</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Neque porro quisquam</h6>
                                    </div>

                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Dolorem ipsum quia</h6>
                                    </div>
                                </div>
                            </div> */}


                            <div className='d-flex justify-content-center mt-5'>
                                <div className="child-news   w-100   px-4 py-4  rounded-2">
                                    <h5 className='text-white-50 mb-4'>Top rated posts
                                    </h5>
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>
                                    <hr />
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>
                                    <hr />
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>

                                    <hr />
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>




                                </div>
                            </div>





                            <div className='d-flex justify-content-center mt-5'>
                                <div className="child-news   w-100   px-4 py-4  rounded-2">
                                    <h5 className='text-white-50 mb-4'>Top rated posts
                                    </h5>
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>
                                    <hr />
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>
                                    <hr />
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>

                                    <hr />
                                    <div className='d-flex ps-1  mb-2'>
                                        <span className='me-2'><i class="fa-solid fa-right-long text-primary"></i></span>
                                        <h6>Doloremque laudantium lorem
                                            5.5 (759 rates)</h6>
                                    </div>




                                </div>
                            </div>
                            <div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default News