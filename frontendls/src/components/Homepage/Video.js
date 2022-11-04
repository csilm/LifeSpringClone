import React from 'react';
import './ss.css'
import img from '../images/emotional-selfcare-480x304.jpg';
const Video = () => {
    return (
        <div>
             <div className='flex justify-between mt-5 mx-20'>
                    <p className='text-3xl'>Our <span className='text-green-700'>Videos</span></p>    
            </div>
            <div className='mx-20'>

                {/* example */}
                {/*<div className="">
        <div class="box">
            <div class="video-container">
                <div class="btn">
                    <svg class="box_btn_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                                <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041    v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909    c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064    c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636    l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945    c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852    c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
                        </svg>
                </div>
            </div>
        </div>
</div>*/}
                {/* dfg */}

                <div className='grid grid-cols-4 gap-8'>
                <div className="">
        <div class="box">
            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg" className="img-video" alt="" />
            
            <div class="video-container">
                <div class="btn">
                    <p className='icon'>hello</p>
                </div>
            </div>
        </div>
</div>
                <div className="">
        <div class="box">
            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg" className="img-video" alt="" />
            
            <div class="video-container">
                <div class="btn">
                    <p className='icon'>hello</p>
                </div>
            </div>
        </div>
</div>
                <div className="">
        <div class="box">
            <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg" className="img-video" alt="" />
            
            <div class="video-container">
                <div class="btn">
                    <p className='icon'>hello</p>
                </div>
            </div>
        </div>
</div>
            {/*<iframe width="270" height="198" src="https://www.youtube.com/embed/RZ_gKp-KHzw" title="হঠাৎ প্রেসার কেনো বেড়ে যায়? | Dr. Nawsabah Noor | LifeSpring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="270" height="198" src="https://www.youtube.com/embed/RZ_gKp-KHzw" title="হঠাৎ প্রেসার কেনো বেড়ে যায়? | Dr. Nawsabah Noor | LifeSpring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
            </div>
            </div>
        </div>
    );
};

export default Video;