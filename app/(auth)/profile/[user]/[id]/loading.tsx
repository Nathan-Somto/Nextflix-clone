import React from 'react';
function loading(){
    let empty = new Array(6).fill('');
    return(
        <div className="flex flex-col justify-center items-center min-h-screen space-y-4 relative">
            <div className="absolute  top-0 text-left right-0 py-2 px-3 animate-pulse bg-mid-gray h-[4.5px] w-[120px] pr-4"></div>
            <div className="py-2 px-3 w-[200px] h-[5.5px] mx-auto bg-mid-gray animate-pulse mb-6"></div>
            <div className="flex space-x-4 flex-wrap my-3 items-center justify-center w-[80%] mx-auto px-3">
            {empty.map((item, index)=> <div key={index}  className='h-[200px] relative w-[200px] flex flex-col space-y-3 mb-3 items-center  text-center'>
                    <div className="w-[150px] h-[150px] rounded-md bg-mid-gray animate-pulse"></div>
                    <div className="w-[50px] h-[30px] bg-mid-gray animate-pulse"></div>
            </div>)}
            </div>
        </div>
    )
}
export default loading;