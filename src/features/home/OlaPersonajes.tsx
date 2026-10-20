import Image from "next/image";

const TEXTO = Array(4).fill("DE ORUGA A MARIPOSA · EDUCACIÓN INTEGRAL ·").join(" ");

const CURVA =
  "M-51 218.5 C-39 216.6 -0.2 209.8 20.9 207.2 C42 204.6 61.7 203.8 75.4 203 C89.1 202.2 93.6 202.5 102.9 202.5 C112.2 202.5 115.8 201.8 131.4 203 C147 204.2 173.1 205.5 196.7 209.4 C220.3 213.3 248.5 220.3 273 226.6 C297.5 232.9 318.9 239.1 343.7 247.1 C368.5 255.1 395.2 265.6 421.7 274.9 C448.2 284.2 477.8 295.1 502.8 303 C527.8 310.9 549.4 317.7 571.7 322.6 C594 327.5 616.6 330 636.7 332.3 C656.8 334.6 675.4 335.8 692.4 336.4 C709.4 337 726.2 336.3 738.7 335.9 C751.2 335.5 748.3 336.4 767.1 334.2 C785.9 332 828.1 327 851.7 322.6 C875.3 318.2 884.4 314.4 908.5 307.8 C932.6 301.2 971.5 290.7 996.4 283.1 C1021.3 275.5 1034.1 270.1 1058 262.3 C1081.9 254.5 1114.7 243.8 1139.9 236.5 C1165.1 229.2 1186.7 223.1 1209.1 218.7 C1231.5 214.3 1254.2 212.1 1274.4 210.1 C1294.6 208.1 1308.3 206.9 1330 206.9 C1351.7 206.9 1385.8 208.9 1404.6 210.3 C1423.4 211.7 1429.1 213.3 1443.1 215.5 C1457.1 217.7 1481.2 222.3 1488.8 223.7";

// Medidas de Figma en un lienzo de 1440 x 372
const ANCHO = 1440;
const ALTO = 372;

const personajes = [
  { src: "/images/personajes/maya.png", x: 62, y: -54, w: 190, h: 241 },
  { src: "/images/personajes/santi.png", x: 385, y: 8, w: 230, h: 282 },
  { src: "/images/personajes/luna.png", x: 815, y: 50, w: 181, h: 226.8 },
  { src: "/images/personajes/leo.png", x: 1212, y: -60, w: 179, h: 246.65 },
];

export default function OlaPersonajes() {
  return (
    <div className="relative aspect-[1440/372] w-full">
      <svg
        viewBox={`0 0 ${ANCHO} ${ALTO}`}
        className="absolute inset-0 size-full overflow-visible"
        aria-hidden="true"
      >
        <image
          href="/images/ola-hero.svg"
          x="-49.67"
          y="171.7"
          width="1559.64"
          height="878.8"
          preserveAspectRatio="none"
        />
        <path id="curva-hero" d={CURVA} fill="none" />
        <text
          className="font-heading"
          fontSize="25.753"
          fontWeight="800"
          letterSpacing="1.981"
          fill="#fff"
          dominantBaseline="central"
          style={{ whiteSpace: "pre" }}
        >
          <textPath href="#curva-hero">{TEXTO}</textPath>
        </text>
      </svg>

      {personajes.map(({ src, x, y, w, h }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={w}
          height={h}
          className="absolute"
          style={{
            left: `${(x / ANCHO) * 100}%`,
            top: `${(y / ALTO) * 100}%`,
            width: `${(w / ANCHO) * 100}%`,
            height: "auto",
          }}
        />
      ))}
    </div>
  );
}
