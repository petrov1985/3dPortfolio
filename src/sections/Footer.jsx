const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/petrov1985" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
              <img src="/assets/github.svg" alt="github" className="w-3/4 h-3/4 object-contain" />
            </a>
          </div>
          <div className="social-icon flex items-center justify-center w-12 h-12">
            <a href="https://www.linkedin.com/in/petarpetrov-webdev/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
              <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 object-contain" />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Petar Petrov. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  