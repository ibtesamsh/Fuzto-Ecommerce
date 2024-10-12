import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex flex-col">
              <h1 className="text-xl font-bold">Fuzto</h1>
              <p className="text-gray-700 text-sm mt-2">
                "Discover your style at Fuzto, where every shirt tells a story"
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Products
              </a>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-2 hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="mx-2 hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="mx-2 hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="mx-2 hover:text-gray-400">
              LinkedIn
            </a>
          </div>
          <div className="text-center mt-4 text-sm">
            &copy; {new Date().getFullYear()} Fuzto. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
