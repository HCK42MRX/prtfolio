import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import RetroButton from '../components/RetroButton';


const ContactMe = () => {

    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID; 
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {publicKey: PUBLIC_KEY,
    }).then(() => {
        setStatus('success');
        e.target.reset();
    },(error) =>{
        console.log('FAILED...', error.text);
        setStatus('error');   
    },
);
    };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl text-yellow-400 border-b-2 border-gray-600 pb-2 mb-6 animate-pulse">
        Contact_Me.exe
      </h2>
      
      <p className="mb-4 text-gray-400">
        Interested in hiring me? Send a message below.
      </p>

      {/* FORM AREA */}
      <div className="bg-gray-800 border-2 border-blue-500 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,200,0.5)]">
        
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            
            {/* Input Name */}
            <div>
                <label className="block text-green-400 mb-1">{'>'} SENDER_NAME:</label>
                <input 
                    type="text" 
                    name="from_name" // Harus sama dengan variabel di template EmailJS
                    required
                    className="w-full bg-black border border-gray-500 text-white p-2 focus:outline-none focus:border-yellow-400 font-mono"
                    placeholder="Enter your name..."
                />
            </div>

            {/* Input Email (Untuk balasan) */}
            <div>
                <label className="block text-green-400 mb-1">{'>'} SENDER_EMAIL:</label>
                <input 
                    type="email" 
                    name="reply_to" // Harus sama dengan variabel di template EmailJS
                    required
                    className="w-full bg-black border border-gray-500 text-white p-2 focus:outline-none focus:border-yellow-400 font-mono"
                    placeholder="name@company.com"
                />
            </div>

            {/* Input Message */}
            <div>
                <label className="block text-green-400 mb-1">{'>'} TRANSMISSION_DATA:</label>
                <textarea 
                    name="message" // Harus sama dengan variabel di template EmailJS
                    required
                    className="w-full bg-black border border-gray-500 text-white p-2 focus:outline-none focus:border-yellow-400 font-mono h-32"
                    placeholder="Type your message here..."
                />
            </div>
            
            {/* Status Messages */}
            {status === 'sending' && <p className="text-yellow-400 animate-pulse">UPLOADING DATA...</p>}
            {status === 'success' && <p className="text-green-400 bg-green-900/20 p-2 border border-green-500">SUCCESS: Email sent to server!</p>}
            {status === 'error' && <p className="text-red-500 bg-red-900/20 p-2 border border-red-500">ERROR: Connection failed. <br /><span className='email font-serif text-white'>Don't worry, <br/>
              you can still email me directly at: muhammadbagasairlangga@gmail.com</span>
            </p>}

            <div className="flex justify-end mt-2">
                <RetroButton type="submit">SEND_EMAIL</RetroButton>
            </div>
        </form>

      </div>
      
      <div className="mt-8 text-center text-xs text-gray-600">
        SECURE CONNECTION ESTABLISHED v.1.0
      </div>
    </div>
  );
};
export default ContactMe;