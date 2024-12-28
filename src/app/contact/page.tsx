import React from 'react';

const Contact = () => {
  return (
    <div className="   supports-[backdrop-filter]:bg-background/60 py-20">
      <div className="max-w-3xl mx-auto">
        <form className="  shadow-lg  supports-[backdrop-filter]:bg-background/60  rounded-lg px-6 sm:px-8 lg:px-12 py-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-6 text-balance   text-center uppercase">
              Reach Us
            </h2>
            <p className="text-lg text-balance mb-8 text-center">
              Have questions or need assistance? Send us a message, and we’ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col  lg:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400  supports-[backdrop-filter]:bg-background/60   border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-label="Your Name"
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400  supports-[backdrop-filter]:bg-background/60 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-label="Your Email"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Message"
              name="message"
              className="mb-6 w-full px-4 py-3 text-gray-700 placeholder-gray-400  supports-[backdrop-filter]:bg-background/60 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              aria-label="Your Message"
            />

            <button className="px-10 py-3 text-lg font-semibold text-balance border dark:text-white  supports-[backdrop-filter]:bg-background/60 hover:bg-gray-400 rounded-lg uppercase tracking-wide block mx-auto transition-all duration-150 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
