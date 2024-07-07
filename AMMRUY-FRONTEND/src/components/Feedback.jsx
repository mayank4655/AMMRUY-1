import React from 'react'

function Feedback() {
    return (
        <main className='h-[100vh] w-min-h-screen mx-4 flex flex-col justify-center items-center'>
            <div className="header flex flex-col justify-center items-center">
                <h1 className='text-3xl mx-auto md:text-5xl font-bold '>Submit Your Feedback...!!</h1>
                <p className='md:text-2xl mt-8  mb-8 text-xl'>Your comments are important for us and are crucial in helping us provide the best service</p>
            </div>
            <form 
            action='https://formspree.io/f/manwweeq'
            method='POST'
            className="w-[90vw] bg-slate-300 h-[60vh] rounded-3xl flex flex-col justify-center items-center">
                <div className='w-56 md:w-96 items-center grid place-items-center'>
                    <input
                        className='outline-none w-full bg-slate-300 border-b-[1px] p-1 text-gray-950 text-xl border-black mx-auto'
                        placeholder='Full Name'
                        name='Name'
                        type="text" />
                    <input
                        className='outline-none w-full bg-slate-300 border-b-[1px] p-1 text-gray-950 text-xl border-black mx-auto'
                        placeholder='Email Address'
                        type="email"
                        name='email'
                        id='email' 
                    />
                    <textarea
                        name="text"
                        id="feedback"
                        placeholder='Type Your Feedback'
                        rows="2"
                        className='outline-none w-full bg-slate-300 border-b-[1px] p-1 text-gray-950 text-xl border-black mx-auto'
                    >
                    </textarea>
                    <button className='my-4 login-bg w-36 py-1 rounded-full text-white roboto-thin'>Send</button>
                </div>
            </form>
        </main>
    )
}

export default Feedback
