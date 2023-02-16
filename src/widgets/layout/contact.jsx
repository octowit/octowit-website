import { Button, Input, Textarea, Typography } from "@material-tailwind/react";


export function Contact() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font relative">
    <div className="absolute inset-0 bg-black bg-blend-darken">
        <iframe title="map" width="100%" height="100%" allowtransparency="true" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865386147!2d77.4908554159126!3d12.953959988596583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676494350293!5m2!1sen!2sin"></iframe>
        {/* <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865386147!2d77.4908554159126!3d12.953959988596583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676494350293!5m2!1sen!2sin" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe> */}
    </div>
    <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-2/5 md:w-1/2 bg-gray-900 bg-opacity-95 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <Typography variant="h1" className="mb-1 font-medium title-font mb-3 bg-gradient-to-r from-blue-200 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text">Want to work with us?</Typography>
            <p class="leading-relaxed mb-5">Complete this form and we will get back to you in 24 hours.</p>
            <div class="relative mb-4">
                <label for="fullname" class="leading-7 text-sm text-gray-400">Full Name</label>
                <Input type="fullname" id="fullname" name="fullname" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></Input>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                <Input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></Input>
            </div>
            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                <Textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></Textarea>
            </div>
            <Button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</Button>
        </div>
    </div>
    </section>
)}

export default Contact;