import React, {useState, useRef, useCallback} from 'react'
import { Button, Typography } from "@material-tailwind/react";


export function Contact() {
    const fullnameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);
    const messageRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const formHandler = useCallback(() => (e) => {
        e.preventDefault();
        const scriptUrl = "https://script.google.com/macros/s/AKfycbwyuT4YyigEgr13qp-z5cUAyr_MGoUjWrd0AX7P_UH_7cJR6JMTvQOoGW2cUJsIKG3hGQ/exec"
    
        setLoading(true)

        let formdata = new FormData();
        formdata.append("fullname", fullnameRef.current.value);
        formdata.append("email", emailRef.current.value);
        formdata.append("mobile", mobileRef.current.value);
        formdata.append("message", messageRef.current.value);

        console.log("--------- SUMITTING FORM ----------\n", formdata.get('fullname'));

        fetch(
            scriptUrl, {
                method: 'POST',
                mode: 'no-cors', 
                headers: new Headers(
                    {
                        "Content-Type": "application/json",
                        "Accept":"application/json"
                    }
                ),
                body: formdata}
            ).then(res => {
                console.log("FORM SUCCESSFULLY SUBMITTED")
                setLoading(false)
            }).catch(err => console.log("!!!!!! ERROR !!!!!!\n", err))
    },[]);
   

    return (
        <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="absolute inset-0 bg-black bg-blend-darken">
            <iframe title="map" width="100%" height="100%" allowtransparency="true"  scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865386147!2d77.4908554159126!3d12.953959988596583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676494350293!5m2!1sen!2sin"></iframe>
            {/* <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865386147!2d77.4908554159126!3d12.953959988596583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676494350293!5m2!1sen!2sin" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe> */}
        </div>
        <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-2/5 md:w-1/2 bg-gray-900 bg-opacity-95 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <Typography variant="h1" className="mb-1 font-medium title-font mb-3 bg-gradient-to-r from-blue-200 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text">Want to work with us?</Typography>
                <p className="leading-relaxed mb-5">Complete this form and we will get back to you in 24 hours.</p>
    
                <form className="mt-4" onSubmit={formHandler()}>
                    <div className="relative mb-4">
                        {/* <label for="fullname" className="leading-7 text-sm text-gray-400">Full Name</label> */}
                        <input placeholder="Full name" ref={fullnameRef} type="text" id="fullname" name="fullname" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        {/* <label for="email" className="leading-7 text-sm text-gray-400">Email</label> */}
                        <input placeholder="Email" ref={emailRef} type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        {/* <label for="mobile" className="leading-7 text-sm text-gray-400">Mobile Number</label> */}
                        <input placeholder="Mobile Number" ref={mobileRef} type="number" id="mobile" name="mobile" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        {/* <label for="message" className="leading-7 text-sm text-gray-400">Message</label> */}
                        <textarea placeholder="Message" ref={messageRef} type="text" id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                    </div>
                    <Button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{loading ? "Sending..." : "SEND MESSAGE"}</Button>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Contact;