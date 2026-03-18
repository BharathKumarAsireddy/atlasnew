import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Atlas Plumbing Group LLC',
  description: 'Privacy Policy for Atlas Plumbing Group LLC — how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  const effectiveDate = 'March 1, 2026'

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Page header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Legal
            </div>
            <h1 className="text-4xl font-extrabold text-[#0D1929] mb-3">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Effective Date: {effectiveDate}</p>
            <div className="mt-4 h-1 w-16 bg-brand-500 rounded-full" />
          </div>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">1. Who We Are</h2>
              <p>
                Atlas Plumbing Group LLC (&quot;Atlas Plumbing,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides residential and commercial plumbing, heating, and cooling services in New Jersey. Our principal place of business is:
              </p>
              <address className="not-italic mt-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm">
                Atlas Plumbing Group LLC<br />
                125 Patriots Ridge Drive<br />
                Deptford, New Jersey 08096<br />
                Phone: <a href="tel:+18569042097" className="text-brand-500 hover:underline">(856) 904-2097</a><br />
                Email: <a href="mailto:info@atlasplumbing.com" className="text-brand-500 hover:underline">info@atlasplumbing.com</a>
              </address>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of personal information when you use our website or contact us for services:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
                <li><strong>Contact Information:</strong> Name, phone number, email address, and service address.</li>
                <li><strong>Service Information:</strong> Details about your plumbing, heating, or cooling issue or project.</li>
                <li><strong>Financial Information:</strong> If you apply for financing, we collect information necessary to process your financing application through our third-party financing partner.</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and other standard web analytics data collected automatically when you visit our website.</li>
                <li><strong>Communications:</strong> Records of phone calls, emails, text messages, or form submissions when you contact us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
                <li>Provide, schedule, and complete plumbing, heating, and cooling services.</li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Process financing applications and communicate with our financing partners.</li>
                <li>Send appointment reminders, service follow-ups, and promotional offers (you may opt out at any time).</li>
                <li>Improve our website and services through analytics.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">4. Financing &amp; Third-Party Partners</h2>
              <p>
                We offer 0% APR financing on qualifying services such as water heater installation and sewer line replacement. Financing applications are processed by third-party financing providers. When you apply for financing, your information will be shared with our financing partner(s) subject to their privacy policies. We do not store your full financial or credit information on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">5. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
                <li><strong>Service Providers:</strong> Third parties who help us operate our business (e.g., scheduling software, email providers, financing partners).</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">6. Cookies &amp; Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to improve user experience and gather analytics data. You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">7. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your information, subject to legal obligations.</li>
                <li>Opt out of marketing communications at any time.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at <a href="mailto:info@atlasplumbing.com" className="text-brand-500 hover:underline">info@atlasplumbing.com</a> or call <a href="tel:+18569042097" className="text-brand-500 hover:underline">(856) 904-2097</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new effective date. Continued use of our website or services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <address className="not-italic mt-3 bg-brand-50 border border-brand-100 rounded-xl px-5 py-4 text-sm">
                <strong>Atlas Plumbing Group LLC</strong><br />
                125 Patriots Ridge Drive, Deptford, NJ 08096<br />
                <a href="tel:+18569042097" className="text-brand-500 hover:underline">(856) 904-2097</a> &nbsp;|&nbsp;
                <a href="mailto:info@atlasplumbing.com" className="text-brand-500 hover:underline">info@atlasplumbing.com</a>
              </address>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4 text-sm">
            <Link href="/" className="text-brand-500 hover:text-brand-600 font-semibold transition-colors">
              ← Back to Home
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
