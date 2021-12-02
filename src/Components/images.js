import React from 'react'
import ModalBox from './modalbox'
import covered from './covered.jpg'

export default function Images() {
    const [showModal, setShowModal] = React.useState(false);
    return ( <>
        <div className="overflow-x-hidden" >
        <ModalBox  showModal={showModal} setShowModal={setShowModal}/>
        <div class="grid  md:grid-flow-col overflow-x-hidden  place-items-center  bg-blue-300 my-5 px-4  ">
            <div onClick={()=>{setShowModal(true)}}  class="items-center shadow-lg   container relative h-80 w-96 md:h-60 md:w-60 lg:h-80 lg:w-96  ">
                <img src={covered} className="h-full " />
            </div>
            <div onClick={()=>{setShowModal(true)}}  class="  items-center  container relative h-80 w-96 md:h-60 md:w-60 lg:h-80 lg:w-96  ">
                <img src={covered} className="h-full " />
            </div>
            <div onClick={()=>{setShowModal(true)}}  class="  items-center  container relative  md:h-60 md:w-60 lg:h-80 lg:w-96
            h-80 w-96  ">
                <img src={covered} className="h-full " />
            </div>
            
            
            </div>
            <div class="grid  md:grid-flow-col overflow-x-hidden  place-items-center  bg-blue-300	  px-4  ">
            <div onClick={()=>{setShowModal(true)}}  class="  items-center  container relative h-80 w-96 md:h-60 md:w-60 lg:h-80 lg:w-96  ">
                <img src={covered} className="h-full w-" />
            </div>
            <div onClick={()=>{setShowModal(true)}}  class="  items-center  container relative h-80 w-96 md:h-60 md:w-60 lg:h-80 lg:w-96  ">
                <img src={covered} className="h-full w-" />
            </div>
            <div onClick={()=>{setShowModal(true)}}  class="  items-center  container relative  md:h-60 md:w-60 lg:h-80 lg:w-96
            h-80 w-96  ">
                <img src={covered} className="h-full " />
            </div>
            
            
            </div>
        </div>
        </>
    )
}
