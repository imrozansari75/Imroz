import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import python from '../assets/python.png';
import django from '../assets/django.png';

const techStack = [
  { id: 1, icon: html, name: "HTML", width: 50, height: 50 },
  { id: 2, icon: css, name: "CSS", width: 50, height: 50 },
  { id: 3, icon: js, name: "JavaScript", width: 50, height: 50 },
  { id: 4, icon: typescript, name: "TypeScript", width: 50, height: 50 },
  { id: 5, icon: react, name: "React", width: 50, height: 50 },
  { id: 6, icon: git, name: "Git", width: 50, height: 50 },
  { id: 7, icon: github, name: "GitHub", width: 50, height: 50 },
  { id: 8, icon: python, name: "Python", width: 50, height: 50 },
  { id: 9, icon: django, name: "Django", width: 100, height: 100 },
];



const Skills = () => {
  return (
    <section id="skills" classNameName='py-4 md:px-8'>
      <div className="text-white rounded-3xl px-0 pt-2 sm:pt-6 md:px-2 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">My Skill</h2>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
          {techStack.map((item) => (
            <li
              key={item.id}
              className="w-20 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black/40 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.icon}
                alt={item.name}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="mb-2"
              />
              <span className="text-sm text-white text-center">{item.name}</span>
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
};

export default Skills;
