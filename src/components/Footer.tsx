// ✏️ EDIT: Replace name, phone, email, and social handle below
const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="font-body text-xs text-muted-foreground">
          {/* ✏️ EDIT: Replace "Your Name" */}
          © {new Date().getFullYear()} Bhavya Dixit. All rights reserved.
        </p>

        <div className="flex items-center gap-8 flex-wrap justify-center">
          <div className="text-center">
            <p className="font-label text-xs tracking-wider text-foreground mb-1">Call</p>
            {/* ✏️ EDIT: Replace phone number */}
            <p className="font-body text-xs text-muted-foreground">+91 8218973640</p>
          </div>
          <div className="text-center">
            <p className="font-label text-xs tracking-wider text-foreground mb-1">Write</p>
            {/* ✏️ EDIT: Replace email */}
            <p className="font-body text-xs text-muted-foreground">bhavyadixit.iitr@gmail.com</p>
          </div>
          <div className="text-center">
            <p className="font-label text-xs tracking-wider text-foreground mb-1">Follow</p>
            {/* ✏️ EDIT: Replace social handle */}
            <p className="font-body text-xs text-muted-foreground">www.linkedin.com/in/bhavyadixit/</p>
          </div>
        </div>

        <nav className="flex gap-6 flex-wrap justify-center">
          {["#about-me", "#projects", "#skills", "#resume", "#awards", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="font-label text-[10px] tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {href.replace("#", "").replace("-", " ").toUpperCase()}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
