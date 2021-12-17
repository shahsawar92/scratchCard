import React from 'react'
import ModalBox from './modalbox'
import covered from './covered.jpg'
import './styles.css'
import image1 from '../images/11.png'
import image2 from '../images/12.png'
import image3 from '../images/13.png'
import image4 from '../images/14.png'
import image5 from '../images/15.png'
import image6 from '../images/16.png'


export default function Images() {
    const [showModal, setShowModal] = React.useState(false);
    return ( <>

        <div className="overflow-x-hidden " >
        <ModalBox  showModal={showModal} setShowModal={setShowModal}/>

        <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div  onClick={()=>{setShowModal(true)}} class="flex justify-center text-6xl border-2 border-gray-500 rounded-xl p-4 bg-gray-500 
            "><img src={image1} className="h-full " /></div>
            <div onClick={()=>{setShowModal(true)}} class="flex justify-center text-6xl border-2 border-gray-500 rounded-xl p-4 bg-gray-500"><img src={image2} className="h-full " /></div>
            <div onClick={()=>{setShowModal(true)}} class="flex justify-center text-6xl border-2 border-gray-500 rounded-xl p-4 bg-gray-500"><img src={image3} className="h-full " /></div>
            <div onClick={()=>{setShowModal(true)}} class="flex justify-center text-6xl border-2 border-gray-500 rounded-xl p-4 bg-gray-500"><img src={image4} className="h-full " />  </div>
            <div onClick={()=>{setShowModal(true)}} class="flex justify-center text-6xl border-2 border-gray-500 rounded-xl p-4 bg-gray-500"><img src={image5} className="h-full " /></div>
            <div onClick={()=>{setShowModal(true)}} class="flex justify-center text-6xl border-2 border-gray-500 rounded-xl p-4 bg-gray-500"><img src={image6} className="h-full " /></div>
           
        </div>
</div>

      
        </div>
        </>
    )
}
