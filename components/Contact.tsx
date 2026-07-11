/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 bg-black/45 md:hidden">
        <Image
          src="/images/contact/connect-mobile.jpg"
          alt="Patrick Davidson and Greg Ritz planning"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Desktop Background */}
      <div className="absolute inset-0 hidden bg-black/65 md:block">
        <Image
          src="/images/contact/connect-planning.jpeg"
          alt="Patrick Davidson and Greg Ritz planning"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 py-24 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500">
            CONNECT
          </p>

          <h2 className="text-5xl font-black uppercase italic leading-none md:text-8xl">
            Let's
            <br />
            Connect.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
            Whether you're following Patrick's racing journey, representing the
            media, exploring sponsorship opportunities, or simply wanting to
            connect, we'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-white/20 pt-10 md:mt-20 md:grid-cols-2 md:gap-16 md:pt-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500 md:mb-6">
              Follow Patrick
            </p>

            <SocialLink
              label="Instagram"
              href="https://www.instagram.com/flying_davidson"
            />

            <SocialLink
              label="Facebook"
              href="https://www.facebook.com/share/18vPyoeb84/?mibextid=wwXIfr"
            />

            <SocialLink
              label="YouTube"
              href="https://youtube.com/@flyingdavidson"
            />
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500 md:mb-6">
              Managed By
            </p>

            <h3 className="text-3xl font-black uppercase md:text-4xl">
              Greg Ritz
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">
              Patrick's Manager
            </p>

            <div className="mt-8 space-y-4 text-base text-white/80 md:text-lg">
              <a
                href="mailto:greg@flyingdavidson.com"
                className="block transition hover:text-yellow-400"
              >
                greg@flyingdavidson.com
              </a>

              <a
                href="tel:+27834005858"
                className="block transition hover:text-yellow-400"
              >
                +27 83 400 5858
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-white/20 py-4 text-xl font-black uppercase transition hover:text-yellow-400 md:py-5 md:text-2xl"
    >
      <span>{label}</span>
      <span className="transition-transform group-hover:translate-x-2">→</span>
    </a>
  );
}