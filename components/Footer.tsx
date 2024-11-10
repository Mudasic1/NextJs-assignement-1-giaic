'use client'

import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8 absolute sm:top-[2780px] xl:w-screen xl:top-[1600px]">
      <div className="container mx-auto px-4">
        {/* Grid layout for small, medium, and large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300">
              <strong>City:</strong> KN Shah <br />
              <strong>Province:</strong> Sindh <br />
              <strong>State:</strong> PK <br />
              <strong>ZIP:</strong> 76260
            </p>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/muhammad-mudasir-chandio-5487b42ba/" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100090880805896" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mudassir.chandio/" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300">Feel free to contact me for any projects or collaborations!</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mudasir C. All rights reserved.</p>
        </div>
        <Link href="href"></Link>
      </div>
    </footer>
  );
}
