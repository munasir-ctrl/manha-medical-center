import React from "react";

export default function InsurancePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Insurance Partners & Coverage</h1>
      <p className="text-sm text-gray-500 mb-6">
        Wellcare Medical Center &gt; Insurance
      </p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At Manha Medical Center (Wellcare Medical Center), we strive to make quality healthcare accessible and affordable. We work with a wide range of leading insurance providers to ensure seamless billing and coverage for our patients.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Accepted Insurance Networks</h2>
          <p>
            Please check with our reception or your insurance provider to confirm your specific network tier and policy coverage prior to your visit. Our team is always ready to assist you with direct billing inquiries and pre-authorizations.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Third-Party Administrators (TPAs):</strong> We accept major regional and international TPAs.</li>
            <li><strong>Corporate Plans:</strong> Special corporate health packages and direct billing arrangements are available.</li>
            <li><strong>Direct Billing:</strong> Available for eligible policies subject to prior approval from your insurance provider.</li>
          </ul>
        </section>

        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold text-gray-800">What to Bring for Insurance Claims</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>A valid Emirates ID or Passport copy.</li>
            <li>Your physical or digital health insurance card.</li>
            <li>A prescription or referral letter from your doctor (if required by your policy).</li>
          </ul>
        </section>

        <section className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Have Questions About Your Coverage?</h3>
          <p className="text-sm text-gray-600">
            Our insurance desk team is happy to help you verify your coverage details. Contact us directly at +971 6 5791444 or email us for assistance.
          </p>
        </section>
      </div>
    </main>
  );
}