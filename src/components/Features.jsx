import { Zoom } from 'react-awesome-reveal';

export default function Features() {
  const features = [
    {
      title: 'Speaking Practice',
      description: 'Interactive speaking sessions with feedback.',
      image: '/assets/speaking.webp',
    },
    {
      title: 'Mock Tests',
      description: 'Timed mock exams with scoring.',
      image: '/assets/Mock.webp',
    },
    {
      title: 'AI Band Score',
      description: 'Instant band prediction using AI.',
      image: '/assets/Ai.webp',
    },
    {
      title: 'Writing Review',
      description: 'Detailed writing feedback from experts.',
      image: '/assets/Reviews.webp',
    },
  ];

  return (
    <section id="features" className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-serif font-extrabold text-center mb-2 tracking-tight text-blue-600 underline underline-offset-4 decoration-[1px] decoration-blue-600">
        Our Features
      </h2>
      <div className="w-16 h-[1px] bg-blue-600 mx-auto mb-10 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Zoom key={index} triggerOnce>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center text-center h-[360px]">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
              />
              <h3 className="text-xl font-sans font-semibold mb-2 text-gray-800 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-sans tracking-tight">
                {feature.description}
              </p>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
}
