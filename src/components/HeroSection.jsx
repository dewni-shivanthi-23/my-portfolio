// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Dewni
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Andradi
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             Software Engineering undergraduate focused on full-stack development
//             (MERN, Firebase) with growing interest in Machine Learning, AI, and
//             MLOps systems, building scalable and intelligent web applications.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const roles = [
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "Software Engineer",
    "DevOps Learner",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // typing
        setText(currentRole.substring(0, text.length + 1));
        setSpeed(120);

        if (text === currentRole) {
          setIsDeleting(true);
          setSpeed(1000); // pause before deleting
        }
      } else {
        // deleting
        setText(currentRole.substring(0, text.length - 1));
        setSpeed(60);

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4">
      <div className="container max-w-7xl mx-auto z-10">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left space-y-6 pt-14 md:pl-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hello, I'm </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Dewni
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Andradi
              </span>
            </h1>

            {/* <p className="text-lg md:text-xl font-medium text-primary h-8">
              {text}
              <span className="animate-pulse">|</span>
            </p> */}

            <p className="text-2xl md:text-3xl font-bold tracking-tight min-h-[3rem] flex items-center justify-center md:justify-start flex-wrap">
              <span className="mr-2">And I'm a</span>
              <span className="text-primary text-gradient ml-2">
                {text}
                <span className="text-primary animate-pulse">|</span>
              </span>
            </p>

            <p className="text-gray-400 text-base md:text-base text-muted-foreground opacity-0 animate-fade-in-delay-3">
              {/* I build scalable and responsive web applications with a strong
              focus on clean architecture and user experience. Currently
              exploring Machine Learning, AI, and MLOps to develop intelligent
              and data-driven systems. */}
              Software Engineering undergraduate passionate about building
              scalable full-stack applications and solving real-world problems
              through technology. Currently exploring AI, Machine Learning, and
              DevOps to develop intelligent and production-ready systems.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button text-sm">
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-2 shadow-2xl"> */}
              <div className="w-72 h-72 md:w-87 md:h-87 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-2 shadow-2xl">
                <img
                  src="projects/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Optional glow effect */}
              <div className="absolute inset-0 rounded-2xl blur-2xl bg-primary/20 -z-10"></div>
            </div>
          </div>
          {/* RIGHT IMAGE */}
          {/* <div className="flex justify-center md:justify-end">
            <div className="relative flex items-center justify-center">
              {/* Glow Ring */}
          {/* <div className="absolute w-10 h-10 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse blur-xl opacity-60"></div> */}

          {/* Outer Ring */}
          {/* <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> */}
          {/* Image */}
          {/* <img
                  src="projects/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-black"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
