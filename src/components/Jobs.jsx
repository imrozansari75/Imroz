
const Jobs = () => {

  const jobExperiences = [
  {
    id: 1,
    title: "Lead Chess Instructor",
    company: "Elia Sarwat High School",
    duration: "Jul 2025 – Mar 2026",
    responsibilities: [
      "Mentored school students in chess, helping improve strategic thinking, focus, and decision-making skills.",
      "Designed training sessions and organized in-school and inter-school chess tournaments.",
      "Coordinated with school staff to manage programs and ensure smooth execution."
    ]
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Codermates Technologies",
    duration: "Sep 2025 – Dec 2025",
    responsibilities: [
      "Built responsive frontend interfaces using React.js and Tailwind CSS for client projects.",
      "Created dynamic website sections using structured JSON data for scalable content rendering.",
      "Worked on UI/UX enhancements to improve usability and cross-device consistency."
    ]
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "GOALKEEP",
    duration: "Sep 2025 – Jan 2026",
    responsibilities: [
      "Developed and customized websites using WordPress and Wix based on client requirements.",
      "Configured themes, layouts, plugins, and content structure for improved functionality.",
      "Ensured responsive performance and smooth user experience across devices."
    ]
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "AppX Studio",
    duration: "Dec 2024 – Jan 2025",
    responsibilities: [
      "Built reusable React components from Figma designs with clean, maintainable code.",
      "Improved component scalability using modular architecture and Tailwind CSS best practices.",
      "Collaborated remotely while consistently meeting deadlines."
    ]
  },
  {
    id: 5,
    title: "Frontend Developer Intern",
    company: "Fukui Accent Pvt. Ltd.",
    duration: "Jul 2024 – Sep 2024",
    responsibilities: [
      "Developed responsive web interfaces using React.js, JavaScript, and Tailwind CSS.",
      "Converted Figma designs into interactive, production-ready frontend experiences.",
      "Improved UI consistency with reusable components and optimized layouts."
    ]
  },
  {
    id: 6,
    title: "Data Cleaning Intern",
    company: "GOALKEEP",
    duration: "Apr 2024 – May 2024",
    responsibilities: [
      "Cleaned and validated 13,000+ rows of business data using Google Sheets.",
      "Identified inconsistencies and improved dataset accuracy through structured validation.",
      "Maintained high-quality reporting through repeated verification checks."
    ]
  }
];

  return (
    <section
      id="jobs"
      className="flex flex-col py-2 px-0 md:px-4 text-white max-w-6xl mx-auto">
      <div className="sm:mt-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:px-0">My Job</h2>

        {/* Outer container */}
        <div className="bg-black/40 px-6 py-6 md:px-8 rounded-3xl shadow-lg space-y-8">
          {jobExperiences.map((job) => (
            <div key={job.id}>
              {/* Title and Duration */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-xl font-bold">
                  {job.title}{' '}
                  <span className="font-medium text-sm text-gray-300">
                    | {job.company}
                  </span>
                </h3>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {job.duration}
                </p>
              </div>

              {/* Responsibilities List */}
              <ul className="list-disc ml-5 space-y-2 text-base">
                {job.responsibilities.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
