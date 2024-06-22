import React from 'react'

function Contactus() {
    return (
        <div>
            <main className='h-screen w-full'>
                <header className='w-[80%] mx-auto text-center text-4xl font-bold my-4 font-sans'>
                    <h1>Feel Free To Contact Us</h1>
                </header>
                <form
                    className='w-[80%] h-[75%] bg-white m-auto rounded-xl text-center pt-[5%]'
                    action="https://formspree.io/f/manwweeq"
                    method='POST'
                >
                    <div className="filds w-[60%] text-center mx-auto">
                        <input
                            className='bg-white w-full rounded-full py-2 text-black ring-1 ring-black pl-2 text-lg'
                            placeholder='Enter Your Name...'
                            name='name'
                            type="text" />
                        <input
                            className='bg-white w-full my-8 rounded-full py-2 text-black ring-1 ring-black pl-2 text-lg'
                            placeholder='Enter Your Email'
                            name='Email'
                            type="email"
                            required
                        />
                        <textarea
                            rows='3'
                            className='bg-white w-full rounded-xl py-2 text-black ring-1 ring-black pl-2 text-lg'
                            placeholder='Enter Your Query'
                            name='Query'
                            type="text"
                            required
                        />
                        <input
                            className='BTN-color px-4 py-1 rounded-xl font-mono font-bold text-white my-1'
                            type="submit"
                            value="Submit" />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Contactus
