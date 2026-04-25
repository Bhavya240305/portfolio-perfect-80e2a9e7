import { Mail, Phone } from "lucide-react";

// ✏️ EDIT: Replace with your actual contact details
const CONTACT_INFO = {
  email: "bhavyadixit.iitr@gmail.com",
  phone: "+91 8218973640"
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Contact</h2>
          <div className="w-12 h-0.5 bg-primary mt-6" />
        </div>

        <div>

          {/* Contact Info */}
          <div className="space-y-8">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {/* ✏️ EDIT: Change this intro text */}
              Open to opportunities, collaborations, and product discussions — let’s connect and build something impactful.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-label text-[10px] tracking-wider text-muted-foreground mb-0.5">EMAIL</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-body text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-label text-[10px] tracking-wider text-muted-foreground mb-0.5">PHONE</p>
                  <p className="font-body text-sm text-foreground">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
