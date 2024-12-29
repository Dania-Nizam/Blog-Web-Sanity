"use client"

import React, { useState } from 'react';

type Comment = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<Comment>({
    name: '',
    email: '',
    message: '',
  });

  const [comments, setComments] = useState<Comment[]>([]);
  const [thankYouMessage, setThankYouMessage] = useState<string>(''); // State for thank-you message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setComments([...comments, formData]);
      setFormData({ name: '', email: '', message: '' });
      setThankYouMessage('Thank you for your comment! Your comment has been submitted.');
    } else {
      setThankYouMessage('Please fill out all fields.');
    }

    // Clear the thank-you message after 3 seconds
    setTimeout(() => setThankYouMessage(''), 3000);
  };

  return (
    <div className="relative py-20">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg bg-transparent backdrop-blur-md rounded-lg px-6 sm:px-8 lg:px-12 py-8"
        >
          <div className="w-full">
            <h2 className="text-4xl hover:text-zinc-700 font-bold mb-6 text-balance text-center uppercase">
              Leave a Comment
            </h2>
            <p className="text-lg text-balance mb-8 text-center">
              Share your thoughts or feedback with us!
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4  mb-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3  text-gray-700 placeholder-gray-400 bg-transparent backdrop-blur-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-label="Your Name"
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent backdrop-blur-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-label="Your Email"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mb-6 w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent backdrop-blur-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              aria-label="Your Message"
            />

            <button
              type="submit"
              className="px-10 py-3 text-lg font-semibold text-balance border dark:text-white bg-transparent backdrop-blur-md hover:bg-gray-400 rounded-lg uppercase tracking-wide block mx-auto transition-all duration-150 ease-in-out"
            >
              Submit
            </button>

            {thankYouMessage && (
              <p className="text-center text-green-600 mt-4">{thankYouMessage}</p>
            )}
          </div>
        </form>

        <div className="mt-10">
          <h3 className="text-3xl  hover:text-slate-500  font-bold mb-4 text-balance text-center uppercase">
            Comments
          </h3>
          {comments.length === 0 ? (
            <p className="text-center text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            <ul className="space-y-6">
              {comments.map((comment, index) => (
                <li key={index} className=" bg-gray-100 dark:bg-black p-4 rounded shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {comment.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{comment.email}</p>
                  <p className="text-gray-700 mt-2">{comment.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

