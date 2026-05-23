export default function Education() {

  const education = [
    {
      institution: "Nagindas Khandwala College",
      degree: "B.Sc. in Information Technology",
      result: "CGPA: 8.86",
    },
    {
      institution: "Ismail Yusuf Junior College",
      degree: "HSC - Science",
      result: "Percentage: 70%",
    },
  ];

  return (
    <section
      id="education"
      className="flex flex-col py-2 px-0 md:px-4 text-white max-w-6xl mx-auto">
      <div className="sm:mt-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:px-0">Education</h2>

        {/* Outer container */}
        <div className="bg-black/40 px-6 py-6 md:px-8 rounded-3xl shadow-lg space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{edu.institution}</h3>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-sm">{edu.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
