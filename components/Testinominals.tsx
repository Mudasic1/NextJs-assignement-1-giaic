'use client'

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-950 py-12 absolute xl:top-[1286px] sm:top-[2150px] xl:w-screen" id="Testinominals">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">What Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              &quot;Mudasir&apos;s work exceeded my expectations! The project was delivered on time and with great attention to detail.&quot;
            </p>
            <div className="text-right">
              <span className="font-bold text-gray-900">— John Doe, CEO of ABC Corp</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              &quot;Professional, fast, and efficient. Mudasir is a talented developer who knows how to deliver high-quality results.&quot;
            </p>
            <div className="text-right">
              <span className="font-bold text-gray-900">— Jane Smith, Founder of XYZ Solutions</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              &quot;Working with Mudasir was a pleasure. His communication skills and technical expertise made everything smooth.&quot;
            </p>
            <div className="text-right">
              <span className="font-bold text-gray-900">— Alex Johnson, CTO of Tech Start</span>
            </div>
          </div>

          {/* Add more testimonials if needed */}
        </div>
      </div>
    </section>
  );
}
