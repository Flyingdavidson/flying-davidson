export default function Contact() {
    return (
      <section id="contact" className="bg-white px-8 py-32 text-black">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-black/35">
            Contact
          </p>
  
          <h2 className="mb-8 text-5xl font-black md:text-7xl">
            Work with Patrick.
          </h2>
  
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-9 text-black/65">
            For airshow bookings, media enquiries, partnerships or display
            opportunities, get in touch with the team.
          </p>
  
          <a
            href="mailto:greg@flyingdavidson.com"
            className="rounded-full border border-black px-10 py-4 text-sm uppercase tracking-[0.35em] transition hover:bg-black hover:text-white"
          >
            Email the Team
          </a>
        </div>
      </section>
    );
  }