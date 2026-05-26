import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { MotionWrapper } from "@/components/motion-wrapper";
import { GlassCard } from "@/components/glass-card";
import { SITE_CONFIG } from "@/lib/constants";

const contactMethods = [
  {
    title: "Email",
    content: (
      <Link
        href={`mailto:${SITE_CONFIG.email}`}
        className="link-underline mt-3 inline-flex min-h-11 items-center break-all text-base font-medium text-primary sm:mt-4 sm:text-lg"
      >
        {SITE_CONFIG.email}
      </Link>
    ),
  },
  {
    title: "Phone",
    content: (
      <Link
        href={`tel:${SITE_CONFIG.phone}`}
        className="link-underline mt-3 inline-flex min-h-11 items-center text-base font-medium text-primary sm:mt-4 sm:text-lg"
      >
        {SITE_CONFIG.phone.replace("+91", "")}
      </Link>
    ),
  },
  {
    title: "LinkedIn",
    content: (
      <Link
        href={SITE_CONFIG.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline mt-3 inline-flex min-h-11 items-center text-base font-medium text-primary sm:mt-4 sm:text-lg"
      >
        linkedin.com/in/bhavyadixit/
      </Link>
    ),
  },
];

export default function ContactPage() {
  return (
    <Section first divider={false} className="pt-4 sm:pt-6">
      <MotionWrapper>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Connect"
          description="Open to product conversations, collaborations, internships, and strategic opportunities"
        />
      </MotionWrapper>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {contactMethods.map((method, i) => (
          <MotionWrapper
            key={method.title}
            delay={i * 0.06}
            className={i === 2 ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <GlassCard interactive className="h-full">
              <h3 className="font-serif text-heading-sm">{method.title}</h3>
              {method.content}
            </GlassCard>
          </MotionWrapper>
        ))}
      </div>
    </Section>
  );
}
