import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// ✏️ EDIT: Replace with your actual contact details
const CONTACT_INFO = {
  email: "bhavyadixit.iitr@gmail.com",
  phone: "+91 8218973640",
  location: "Kota, Rajasthan, India",
};

// ------------------------------------------------------------------
// HOW TO MAKE THE FORM ACTUALLY SEND EMAILS:
//
// Option A — EmailJS (free, no backend needed):
//   1. Sign up at https://www.emailjs.com
//   2. Create a service, template, and get your public key
//   3. Run: npm install @emailjs/browser
//   4. Uncomment the emailjs block below and fill in your IDs
//
// Option B — mailto fallback (works immediately, opens user's email app):
//   The current implementation uses this by default.
// ------------------------------------------------------------------

type FormState = { name: string; email: string; subject: string; message: string };
const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // ── Option A: EmailJS ──────────────────────────────────────────
    // import emailjs from "@emailjs/browser";
    // try {
    //   await emailjs.send(
    //     "YOUR_SERVICE_ID",     // ✏️ from EmailJS dashboard
    //     "YOUR_TEMPLATE_ID",    // ✏️ from EmailJS dashboard
    //     { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
    //     "YOUR_PUBLIC_KEY"      // ✏️ from EmailJS dashboard
    //   );
    //   setStatus("sent");
    //   setForm(EMPTY);
    // } catch {
    //   setStatus("error");
    // }

    // ── Option B: mailto fallback (active by default) ─────────────
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus("sent");
    setForm(EMPTY);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-label text-xs tracking-[0.3em] text-muted-foreground mb-3">GET IN TOUCH</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Contact</h2>
          <div className="w-12 h-0.5 bg-primary mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {/* ✏️ EDIT: Change this intro text */}
              Open to opportunities, collaborations, and product discussions—let’s connect and build something impactful.
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

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-label text-[10px] tracking-wider text-muted-foreground mb-0.5">LOCATION</p>
                  <p className="font-body text-sm text-foreground">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-label text-[10px] tracking-wider text-muted-foreground block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-label text-[10px] tracking-wider text-muted-foreground block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-label text-[10px] tracking-wider text-muted-foreground block mb-2">
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="font-label text-[10px] tracking-wider text-muted-foreground block mb-2">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or question..."
                className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-3 bg-primary text-primary-foreground font-label text-xs tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status === "sent" && (
              <p className="font-body text-sm text-green-600">
                ✓ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-body text-sm text-red-500">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
