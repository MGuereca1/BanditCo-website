import { useEffect } from "react"

const Terms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#171717] text-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-white">Terms of Services</h1>
        <div className="prose prose-invert prose-lg text-white max-w-none">
          <p className="mb-4">
            <strong className="text-white">Last updated:</strong> 09/13/2025
          </p>
          
          <p className="mb-6">
            By using this website, you agree to the following terms:
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">1. Use of This Website</h2>
              <p>
                You agree to use this website only for lawful purposes and not to submit any harmful, offensive, or spam content through our contact form.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">2. Availability Disclaimer</h2>
              <p>
                While we do our best to keep this website and contact form running smoothly, we cannot guarantee that it will always be available, error-free, or completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">3. Limitation of Liability</h2>
              <p>
                We are not responsible for any damages that may occur from using this website or from any issues with email delivery via third-party services like EmailJS.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">4. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service at any time. Continued use of this site after changes means you accept the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">5. Contact Us</h2>
              <p>
                For questions about these terms, please contact us at:
                <br />
                📧 anthony@thebanditco.info
              </p>
            </div>
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
  )
}

export default Terms