import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="about-me" className="min-h-screen pt-16 relative">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Left - Tan background */}
        <div className="lg:w-[40%] bg-secondary min-h-[300px] lg:min-h-full" />

        {/* Right - White background */}
        <div className="lg:w-[60%] bg-background" />

        {/* Profile Card - overlapping both sides */}
        <div className="absolute inset-0 pt-16 flex items-center justify-center lg:justify-start pointer-events-none">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-0 w-full max-w-5xl mx-auto pointer-events-auto">
            {/* Profile Card */}
            <div className="flex flex-col items-center lg:ml-[10%]">
              <div className="bg-background shadow-lg px-12 py-10 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-background shadow-md">
                  <img
                    src={profilePhoto}
                    alt="Maya Nelson"
                    className="w-full h-full object-cover"
                    width={512}
                    height={512}
                  />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground text-center leading-tight">
                  Maya<br />Nelson
                </h2>
                <div className="w-10 h-0.5 bg-primary my-4" />
                <p className="font-label text-xs tracking-[0.3em] text-muted-foreground text-center">
                  PROJECT MANAGER
                </p>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-4 mt-6">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                    aria-label="Social link"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Hello content */}
            <div className="flex-1 max-w-md lg:max-w-lg animate-fade-in">
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
                Hello
              </h1>
              <p className="font-body text-lg text-foreground mb-8">
                Here's who I am & what I do
              </p>

              <div className="flex gap-4 mb-10">
                <a
                  href="#resume"
                  className="px-8 py-3 bg-primary text-primary-foreground font-label text-xs tracking-wider hover:opacity-90 transition-opacity"
                >
                  RESUME
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-foreground text-foreground font-label text-xs tracking-wider hover:bg-foreground hover:text-background transition-colors"
                >
                  PROJECTS
                </a>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                I'm a great place for you to tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
