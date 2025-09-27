import { Fade } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <Fade triggerOnce>
      <footer id="footer" className="px-6 py-10 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm font-sans tracking-tight">
          <Fade direction="up" delay={100} triggerOnce>
            <p className="mb-4 md:mb-0 text-gray-400">
              &copy; 2025 IELTS Institute
            </p>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Terms
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Contact
              </a>
            </div>
          </Fade>
        </div>
      </footer>
    </Fade>
  );
}
