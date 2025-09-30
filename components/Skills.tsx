const skills = [
  { name: 'Java / Spring Boot', level: 80 },
  { name: 'Angular', level: 75 },
  { name: 'Node.js / Spring Boot', level: 80 },
  { name: 'Bases de datos (PostgreSQL, MongoDB)', level: 75 },
  { name: 'Automatización y digitalización', level: 80 },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Mis Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="font-medium text-gray-700">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="skill-gradient h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;