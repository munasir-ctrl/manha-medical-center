import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Wellcare Medical Center &gt; Privacy Policy
      </p>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Manha Medical Center is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information in compliance with applicable laws, including the UAE Federal Law No. 45 of 2021 on the Protection of Personal Data.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Personal Identification Information:</strong> Name, date of birth, gender, contact details, and emergency contact information.</li>
            <li><strong>Health Information:</strong> Medical history, current health conditions, treatments, prescriptions, and test results.</li>
            <li><strong>Financial Information:</strong> Insurance details, billing information, and payment history.</li>
            <li><strong>Demographic Information:</strong> Age, ethnicity, and other relevant data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide medical services and treatment.</li>
            <li>To communicate with you regarding appointments, test results, and follow-up care.</li>
            <li>To process billing and insurance claims.</li>
            <li>To comply with legal and regulatory requirements.</li>
            <li>To improve our services and enhance patient experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Disclosure of Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Healthcare Providers:</strong> Other medical professionals involved in your care.</li>
            <li><strong>Insurance Companies:</strong> To process claims and verify coverage.</li>
            <li><strong>Regulatory Authorities:</strong> As required by law for compliance and reporting purposes.</li>
            <li><strong>Third-Party Service Providers:</strong> Who assist us in operating our services (e.g., billing, IT support) under strict confidentiality agreements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our staff is trained on data protection practices, and we regularly review our security measures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Access your personal information and request corrections.</li>
            <li>Withdraw consent for the use of your personal information where applicable.</li>
            <li>Request deletion of your personal information, subject to legal and regulatory obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance user experience. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date. Your continued use of our services after any changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <div className="mt-2 not-italic">
            <p className="font-semibold">Manha Medical Center</p>
            <p>Commerical Muwailah, Building #6, Ground Floor, near Med7 Pharmacy, Opposite Nesto Hypermarket, Sharjah</p>
            <p>Phone: +971 6 5791444</p>
            <p>Email: info@manhamc.ae</p>
          </div>
        </section>
      </div>
    </main>
  );
}