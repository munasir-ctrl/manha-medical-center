import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">
        Wellcare Medical Center &gt; Terms and Conditions
      </p>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by Manha Medical Center, you agree to comply with these terms and conditions. If you do not agree, please refrain from using our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
          <p>
            Manha Medical Center offers a range of healthcare services, including but not limited to primary care, specialized treatments, diagnostic services, etc.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Patient Responsibilities</h2>
          <p>
            Patients are required to provide accurate and complete information regarding their medical history and current health status. It is also the patient’s responsibility to follow treatment plans and attend scheduled appointments.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Financial Policies</h2>
          <p>
            Patients are responsible for understanding their insurance coverage and any associated costs. Payment for services may be required at the time of service, unless otherwise arranged.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Privacy and Confidentiality</h2>
          <p>
            We are committed to protecting your privacy. Patient information will be handled in accordance with applicable laws and regulations. Manha Medical Center will not disclose personal health information without consent, except as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Appointment Cancellation and No-Show Policy</h2>
          <div className="space-y-3">
            <p>
              We strive to provide excellent medical care to you and to all of our patients. Consistent with this, we have developed appointment no-shows, late arrivals and cancellations policies that allow us to better schedule appointments for all patients.
            </p>
            <p>
              Once you have booked your appointment, as a courtesy, we will attempt to provide an appointment reminder (via call or sms or both) at least one day before to confirm your appointment. If your appointment falls on a day following a holiday, the reminder will be made on the preceding business day that we are open.
            </p>
            <p>
              In the event we are unsuccessful in contacting you for the reminder and/or your appointment is not confirmed 12 hours before the scheduled time, Manha Medical Center reserves the right to cancel the appointment and assign it to another patient.
            </p>
            <p>
              To ensure proper time allocation and high-quality care, you are requested to arrive at least 15 minutes earlier than your scheduled appointment time. Late arrival may result in a shortened or a cancelled appointment.
            </p>
            <p>
              If cancellation is necessary, please call as soon as possible at least one day in advance so another patient can access that appointment time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <p>
            The use of the Website or any of the Services or products available thereon is at your own risk, and unless otherwise stated in these Terms and Conditions, you assume full responsibility and risk of loss resulting from your use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Changes to Terms and Conditions</h2>
          <p>
            We reserve the right to modify these terms and conditions at any time. Changes will be posted on our website and will become effective immediately. Continued use of our services constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p>
            These terms and conditions shall be governed by and construed in accordance with the laws of the Emirate of Sharjah, United Arab Emirates. Any disputes arising from these terms will be handled in exclusive jurisdiction of the Sharjah courts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Information</h2>
          <p>
            For questions or concerns regarding these terms and conditions, please contact us at +971 6 5791444.
          </p>
        </section>
      </div>
    </main>
  );
}