import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'






const Weather = () => {

    const [data, setdata] = useState(null)
    const [data1, setdata1] = useState("")


    useEffect(() => {

        first()

    }
        , [])
    const first = async () => {
        const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c5ef6312757a44d6890204552211209&q=cairo&days=3`)

        setdata(data)
    }

    const GetLocation = async (x) => {

        if (x === "") {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c5ef6312757a44d6890204552211209&q=cairo&days=3`)

            setdata(data)
        }
        else if (x == "israel" || x == "اسرائيل") {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c5ef6312757a44d6890204552211209&q=فلسطين&days=3`)

            setdata(data)

        }


        else {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c5ef6312757a44d6890204552211209&q=${x}&days=3`)

            setdata(data)

        }






    }






    return (
        <>

            {data !== null && data && <div style={{ backgroundImage: `url(./images/weather/${data.current.condition.text.replace(/\s+/g, '')}.jpg)` }} className="weather  p-5  ">
                <div className="container p-5">
                    <div className="row weather-container align-items-center">
                        <div className=" col-10  input-search">
                            <div className="items ">
                                <input onChange={(e) => GetLocation(e.target.value)} className='w-100 ' type='text' placeholder="Find Your Location" />
                            </div>
                        </div>
                        <div className=" col-2  p-0">
                            <div className="items d-flex justify-content-end  ">
                                <button className='btn btn-primary px-sm-5   px-3'>Find</button>
                            </div>
                        </div>
                    </div>


                    {data !== null && data && <div className="row mt-5">
                        <div className="col-md-4 container-temperature">
                            <div className="items">
                                <div className="row px-3  py-1 header-temperature">
                                    <div className="col-6">
                                        <h6 className='mb-0'>Today</h6>
                                    </div>
                                    <div className="col-6  d-flex justify-content-end px-3">
                                        <h6 className='mb-0'>6 oct</h6>
                                    </div>
                                </div>

                                <div className="data   ps-sm-3 p-0">
                                    <div className=' mt-4 fw-bolder ' >
                                        <h4 className='h5 text-white-50 '>{data.location.name}</h4>
                                    </div>
                                    <div className="d-flex mt-4 temperature align-items-center ">
                                        <div ><h1>{data.current.temp_c}<span className='traga'>o</span>C</h1></div>
                                        <div >
                                            <img src={data.current.condition.icon} className='images-weather' />
                                        </div>

                                    </div>
                                    <h3 className='fw-bolder my-lg-4 my-3 my-md-2  h5 text-primary'>{data.current.condition.text}</h3>

                                    <div className="row bottoms-tempreatute mt-lg-4  pb-4 p-lg-0 p-md-0 pb-sm-4 ">
                                        <div className="col-5 col-lg-3 col-md-6 ">
                                            <div className="items align-items-center  d-flex">
                                                <img src='./images/icon-umberella.png' className='icons-images' />
                                                <h5 className='mb-0 ms-2 h6'>{data.current.pressure_in}%</h5>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-4 col-md-6 ">
                                            <div className="items align-items-center  d-flex">
                                                <img src='./images/icon-wind.png' className='icons-images' />
                                                <h5 className='mb-0 ms-2 h6'>{data.current.wind_kph}km/h</h5>
                                            </div>
                                        </div>
                                        <div className="col-5  col-lg-3 col-md-6 ">
                                            <div className="items align-items-center mt-1 mt-md-1 mt-lg-0  d-flex">
                                                <img src='./images/icon-compass.png' className='icons-images' />
                                                <h5 className='mb-0 ms-2 h6'>East</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {data1?<>
                         <div className="col-md-8">
                            <div className="items">
                                <div className="row">
                                    <div className="col-md-4 items-1 px-0">
                                        <div className="items anothes">
                                            <h5 class="fw-bolder  h6 py-1 mb-0 items-1-header text-white-50 text-center">
                                                Tuesday
                                            </h5>
                                            <div className='text-center py-3'>
                                                <img className='mb-3 w-50' src={data.forecast.forecastday[0].day.condition.icon} />
                                                <h1 className='mb-4 text-white'>{data.forecast.forecastday[0].day.maxtemp_c}<span className='traga'>o</span>C</h1>
                                                <h3 className='fw-bolder  mb-3 h5 text-primary'>{data.forecast.forecastday[0].day.condition.text}</h3>
                                                <h4 className='mb-3 text-white'>{data.forecast.forecastday[0].day.mintemp_c}<span className='traga'>o</span></h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-0 items-2">
                                        <div className="items anothes">
                                            <h5 class="fw-bolder  h6 py-1 mb-0 items-2-header text-white-50 text-center">
                                                Wendsday
                                            </h5>
                                            <div className='text-center py-3'>
                                                <img className='mb-3 w-50' src={data.forecast.forecastday[1].day.condition.icon} />
                                                <h1 className='mb-4 text-white'>{data.forecast.forecastday[1].day.maxtemp_c}<span className='traga'>o</span>C</h1>

                                                <h3 className='fw-bolder  mb-3 h5 text-primary'>{data.forecast.forecastday[1].day.condition.text}</h3>
                                                <h4 className='mb-3 text-white'>{data.forecast.forecastday[1].day.mintemp_c}<span className='traga'>o</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-0 items-3">
                                        <div className="items anothes">
                                            <h5 class="fw-bolder  h6 py-1 mb-0  items-3-header text-white-50 text-center">
                                                Thursday
                                            </h5>
                                            <div className='text-center py-3'>
                                                <img className='mb-3 w-50' src={data.forecast.forecastday[2].day.condition.icon} />
                                                <h1 className='mb-4 text-white'>{data.forecast.forecastday[2].day.maxtemp_c}<span className='traga'>o</span>C</h1> <h3 className='fw-bolder  mb-3 h5 text-primary'>{data.forecast.forecastday[2].day.condition.text}</h3>
                                                <h4 className='mb-3 text-white'>{data.forecast.forecastday[2].day.mintemp_c}<span className='traga'>o</span></h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        </>: <div className="col-md-8 large-screen">
                            <div className="items">
                                <div className="row">
                                    <div className="col-md-4 items-1 px-0">
                                        <div className="items anothes">
                                            <h5 class="fw-bolder  h6 py-1 mb-0 items-1-header text-white-50 text-center">
                                                Tuesday
                                            </h5>
                                            <div className='text-center py-3'>
                                                <img className='mb-3 w-50' src={data.forecast.forecastday[0].day.condition.icon} />
                                                <h1 className='mb-4 text-white'>{data.forecast.forecastday[0].day.maxtemp_c}<span className='traga'>o</span>C</h1>
                                                <h3 className='fw-bolder  mb-3 h5 text-primary'>{data.forecast.forecastday[0].day.condition.text}</h3>
                                                <h4 className='mb-3 text-white'>{data.forecast.forecastday[0].day.mintemp_c}<span className='traga'>o</span></h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-0 items-2">
                                        <div className="items anothes">
                                            <h5 class="fw-bolder  h6 py-1 mb-0 items-2-header text-white-50 text-center">
                                                Wendsday
                                            </h5>
                                            <div className='text-center py-3'>
                                                <img className='mb-3 w-50' src={data.forecast.forecastday[1].day.condition.icon} />
                                                <h1 className='mb-4 text-white'>{data.forecast.forecastday[1].day.maxtemp_c}<span className='traga'>o</span>C</h1>

                                                <h3 className='fw-bolder  mb-3 h5 text-primary'>{data.forecast.forecastday[1].day.condition.text}</h3>
                                                <h4 className='mb-3 text-white'>{data.forecast.forecastday[1].day.mintemp_c}<span className='traga'>o</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-0 items-3">
                                        <div className="items anothes">
                                            <h5 class="fw-bolder  h6 py-1 mb-0  items-3-header text-white-50 text-center">
                                                Thursday
                                            </h5>
                                            <div className='text-center py-3'>
                                                <img className='mb-3 w-50' src={data.forecast.forecastday[2].day.condition.icon} />
                                                <h1 className='mb-4 text-white'>{data.forecast.forecastday[2].day.maxtemp_c}<span className='traga'>o</span>C</h1> <h3 className='fw-bolder  mb-3 h5 text-primary'>{data.forecast.forecastday[2].day.condition.text}</h3>
                                                <h4 className='mb-3 text-white'>{data.forecast.forecastday[2].day.mintemp_c}<span className='traga'>o</span></h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>}
                      



                     
                    </div>}


                    {data1==false? <h3   style={{cursor:"pointer"}} className=' deatils   text-center  mt-1 ' onClick={()=>setdata1(true)}>see more</h3>:<h3  style={{cursor:"pointer"}} className='text-center mt-1  deatils' onClick={()=>setdata1(false)}>close details</h3>}
                </div>
            </div>}

        </>
    )
    }

export default Weather