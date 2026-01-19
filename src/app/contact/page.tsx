'use client';

import { useActionState, useEffect, useState } from 'react';
import { addMessage, type FormState } from '@/app/actions';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    addMessage,
    null
  );

  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-hide success message after 4 seconds
  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />

        <div className="border border-white rounded p-6 mb-6">
          <h1 className="text-2xl mb-4 text-green-300">$ ./contact.sh</h1>
          <p className="text-green-400">Establishing secure connection...</p>
          <p className="text-green-400 mb-4">Connection established. Ready to transmit.</p>
        </div>

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ cat ~/.contact_info</h2>
          <div className="space-y-2 text-green-400">
            <p><span className="text-green-300">$ echo $EMAIL</span> wallscreet@proton.me</p>
            <p><span className="text-green-300">$ echo $LOCATION</span> Remote, USA</p>
          </div>
        </div>

        <div className="border border-white rounded p-6 mb-6">
          <h2 className="text-xl mb-4 text-green-300">$ ./send_message.sh</h2>

          {/* Success message (temporary) */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-950/50 border border-green-500 rounded text-green-300 text-center animate-fade-in-out">
              {state?.message}
            </div>
          )}

          {/* Error message (persistent until next submit) */}
          {state?.success === false && (
            <div className="mb-6 p-4 bg-red-950/50 border border-red-500 rounded text-red-300 text-center">
              {state.message}
            </div>
          )}

          <form action={formAction} className="space-y-4">
            <div>
              <label className="block text-green-300 mb-2">$ echo "Enter your name:"</label>
              <input
                type="text"
                name="name"
                required
                disabled={pending}
                className="w-full bg-black border border-green-500 rounded p-3 text-green-500 font-mono disabled:opacity-50"
                placeholder="wallscreet"
              />
            </div>

            <div>
              <label className="block text-green-300 mb-2">$ echo "Enter your email:"</label>
              <input
                type="email"
                name="email"
                required
                disabled={pending}
                className="w-full bg-black border border-green-500 rounded p-3 text-green-500 font-mono disabled:opacity-50"
                placeholder="user@example.com"
              />
            </div>

            <div>
              <label className="block text-green-300 mb-2">$ echo "Enter your message:"</label>
              <textarea
                name="message"
                rows={6}
                required
                disabled={pending}
                className="w-full bg-black border border-green-500 rounded p-3 text-green-500 font-mono resize-none disabled:opacity-50"
                placeholder="Hello! I wanted to reach out about..."
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className={`border rounded px-6 py-3 font-mono transition-colors ${
                pending
                  ? "border-gray-600 text-gray-600 cursor-not-allowed"
                  : "border-blue-500 text-blue-500 hover:bg-green-950"
              }`}
            >
              {pending ? "$ transmitting..." : "$ ./transmit"}
            </button>
          </form>
        </div>

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

