import Link from "next/link";
import { CONTACT, FORMATIONS } from "@/data/inventaire";

/*
 * Section formations — §05 Réserver.
 * Source : formations_inov.pdf — §05 Réserver "30 minutes. Zéro jargon."
 *
 * Direction artistique :
 *  - Fond paper, bloc CTA centré.
 *  - Big H2, body court, double CTA (réserver / email direct).
 */
export default function FormationsBooking() {
  const { booking } = FORMATIONS;

  return (
    <section
      aria-label="§05 Réserver"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Halo signal très diffus */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,27,96,0.10), transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <p
          data-reveal="up"
          className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-signal"
        >
          {booking.eyebrow}
        </p>

        <h2
          data-reveal="up"
          data-delay="1"
          className="mt-6 font-display font-semibold tracking-[-0.025em] leading-[1.15] text-ink"
          style={{ fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 3rem)" }}
        >
          {booking.title}
        </h2>

        <p
          data-reveal="up"
          data-delay="2"
          className="mt-7 mx-auto max-w-2xl text-ink-soft leading-[1.6] font-normal text-[15px] md:text-base"
        >
          {booking.body}
        </p>

        <div
          data-reveal="up"
          data-delay="3"
          className="mt-10 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-5 sm:px-7 h-12 text-[14px] sm:text-[15px] font-semibold rounded-md hover:bg-signal transition-colors w-full sm:w-auto"
          >
            <span className="truncate">{booking.cta}</span>
            <span
              aria-hidden
              className="shrink-0 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <a
            href={`mailto:${booking.contactEmail}`}
            className="group inline-flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-1 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-ink-soft hover:text-ink transition-colors max-w-full"
          >
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-ink-faint">
              {booking.contactLabel}
            </span>
            <span className="link-line break-all">
              {booking.contactEmail}
            </span>
          </a>
        </div>

        {/* Réassurances — break-words pour ne pas overflow mobile */}
        <p className="mt-10 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.06em] sm:tracking-[0.1em] text-ink-faint leading-[1.5] break-words">
          Réponse sous 24h · {CONTACT.languages} · {CONTACT.hubLabel}
        </p>
      </div>
    </section>
  );
}
