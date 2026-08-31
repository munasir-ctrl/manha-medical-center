import React from "react";

export default function FAQsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">FAQs</h1>
      <p className="text-sm text-gray-500 mb-6">
        Wellcare Medical Center &gt; FAQS
      </p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why People Choose Us?</h2>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">General Information</h3>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Where is Wellcare Medical Center located?</h4>
            <p>Wellcare Medical Center is located at Commercial Muweilah, Building #6, Ground Floor, Near Med7 Pharmacy, Opposite Nesto Hypermarket, Muweilah – Sharjah, UAE.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">What are the clinic’s hours of operation?</h4>
            <p>Everyday: 09:00 AM – 10:30 PM</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">How can I contact the clinic to make an appointment?</h4>
            <p>You can contact us by calling +971 6 5791444.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Do you accept walk-in patients?</h4>
            <p>Yes, walk-in patients are welcome, though booking an appointment in advance is recommended to minimize wait times.</p>
          </div>
        </section>

        <section className="space-y-4 pt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Appointments and Scheduling</h3>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">How do I book an appointment with a specific doctor?</h4>
            <p>To book an appointment with a specific doctor, please call us directly or visit our website to select the doctor and time that best suits you.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Can I reschedule or cancel my appointment?</h4>
            <p>Yes, you can reschedule or cancel your appointment by contacting the clinic in advance.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Is there a fee for missed appointments?</h4>
            <p>Please contact the clinic directly for details regarding our cancellation and missed appointment policies.</p>
          </div>
        </section>

        <section className="space-y-4 pt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Laboratory and Diagnostic Services</h3>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Does Wellcare Medical Center provide laboratory testing?</h4>
            <p>Yes, we offer a variety of lab tests and diagnostic services to aid in accurate diagnosis and effective treatment.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Do I need an appointment for laboratory tests?</h4>
            <p>You can contact our reception to check if an appointment is required for your specific lab test.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">How do I get my test results?</h4>
            <p>Test results can be collected from the clinic or communicated as per your doctor's instructions.</p>
          </div>
        </section>

        <section className="space-y-4 pt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Emergency and After-Hours Care</h3>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Do you offer emergency services?</h4>
            <p>Yes, our team is trained to handle minor emergencies, and we provide urgent care for non-life-threatening conditions. For serious emergencies, we recommend going to the nearest hospital.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">What should I do if I need urgent care after hours?</h4>
            <p>For urgent care needs outside our operating hours, please visit the nearest hospital emergency department.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Can I contact the doctor for follow-up questions after my visit?</h4>
            <p>Yes, you can call the clinic reception for assistance with doctor follow-ups.</p>
          </div>
        </section>

        <section className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Ask Us if you have any question?</h3>
          <p className="text-sm text-gray-600">
            At Wellcare Medical Center, we are here to assist you with any questions, concerns, or appointment requests. Your health and well-being are our top priorities, and we look forward to providing the care you deserve.
          </p>
        </section>
      </div>
    </main>
  );
}