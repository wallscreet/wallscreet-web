'use client';

import { useState } from 'react';

import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 15000);
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        <div className="border border-white rounded p-6 mb-6">
          <h1 className="text-2xl mb-4 text-green-300">$ ./contact.sh</h1>
          <p className="text-green-400">Establishing secure connection...</p>
          <p className="tet-green-400 mb-4">Connection established. Ready to transmit.</p>
        </div>

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ cat ~/.contact_info</h2>
          <div className="space-y-2 text-green-400">
            <p><span className="text-green-300">$ echo $EMAIL</span> wallscreet@proton.me</p>
            {/* <p><span className="text-green-300">$ echo $GITHUB</span> github.com/wallscreet</p>
            <p><span className="text-green-300">$ echo $X</span> @wallscreet</p> */}
            <p><span className="text-green-300">$ echo $LOCATION</span> Remote, USA</p>
          </div>
        </div>

        {submitted ? (
          <div className="border border-white rounded p-6 mb-6">
            <h2 className="text-xl mb-4 text-green-400">$ ./transmission_complete.sh</h2>
            {/* <p className="text-green-400">Message received successfully.</p> */}
            <p className="text-[#FF6600]">This is a recorded announcement, as I’m afraid we’re all out at the moment.</p>
            {/* <p className="text-green-400">Response initiated. Expect reply within 24-48 hours.</p> */}
            <p className="text-[#FF6600]">The commercial council of Magrathea thanks you for your esteemed visit but regrets that this entire function is temporarily closed for business. Thank you. If you would care to leave your name and the address of a planet where you can be contacted, kindly send an email to the address provided from your own email platform.</p>
          </div>
        ) : (
          <div className="border border-white rounded p-6 mb-6">
            <h2 className="text-xl mb-4 text-green-300">$ ./send_message.sh</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-green-300 mb-2">$ echo "Enter your name:"</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-500 rounded p-3 text-green-500 font-mono focus:outline-none focus:border-green-300"
                  placeholder="wallscreet"
                />
              </div>

              <div>
                <label className="block text-green-300 mb-2">$ echo "Enter your email:"</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-500 rounded p-3 text-green-500 font-mono focus:outline-none focus:border-green-300"
                  placeholder="user@example.com"
                />
              </div>

              <div>
                <label className="block text-green-300 mb-2">$ echo "Enter your message:"</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black border border-green-500 rounded p-3 text-green-500 font-mono focus:outline-none focus:border-green-300 resize-none"
                  placeholder="Hello! I wanted to reach out about..."
                />
              </div>

              <button
                type="submit"
                className="border border-blue-500 text-blue-500 rounded px-6 py-3 hover:bg-green-950 transition-colors font-mono"
              >
                $ ./transmit
              </button>
            </form>
          </div>
        )}

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ cat ~/preferred.txt</h2>
          <p className="text-green-400 mb-2">Preferred topics:</p>
          <ul className="ml-4 text-green-400 space-y-1">
            <li>• Data Analysis Projects</li>
            <li>• Web development Projects</li>
            <li>• Custom AI Context Pipelines</li>
            <li>• AI Systems Integrations</li>
            <li>• Open source collaborations</li>
          </ul>
        </div>

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ ./social_links.sh</h2>
          <div className="space-y-2">
            <p>
              <span className="text-green-300">$ curl </span>
              <a href="https://github.com/wallscreet" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-green-300">
                Github
              </a>
            </p>
            <p>
              <span className="text-green-300">$ curl </span>
              <a href="https://x.com/wallscreet" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-green-300">
                X.com
              </a>
            </p>

          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="inline-block border border-blue-500 text-blue-500 rounded px-6 py-3 hover:bg-green-950 transition-colors">
            $ cd /home
          </a>
        </div>
      </div>
    </div>
  );
}

