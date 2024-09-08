import React from 'react';

interface ContactProps {
    id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section className="py-8 bg-black" id={id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Us Box */}
          <div className="bg-black p-6 rounded-lg shadow-lg flex-1 border border-white/[0.2]">
            <h2 className="text-xl text-white font-semibold mb-4">Contact Us</h2>
            <p className="mb-4 text-white">Have questions or feedback? Feel free to reach out to us through the contact form or via email.</p>
            <a
              href=""
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>

          {/* Get Hired Box */}
          <div className="bg-black p-6 rounded-lg shadow-lg flex-1 border border-white/[0.2]">
            <h2 className="text-xl text-white font-semibold mb-4">Get Hired</h2>
            <p className="mb-4 text-white">Looking for an opportunity to join our team? Check out our current job openings and apply today!</p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Get Hired
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
