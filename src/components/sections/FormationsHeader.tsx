import { FORMATIONS } from "@/data/inventaire";
import { SoftBlob, DotsGrid, SectionMarker } from "@/components/ui/Decorations";

/*
 * Section formations — En-tête avec statHook 70%.
 * Source : formations_inov.pdf — page 1 (entête + accroche)
 *
 * Direction artistique :
 *  - Fond paper, large stat 70% en watermark/figure mise en avant.
 *  - Layout : H2 punch ("Vos équipes comprennent l'IA. Enfin.") + stat box latérale.
 */
export default function FormationsHeader() {
  return (
    <section
      id="formations"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      <SoftBlob
        color="signal"
        size={620}
        opacity={0.06}
        className="absolute -top-40 -left-40"
      />
      <DotsGrid
        variant="ink"
        rows={6}
        cols={8}
        spacing={22}
        size={1.4}
        className="absolute top-1/3 right-6 opacity-30 scale-50 md:scale-75 lg:scale-100 origin-top-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionMarker
          index="05"
          label="FORMATIONS · 02 PARCOURS"
          className="mb-10"
        />

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Texte */}
          <div data-reveal="up" className="col-span-12 lg:col-span-7">
            <p className="eyebrow">{FORMATIONS.eyebrow}</p>
            <h2 className="h2-display mt-5">{FORMATIONS.title}</h2>
            <p className="lead mt-6">{FORMATIONS.subtitle}</p>
          </div>

          {/* Stat hook 70% */}
          <aside
            data-reveal="up"
            data-delay="1"
            className="col-span-12 lg:col-span-5 relative bg-ink text-paper rounded-md p-7 md:p-9 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-60"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(216,27,96,0.25), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                ● Stat clé · Afrique subsaharienne
              </p>
              <p
                className="mt-5 font-display font-bold tracking-[-0.04em] leading-none text-signal"
                style={{ fontSize: "clamp(4rem, 7vw + 0.5rem, 6.5rem)" }}
              >
                {FORMATIONS.statHook.figure}
              </p>
              <p className="mt-5 text-[15px] leading-[1.55] text-paper/85 font-normal">
                {FORMATIONS.statHook.body}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
