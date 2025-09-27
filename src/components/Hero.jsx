import { Fade } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse lg:flex-row items-center px-6 xl:px-40 py-32 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen"
    >
      <Fade direction="left" triggerOnce>
        <div className="order-2 lg:order-none flex flex-col justify-center w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Achieve Your Dream <span className="text-blue-600">IELTS</span>{' '}
            Score
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl font-sans text-gray-700 mb-8 tracking-tight">
            Join expert-led courses and AI-powered practice tools designed to
            help you reach your goals.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </Fade>
      <Fade direction="right" triggerOnce>
        <div className="flex justify-center items-center w-full">
          <img
            src="/assets/hero.webp"
            alt="IELTS preparation"
            className="w-full max-w-[900px] h-auto object-cover rounded-xl shadow-xl"
          />
        </div>
      </Fade>
    </section>
  );
}
