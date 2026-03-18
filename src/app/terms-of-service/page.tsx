import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Atlas Plumbing Group LLC',
  description: 'Terms of Service for Atlas Plumbing Group LLC — terms governing use of our services and website.',
}

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-extrabold text-[#0D1929] mb-3">Terms of Service</h1>
            <p className="text-gray-500 text-sm">Effective Date: {effectiveDate}</p>
            <div className="mt-4 h-1 w-16 bg-brand-500 rounded-full" />
          </div>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">1. Agreement to Terms</h2>
              <p>
                By using the Atlas Plumbing Group LLC website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These Terms constitute a legally binding agreement between you and Atlas Plumbing Group LLC.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">2. Services Provided</h2>
              <p>Atlas Plumbing Group LLC provides residential and commercial services including, but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
                <li>Emergency plumbing, drain cleaning, and pipe repair</li>
                <li>Water heater installation and replacement (tank &amp; tankless)</li>
                <li>Sewer line inspection, repair, and replacement</li>
                <li>Leak detection and repair</li>
                <li>Heating system installation, repair, and maintenance (furnaces, boilers, heat pumps)</li>
                <li>Cooling system installation, repair, and maintenance (central AC, ductless mini-splits)</li>
                <li>Commercial plumbing and HVAC services</li>
              </ul>
              <p className="mt-3">
                All services are performed by licensed and insured technicians in accordance with applicable New Jersey state and local codes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">3. Service Area</h2>
              <p>
                We primarily serve residential and commercial customers throughout South Jersey and the greater Philadelphia metropolitan area. Service availability outside our standard coverage area is subject to scheduling and travel fees, which will be disclosed before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">4. Estimates &amp; Pricing</h2>
              <p>
                Free estimates are provided for most jobs prior to work commencing. All pricing will be provided in writing before work begins. Actual costs may vary from the estimate if unforeseen conditions are discovered during the job. Any changes to scope that affect pricing will be communicated to and approved by the customer before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">5. Financing Terms</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-4 mb-4">
                <p className="font-bold text-green-800 mb-1">0% APR Financing</p>
                <p className="text-green-700 text-sm">
                  Atlas Plumbing Group LLC offers 0% APR promotional financing on qualifying services, including water heater installation and sewer line replacement. Financing is subject to credit approval through our third-party financing partner.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Financing offers are subject to change without notice.</li>
                <li>Approval is based on creditworthiness as determined by our financing partner.</li>
                <li>Promotional 0% APR rate applies for the promotional period. Standard rates apply thereafter if balance is not paid in full.</li>
                <li>Atlas Plumbing Group LLC is not responsible for financing decisions made by third-party lenders.</li>
                <li>Minimum purchase amounts may apply.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">6. Payment</h2>
              <p>
                Payment is due upon completion of services unless a financing arrangement has been established prior to work. We accept cash, check, and major credit cards. Invoices not paid within 30 days of the due date may be subject to a late fee of 1.5% per month.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">7. Warranties</h2>
              <p>
                Atlas Plumbing Group LLC warrants labor performed against defects in workmanship for a period of one (1) year from the date of service completion. Manufacturer warranties apply separately to parts and equipment installed. Warranty claims must be submitted in writing within the warranty period.
              </p>
              <p className="mt-3">
                Warranties are void if damage results from misuse, abuse, negligence, unauthorized modifications, or acts of nature after the service date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">8. Scheduling &amp; Cancellations</h2>
              <p>
                We will make every effort to honor scheduled appointment times. We request at least 24 hours notice for appointment cancellations. Failure to provide notice or to be present at the scheduled service address may result in a trip charge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">9. Access to Property</h2>
              <p>
                By scheduling service, you represent that you have the authority to grant access to the property for service purposes. You agree to provide safe and reasonable access to work areas. Atlas Plumbing Group LLC is not liable for delays caused by restricted access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Atlas Plumbing Group LLC&apos;s total liability for any claims arising out of or related to our services shall not exceed the total amount paid by the customer for the specific service giving rise to the claim. We are not liable for indirect, incidental, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">11. Website Use</h2>
              <p>
                The content on this website is provided for informational purposes only. All content is the property of Atlas Plumbing Group LLC and may not be reproduced without written permission. We reserve the right to modify or discontinue the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">12. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the State of New Jersey, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Gloucester County, New Jersey.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">13. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Updated terms will be posted on this page with a new effective date. Continued use of our services constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D1929] mb-3">14. Contact Us</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
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
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
