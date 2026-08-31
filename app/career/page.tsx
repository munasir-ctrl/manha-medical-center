import React from "react";
import Link from "next/link";

export default function CareerPage() {
  const openPositions = [
    {
      title: "General Practitioner (GP)",
      department: "General Medicine",
      type: "Full-time",
      location: "Commercial Muwailah, Sharjah",
      description: "We are looking for a dedicated General Practitioner to provide primary medical care, diagnose illnesses, and manage treatment plans for our patients.",
    },
    {
      title: "Specialist Pediatrician",
      department: "Pediatrics",
      type: "Full-time",
      location: "Commercial Muwailah, Sharjah",
      description: "Seeking an experienced Pediatrician to offer compassionate healthcare services for infants, children, and adolescents.",
    },
    {
      title: "Licensed Dental Nurse / Assistant",
      department: "Dental Care",
      type: "Full-time",
      location: "Commercial Muwailah, Sharjah",
      description: "Looking for a certified dental assistant to support our dental surgeons, maintain hygiene standards, and assist patients during procedures.",
    },
    {
      title: "Front Desk Receptionist / Patient Relations",
      department: "Administration",
      type: "Full-time",
      location: "Commercial Muwailah, Sharjah",
      description: "Friendly and organized communicator needed to manage patient check-ins, appointment bookings, and inquiries with a welcoming attitude.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-wider text-sky-100 mb-2">
            Manha Medical Center &gt; Careers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Healthcare Family
          </h1>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto">
            Build a rewarding career with a compassionate multidisciplinary team dedicated to delivering world-class medical care in Sharjah.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl mt-12">
        {/* Why Join Us */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Manha Medical Center, every team member plays a vital role in ensuring our patients receive respectful, top-tier medical attention. We foster a collaborative, professional, and supportive work environment that encourages growth and excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
              <h3 className="font-semibold text-blue-900 mb-1">Growth & Learning</h3>
              <p className="text-sm text-gray-600">Opportunities for professional development and continuous medical education.</p>
            </div>
            <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
              <h3 className="font-semibold text-blue-900 mb-1">Patient-First Culture</h3>
              <p className="text-sm text-gray-600">Work alongside passionate specialists committed to clinical excellence.</p>
            </div>
            <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
              <h3 className="font-semibold text-blue-900 mb-1">Prime Location</h3>
              <p className="text-sm text-gray-600">Based in vibrant Commercial Muwailah, Sharjah with easy accessibility.</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Openings</h2>
          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{job.location}</p>
                  <p className="text-sm text-gray-700 max-w-xl">{job.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Callout */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Don't see your role listed?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm">
            We are always looking for exceptional medical professionals, nurses, and administrative staff. Send your CV and cover letter directly to our HR team.
          </p>
          <a
            href="mailto:info@manhamc.ae"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-gray-100 transition-colors"
          >
            Submit Your CV
          </a>
        </div>
      </div>
    </main>
  );
}