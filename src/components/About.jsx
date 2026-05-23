import Coding from "../assets/Programmer.png"
import resume from '../assets/resume.pdf';

const About = () => {
  return (

    <section id="about" className="flex flex-col py-2 px-0 md:px-4 max-w-6xl mx-auto">
      <div className="sm:mt-4">
      <div className="about-gradient flex flex-col md:flex-row items-center justify-between text-white rounded-2xl px-6 py-4 md:px-4 sm:max-w-6xl mx-auto shadow-lg">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Imroz Ansari</h2>
          <p className="leading-relaxed mb-3">
         I’m a tech enthusiast with experience across web development and data-focused problem solving. From building responsive React applications and integrating APIs to cleaning, validating, and analyzing datasets using SQL, Python, and Excel, I enjoy solving real-world problems through technology. I’m currently seeking opportunities in software development, frontend/web development, or data-related roles such as data analysis.
          </p>
          <button
            className="text-white font-semibold px-4 py-2 rounded-full transition duration-300"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <a href={resume} download>
              Download Resume
            </a>
          </button>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <img src={Coding} alt="Developer at desk" className="w-60 max-w-full" />
        </div>
      </div>
      </div>
    </section>

  )
}

export default About