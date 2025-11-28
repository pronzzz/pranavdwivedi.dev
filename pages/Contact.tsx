import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in touch</h2>
            <p className="mt-4 text-lg text-slate-400 mb-8">
              I am actively seeking entry-level roles in IT support, cloud, or data in Australia. 
              Feel free to reach out for opportunities or collaborations.
            </p>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg">
                        <Mail className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-indigo-400 transition-colors">
                            {PERSONAL_INFO.email}
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg">
                        <Phone className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="text-white">{PERSONAL_INFO.phone}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Location</p>
                        <p className="text-white">{PERSONAL_INFO.location}</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-slate-400 mt-2">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="mt-2 block w-full rounded-md border-0 bg-slate-900/50 py-2.5 px-3.5 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="mt-2 block w-full rounded-md border-0 bg-slate-900/50 py-2.5 px-3.5 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="mt-2 block w-full rounded-md border-0 bg-slate-900/50 py-2.5 px-3.5 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors gap-2 items-center"
                    >
                        <Send className="h-4 w-4" /> Send Message
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;