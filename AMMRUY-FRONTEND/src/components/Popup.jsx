import React from 'react'

function Popup() {
    return (
        <>
            <div className="popup h-screen m-auto bg-black opacity-1 fixed w-full"
            // style={{
            //     opacity: Toggle ? 1 : 0,
            //     visibility: Toggle ? 'visible' : 'hidden'
            // }}
            >
                <main className='w-[80%] bg-white m-auto absolute rounded-xl py-12'>
                    <img
                        className='mx-auto'
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/dealthank_popimage.svg" />
                    <p className='text-gray-950 text-center py-4 capitalize'>
                        Dear Customer Your information is sent to your email address successfully <br />
                        concerned buisness will connect you with the best deals
                    </p>
                </main>
            </div>
        </>
    )
}

export default Popup
