import { home } from "@/content/home";

const TEXTO = Array(4).fill(home.footer.lema).join(" ");

const CURVA =
  "M-56.5 42.4 C-50 41.8 -37.8 40.1 -17.6 38.5 C2.6 36.9 41.9 34 64.5 32.9 C87.1 31.8 94.1 31.7 118.2 32 C142.3 32.3 173.8 32.4 209 34.6 C244.2 36.8 280 39.6 329.3 45.2 C378.6 50.8 451.4 61.5 504.7 68.1 C558 74.7 609.2 81.3 649 85 C688.8 88.7 723.2 89.4 743.5 90.3 C763.8 91.2 744 91.9 770.8 90.6 C797.6 89.3 872.6 84.7 904.2 82.4 C935.8 80.1 924.5 81.5 960.2 76.8 C995.9 72.1 1062.5 60.8 1118.3 54.2 C1174.1 47.6 1253.2 39.6 1295 37.2 C1336.8 34.8 1337.8 36.9 1369 40 C1400.2 43.1 1463.6 53.2 1482.5 55.8";

export default function TiraOndulada() {
  return (
    <svg
      viewBox="0 0 1440 138.66"
      className="block h-auto w-full bg-[var(--fondo-tira,transparent)]"
      aria-hidden="true"
    >
      {/* Ola azul */}
      <image
        href="/images/ola-azul.svg"
        x="-59.92"
        y="48.97"
        width="1559.84"
        height="89.69"
        preserveAspectRatio="none"
      />
      {/* Banda amarilla */}
      <image
        href="/images/ola-amarilla.svg"
        x="-62.88"
        y="9.2"
        width="1552.5"
        height="106.1"
        preserveAspectRatio="none"
      />
      {/* Texto sobre la curva */}
      <path id="curva-footer" d={CURVA} fill="none" />
      <text
        className="font-heading"
        fontSize="19.809"
        fontWeight="800"
        letterSpacing="1.9809"
        fill="#000"
        dominantBaseline="central"
        style={{ whiteSpace: "pre" }}
      >
        <textPath href="#curva-footer">{TEXTO}</textPath>
      </text>
    </svg>
  );
}