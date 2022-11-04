import React from 'react';
import './ss.css';
import { SlControlPlay } from 'react-icons/sl';
const Video = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-between mx-20'>
                <p className='text-3xl'>Our <span className='text-green-700'>Videos</span></p>
            </div>
            <div className='mx-20'>
                <div className='grid grid-cols-4 gap-8'>
                    <div className="">
                        <div class="box">
                            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg" className="img-video" alt="" />

                            <div class="video-container">
                                <div class="video-animation">
                                    <p className='icon'>
                                        <SlControlPlay className='text-4xl font-bold text-white' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div class="box">
                            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/biye.jpg" className="img-video" alt="" />

                            <div class="video-container">
                                <div class="video-animation">
                                    <p className='icon'>
                                        <SlControlPlay className='text-4xl font-bold text-white' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div class="box">
                            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg" className="img-video" alt="" />

                            <div class="video-container">
                                <div class="video-animation">
                                    <p className='icon'>
                                        <SlControlPlay className='text-4xl font-bold text-white' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div class="box">
                            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg" className="img-video" alt="" />

                            <div class="video-container">
                                <div class="video-animation">
                                    <p className='icon'>
                                        <SlControlPlay className='text-4xl font-bold text-white' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Video;