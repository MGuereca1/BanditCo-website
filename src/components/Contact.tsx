import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

  // emal.js template
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = (formData.get('user_name') as string || '').trim();
    const phone = (formData.get('phone_number') as string || '').trim();

    // Guard: Name must be at least 2 characters and contain only letters, spaces, hyphens, or apostrophes
    const nameRegex = /^[A-Za-z\s'-]{2,}$/;
    if (!nameRegex.test(name)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Name',
        text: 'Please enter a valid full name using only letters.',
      });
      return;
    }
    // Guard: Phone number must not contain letters and must have between 7 and 15 digits
    // Allows optional symbols like +, -, (, ), and spaces
    const phoneRegex = /^[0-9+\s()-]+$/;
    const digitsOnly = phone.replace(/\D/g, '');

    if (!phoneRegex.test(phone) || digitsOnly.length < 7 || digitsOnly.length > 15) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number with no letters (7 to 15 digits).',
      });
      return;
    }
      

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY,
          
        }
      )

      .then(
        () => {
          Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            })
            form.current?.reset()
          console.log('SUCCESS!');
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          })
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    // modify so color is glass gradient black/grey
    <div>
    <section id="contact" className="bg-[#171717] text-black py-16 border-t border-[#b89d76]">
      <div className="container mx-auto px-4 max-w-xl">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl text-[#b89d76] md:text-3xl font-bold mb-3 tracking-tight">
            Need a Quote?
          </h1>
          <h3 className="text-lg md:text-xl text-white">
            Contact us below
          </h3>
        </div>

        {/* Form Container */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-white">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="px-4 py-3 rounded-lg bg-white border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-white">Email Address</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-white">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              required
              pattern="[0-9+\s()-]{7,}"
              title='Please enter numbers and valid phone symbols only (e.g. 123-456-7890)'
              placeholder="123-456-7890"
              className="px-4 py-3 rounded-lg bg-white border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-white">Your Message</label>
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows={5}
              className="px-4 py-3 rounded-lg bg-white border border-neutral-700/60 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="px-8 py-2 rounded-lg bg-[#b89d76] text-black font-semibold tracking-wide hover:bg-[#947c5d] active:bg-[#6e5a41] transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
</div>
  )
}

export default Contact