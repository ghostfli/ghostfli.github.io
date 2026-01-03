import { Code2, Lightbulb, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Problem Solver',
      description: 'Tackling complex challenges with creative solutions',
    },
    {
      icon: <Users size={32} />,
      title: 'Team Player',
      description: 'Collaborating effectively in agile environments',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2NzQ3MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="rounded-lg shadow-lg shadow-blue-500/20 w-full h-auto border border-gray-800"
            />
          </div>

          <div>
            <p className="text-gray-300 mb-6">
              I'm a passionate software engineer with a strong foundation in full-stack
              development. My journey in tech began with a curiosity about how things work,
              which evolved into a career building innovative solutions.
            </p>
            <p className="text-gray-300 mb-6">
              With experience in modern web technologies and a keen eye for detail, I
              specialize in creating scalable applications that deliver exceptional user
              experiences. I'm constantly learning and staying up-to-date with the latest
              industry trends.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me contributing to open-source projects,
              attending tech meetups, or exploring new technologies and frameworks.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="text-blue-400 flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}