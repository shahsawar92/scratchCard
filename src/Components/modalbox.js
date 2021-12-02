import React, { useEffect, useState } from "react";

// import MyScratch from "./MyScratch";
import ScratchMe from "react-scratch-me";
import gray from '../images/gray.jpeg';
import newImages from '../images'
console.log("images here",newImages.length);
export default function Modal({showModal, setShowModal}) {
  const [number, setNumber] = React.useState(0);
  const [runeffect ,setruneffect]=useState(false)
  useEffect(()=>{
   
     setNumber(Math.floor(Math.random() * newImages.length))
      
    

    // clean up interval on unmount
    
  },[runeffect]); 
 
    const newImage =newImages[number];
     const [completed, setcompleted]=useState(false);
     console.log("random no:",number);
    // const download = (e) => {
    //     var element = document.createElement("a");
    //     var file = new Blob(
    //       [
    //        newImage
    //       ],
    //       { type: "image/*" }
    //     );
    //     element.href = URL.createObjectURL(file);
    //     element.download = "download.jpeg"
    //     element.click();
    //   };
    const download = (e) => {

        fetch(newImage, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.jpeg"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

  return (
    <>
   
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start bg-blue-800 text-white justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Scratch Your Gift
                  </h3>
                  <button
                    className="p-1 ml-auto  text-white opacity-100 float-right text-3xl  font-semibold "
                    onClick={() =>{ setShowModal(false)
                       setruneffect(!runeffect)
                    setcompleted(false)}
                    }
                  >
                    <span className=" text-white  h-6 w-6 text-2xl block opacity-100">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-yellow-300">
                {/* <CanvasComponent /> */}
                {/* <ScratchCard {...settings}>
    Congratulations! You WON!
  </ScratchCard>; */}
  
                    <ScratchMe
                        width={400}
                        height={300}
                        foregroundImageSrc={gray}
                        backgroundImageSrc={newImage}
                        strokeWidth={30}
                        onProgress={percent => console.log(`${percent}% cleared`)}
                        onCompleted={() => {
                            setcompleted(true);
                        }}
                        completedAt={20}
                            />
                </div>
                {/*footer*/}
                <div className="flex bg-blue-800 text-white  items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-black bg-red-600 mr-2 rounded py-2 shadow-lg active:bg-emerald-600 font-bold uppercase text-sm px-12  "
                    type="button"
                    onClick={() => { setShowModal(false)
                      setruneffect(!runeffect)
                        setcompleted(false)}}
                  >
                    Close
                  </button>
                  <button disabled={!completed}
                    className={ !completed?"hidden ":"bg-emerald-500 text-black bg-green-500 rounded py-2 shadow-lg active:bg-emerald-600 font-bold uppercase text-sm px-8 "}
                    type="button"
                    onClick={(e) => download() }
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}