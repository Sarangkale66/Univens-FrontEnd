import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f1a] text-white font-sans">
      {/* Section Above Footer */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Solve Your Business Challenges?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
          Contact us today to start crafting your solutions. Whether you need a
          quick fix or a comprehensive solution, we’ve got you covered and
          customized.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
        <span className="inline-flex items-center space-x-2">
  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
    ✔
  </span>
  <span>Customized design</span>
</span>

<span className="inline-flex items-center space-x-2">
    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
      ✔
    </span>
    <span>Ongoing support</span>
  </span>

  <span className="inline-flex items-center space-x-2">
    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
      ✔
    </span>
    <span>Fast delivery</span>
  </span>

        </div>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500"
        >
          Schedule Your Free Consultation
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d1f] w-full py-8 px-4 flex items-end">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Univens</h3>
            <p className="text-sm mb-6">
              Univens is here to help you grow your business with fast &
              reliable solutions. Let us take care of the details, so you can
              focus on what matters.
            </p>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
            >
              Contact Us →
            </a>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
            <p className="italic mb-4">
              "Univens: Where Hustlers Turn Ideas into Reality."
            </p>
            <div className="flex justify-center space-x-4">
            <div className="flex space-x-4">
  {/* LinkedIn */}
  <a
    href="#"
    className="text-gray-400 hover:text-white transform hover:scale-125 transition-transform duration-300"
     aria-label="LinkedIn"
  >
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.243c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.243h-3v-4.5c0-1.08-.882-1.96-1.96-1.96h-.08c-1.08 0-1.96.88-1.96 1.96v4.5h-3v-9h3v1.36c.88-.88 2.16-1.36 3.36-1.36h.08c2.42 0 4.4 1.98 4.4 4.4v4.6z" />
    </svg>
  </a>

  {/* Twitter */}
  <a
    href="#"
    className="text-gray-400 hover:text-white transform hover:scale-125 transition-transform duration-300"
    aria-label="Twitter"
  >
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .385.043.76.126 1.122-4.087-.205-7.713-2.165-10.141-5.144-.424.729-.666 1.575-.666 2.476 0 1.71.87 3.213 2.191 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.381 3.946 4.833-.413.112-.849.172-1.296.172-.317 0-.626-.031-.927-.089.626 1.956 2.444 3.379 4.599 3.419-1.683 1.319-3.808 2.105-6.102 2.105-.395 0-.786-.023-1.17-.067 2.179 1.397 4.768 2.211 7.548 2.211 9.142 0 14.307-7.721 14.307-14.42 0-.22-.005-.437-.015-.653.982-.713 1.834-1.604 2.507-2.621z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="#"
    className="text-gray-400 hover:text-white transform hover:scale-125 transition-transform duration-300"
    aria-label="Instagram"
  >
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.328 3.608 1.304.975.975 1.242 2.243 1.304 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.328 2.633-1.304 3.608-.975.975-2.243 1.242-3.608 1.304-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.328-3.608-1.304-.975-.975-1.242-2.243-1.304-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.328-2.633 1.304-3.608.975-.975 2.243-1.242 3.608-1.304 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.329.062-2.646.358-3.677 1.39-1.032 1.032-1.328 2.348-1.39 3.677-.059 1.281-.072 1.691-.072 4.947s.013 3.667.072 4.947c.062 1.329.358 2.646 1.39 3.677 1.032 1.032 2.348 1.328 3.677 1.39 1.281.059 1.691.072 4.947.072s3.667-.013 4.947-.072c1.329-.062 2.646-.358 3.677-1.39 1.032-1.032 1.328-2.348 1.39-3.677.059-1.281.072-1.691.072-4.947s-.013-3.667-.072-4.947c-.062-1.329-.358-2.646-1.39-3.677-1.032-1.032-2.348-1.328-3.677-1.39-1.281-.059-1.691-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.298 0-4.162-1.864-4.162-4.162s1.864-4.162 4.162-4.162 4.162 1.864 4.162 4.162-1.864 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
    </svg>
  </a>
</div>

            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
