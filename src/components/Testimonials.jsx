import { Fade } from 'react-awesome-reveal';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'priya',
      quote:
        'The speaking practice sessions were game-changing. I felt confident walking into the exam.',
      image: '/assets/a1.webp',
    },
    {
      name: 'emily carter',
      quote:
        'Mock tests helped me manage time and stress. The AI band score was surprisingly accurate.',
      image: '/assets/a2.webp',
    },
    {
      name: '',
      quote:
        'Writing feedback was detailed and actionable. I improved my score in just two weeks.',
      image: '/assets/a3.webp',
    },
  ];

  return (
    <section id="testimonials" className="px-6 py-16 bg-white">
      <h2 className="text-3xl font-serif font-extrabold text-center mb-2 tracking-tight text-blue-600 underline underline-offset-4 decoration-[1px] decoration-blue-600">
        Testimonials
      </h2>
      <div className="w-16 h-[1px] bg-blue-600 mx-auto mb-10 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <Fade key={index} triggerOnce delay={index * 100}>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center h-[280px]">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4 shadow"
              />
              <p className="text-gray-800 font-sans italic mb-3 tracking-tight">
                “{t.quote}”
              </p>
              <span className="text-sm font-semibold text-blue-700">
                — {t.name}
              </span>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
