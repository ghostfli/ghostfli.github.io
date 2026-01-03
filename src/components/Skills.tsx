export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'RESTful APIs', 'GraphQL', 'PostgreSQL'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
    },
    {
      category: 'Soft Skills',
      skills: ['Agile/Scrum', 'Team Collaboration', 'Problem Solving', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-center mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-md hover:border-blue-500/50 transition-all">
              <h3 className="text-white mb-4 text-center">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}