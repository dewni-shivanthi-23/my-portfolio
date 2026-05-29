// // import { useState } from "react";
// // import { cn } from "@/lib/utils";
// import {
//   Code,
//   Server,
//   Database,
//   Cloud,
//   Phone,
//   SettingsIcon,
//   Smartphone,
// } from "lucide-react";

// // const skills = [
// //   // Frontend
// //   { name: "HTML/CSS", level: 95, category: "frontend" },
// //   { name: "JavaScript", level: 90, category: "frontend" },
// //   { name: "React", level: 90, category: "frontend" },
// //   { name: "TypeScript", level: 85, category: "frontend" },
// //   { name: "Tailwind CSS", level: 90, category: "frontend" },
// //   { name: "Next.js", level: 80, category: "frontend" },

// //   // Backend
// //   { name: "Node.js", level: 80, category: "backend" },
// //   { name: "Express", level: 75, category: "backend" },
// //   { name: "MongoDB", level: 70, category: "backend" },
// //   { name: "PostgreSQL", level: 65, category: "backend" },
// //   { name: "GraphQL", level: 60, category: "backend" },

// //   // Tools
// //   { name: "Git/GitHub", level: 90, category: "tools" },
// //   { name: "Docker", level: 70, category: "tools" },
// //   { name: "Figma", level: 85, category: "tools" },
// //   { name: "VS Code", level: 95, category: "tools" },
// // ];

// //const categories = ["all", "frontend", "backend", "tools"];

// export const EducationSection = () => {
//   // const [activeCategory, setActiveCategory] = useState("all");

//   // const filteredSkills = skills.filter(
//   //   (skill) => activeCategory === "all" || skill.category === activeCategory,
//   // );

//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       description:
//         "Building responsive and interactive user interfaces with modern frameworks.",
//       skills: ["React", "Vue.js", "Angular", "TypeScript"],
//       icon: <Code size={28} />,
//     },
//     {
//       title: "Backend Development",
//       description: "Creating robust server-side applications and RESTful APIs.",
//       skills: ["Node.js", "Express", "Django", "Laravel"],
//       icon: <Server size={28} />,
//     },
//     {
//       title: "Database Management",
//       description:
//         "Designing and optimizing databases for performance and scalability.",
//       skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
//       icon: <Database size={28} />,
//     },
//     {
//       title: "Mobile Development",
//       description:
//         "Building cross-platform mobile applications with modern tools.",
//       skills: ["React Native", "Flutter", "TypeScript"],
//       icon: <Smartphone size={28} />,
//     },
//     {
//       title: "Cloud & DevOps",
//       description: "Deploying and managing applications in cloud environments.",
//       skills: ["AWS", "Docker", "CI/CD"],
//       icon: <Cloud size={28} />,
//     },
//     {
//       title: "Tools & Technologies",
//       description:
//         "Essential tools and technologies I use in my development workflow.",
//       skills: ["Git", "GitHub", "Figma", "Canva"],
//       icon: <SettingsIcon size={28} />,
//     },
//   ];

//   return (
//     <section id="education" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary",
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div> */}

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg"> {skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>

//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div> */}

//         {/* Subtitle */}
//         <p className="text-gray-400 mb-16">
//           Technologies and tools I use to build scalable and modern applications
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               // className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-left hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
//               className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-left
//               transform transition-all duration-300 ease-in-out
//               hover:-translate-y-2 hover:scale-101
//             hover:border-purple-500/50
//               hover:shadow-2xl hover:shadow-purple-500/20
//               cursor-pointer"
//             >
//               {/* Icon */}
//               <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 mb-4">
//                 {category.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-2">{category.title}</h3>

//               {/* Description */}
//               <p className="text-gray-400 text-sm mb-6">
//                 {category.description}
//               </p>

//               {/* Skill Tags */}
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-sm bg-[#1a1a1a] border border-gray-700 rounded-full text-gray-300"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      year: "2022 - Present",
      title: "BComp (Hons) in Software Engineering",
      place: "University of Sri Jayewardenepura",
      description:
        "Currently pursuing my undergraduate degree in Software Engineering, focusing on web development, AI, and software engineering concepts.",
    },
    {
      year: "2018 - 2020",
      title: "Advanced Level Education",
      place: "Good Shepherd Convent Kandy",
      description:
        "Completed G.C.E Advanced Level studies while building interest in technology and computing.",
    },
  ];

  const experience = [
    {
      year: "2020",
      title: "Diploma in Information Technology (DiTEC)",
      place: "ESOFT Metro Campus",
      description:
        "Completed the Diploma in Information Technology, developing foundational knowledge in programming, software, and IT concepts.",
    },
    {
      year: "2020",
      title: "Diploma in English (DiE)",
      place: "ESOFT Metro Campus",
      description:
        "Successfully completed the Diploma in English, improving communication, writing, and language proficiency skills.",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Educational <span className="text-primary">Qualifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              {/* <GraduationCap className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Education</h3> */}
            </div>

            <div className="relative border-l-2 border-primary/50 ml-3 space-y-10">
              {education.map((item, index) => (
                <div key={index} className="relative pl-10">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  {/* Card */}
                  <div
                    className="bg-card border border-border rounded-2xl p-6 
                    hover:border-primary/50 transition-all duration-300
                    hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-center gap-2 text-primary text-sm mb-3">
                      <Calendar size={16} />
                      {item.year}
                    </div>

                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>

                    <p className="text-primary font-medium text-sm mb-3">
                      {item.place}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              {/* <Briefcase className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Experience</h3> */}
            </div>

            <div className="relative border-l-2 border-primary/50 ml-3 space-y-10">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-10">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  {/* Card */}
                  <div
                    className="bg-card border border-border rounded-2xl p-6 
                    hover:border-primary/50 transition-all duration-300
                    hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-center gap-2 text-primary text-sm mb-3">
                      <Calendar size={16} />
                      {item.year}
                    </div>

                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>

                    <p className="text-primary font-medium text-sm mb-3">
                      {item.place}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
