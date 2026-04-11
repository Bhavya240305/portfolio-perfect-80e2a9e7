import { Mail, Linkedin, Phone } from "lucide-react";
// ✏️ EDIT: Replace the import below with your actual profile photo
// Option 1: Put your photo in src/assets/ and import it like this:
// import profilePhoto from "@/assets/your-photo.jpg";
// Option 2: Use a URL string directly in the src attribute below
import profilePhoto from "@/assets/with background_copy.png";

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
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                    width={512}
                    height={512}
                  />
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground text-center leading-tight">
                  Bhavya<br />Dixit
                </h2>

                <div className="w-10 h-0.5 bg-primary my-4" />

                <p className="font-label text-xs tracking-[0.3em] text-muted-foreground text-center">
                  Product and Data Enthusiast
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href="mailto:bhavyadixit.iitr@gmail.com"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavyadixit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a
                  href="tel:+918218973640"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Call"
                >
                  <Phone size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 max-w-md lg:max-w-lg animate-fade-in">
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
                Hi,
              </h1>
              <p className="font-body text-lg text-foreground mb-8">
              Building data-informed products that solve real problems and create meaningful impact.
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
                I&apos;m Bhavya Dixit, an undergraduate at IIT Roorkee with a strong interest in product management, data
                analytics, and business strategy. I enjoy understanding user needs, analyzing data to uncover insights,
                and translating them into scalable, user-centric product solutions.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Through my work across domains like education, e-commerce, and travel, I&apos;ve developed a product
                mindset—focusing on solving real problems, improving user experiences, and driving meaningful impact.
                I&apos;m particularly interested in building data-informed products at the intersection of product,
                analytics, and strategy.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
