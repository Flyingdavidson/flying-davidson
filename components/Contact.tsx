import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <Image
        src="/images/contact/connect-planning.jpeg"
        alt="Patrick Davidson and Greg Ritz planning"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-8 py-24 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500">
            CONNECT
          </p>

          <h2 className="text-6xl font-black uppercase italic leading-none md:text-8xl">
            Let's
            <br />
            Connect.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/80">
            Whether you're following Patrick's racing journey,
            representing the media, exploring sponsorship opportunities,
            or simply wanting to connect, we'd love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid gap-16 border-t border-white/20 pt-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-yellow-500">
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
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-yellow-500">
              Managed By
            </p>

            <h3 className="text-4xl font-black uppercase">
              Greg Ritz
            </h3>

            <p className="mt-2 uppercase tracking-[0.3em] text-white/60 text-sm">
              Patrick's Manager
            </p>

            <div className="mt-8 space-y-4 text-lg text-white/80">
              <a
                href="mailto:greg@flyingdavidson.com"
                className="block hover:text-yellow-400 transition"
              >
                greg@flyingdavidson.com
              </a>

              <a
                href="tel:+27834005858"
                className="block hover:text-yellow-400 transition"
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

function SocialLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-white/20 py-5 text-2xl font-black uppercase hover:text-yellow-400 transition"
    >
      <span>{label}</span>

      <span className="transition-transform group-hover:translate-x-2">
        →
      </span>
    </a>
  );
}