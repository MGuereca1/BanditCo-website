import { useEffect } from "react"

const Privacy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#171717] text-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg text-white max-w-none">
          <p className="mb-4">
            <strong className="text-white">Last updated:</strong> 09/13/2026
          </p>
          
          <p className="mb-6">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the personal information you provide when you contact us through this website.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h2>
              <p className="mb-3">
                When you use our contact form, we may collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-white">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Any other information you choose to include in your message</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information you provide to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3 text-white">
                <li>Respond to your inquiries</li>
                <li>Communicate with you about your request</li>
              </ul>
              <p className="font-medium">
                We do <strong className="text-white">not</strong> sell or rent your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">3. Third-Party Services</h2>
              <p>
                We use <strong className="text-white">EmailJS</strong> to process and deliver form submissions. By submitting the form, your information may be transferred to and stored by EmailJS according to their Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">4. Data Security</h2>
              <p>
                We take reasonable steps to protect your information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">5. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to request access, correction, or deletion of your personal data. To exercise these rights, please contact us at rrconstruction.solutions1@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                📧 anthony@thebanditco.info
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <a 
              href="/" 
              className="inline-flex items-center px-4 py-2 rounded font-medium bg-[#b89d76] text-[#171717] hover:brightness-110 transition duration-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy