const Footer = () => {
  return (
    <footer className="border-t border-[#1C1C24] bg-gamesNeutral py-10 mt-12 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand */}
        <div className="text-gamesPrimary font-bold font-heading text-xl">
          The Arena
        </div>
        
        {/* Center: Links */}
        <div className="flex items-center gap-8 text-[15px] text-gray-500 font-sans">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        
        {/* Right Side: Copyright */}
        <div className="text-[14px] text-gray-500 font-sans">
          © 2026 The Arena. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
