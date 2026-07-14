import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-3xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 md:w-72">
              {/* Image Container */}
              <div className="w-full rounded-2xl p-2 bg-gradient-to-br from-primary/30 to-primary/10 shadow-2xl overflow-hidden">
                <img
                  src="projects/profile2.jpeg"
                  alt="Profile"
                  className="w-full h-auto object-cover object-top rounded-2xl"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl blur-3xl bg-primary/20 -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              {/* Passionate Full Stack Developer & AI Enthusiast */}
              Full Stack Developer | AI & DevOps Enthusiast
            </h3>

            <p className="text-gray-400 text-muted-foreground">
              {/* I am a Software Engineering undergraduate passionate about
              building modern, scalable web applications using the MERN stack
              and Firebase. */}
              Software Engineering undergraduate focused on building scalable,
              high-performance web applications using the MERN stack, Firebase,
              and modern cloud technologies.
            </p>

            <p className="text-gray-400 text-muted-foreground">
              {/* I enjoy transforming ideas into real-world projects with clean UI,
              efficient backend systems, and smooth user experiences. */}
              I specialize in developing clean, responsive UIs with efficient
              backend systems, ensuring smooth and reliable user experiences.
            </p>

            <p className="text-gray-400 text-muted-foreground">
              {/* I am constantly learning new technologies to improve my
              problem-solving and software development skills. */}
              Currently expanding into AI, Machine Learning, and DevOps, with
              interest in building and deploying production-ready cloud systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button text-sm">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Dewni_Andradi_CV.pdf"
                download="Dewni_Andradi_CV.pdf"
                className="text-sm px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
