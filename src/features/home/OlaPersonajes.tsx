import Image from "next/image";

const ANCHO = 1440;
const ALTO = 402.5;

const personajes = [
  { src: "/images/personajes/maya.png", x: 49, y: 28, w: 234, h: 298 },
  { src: "/images/personajes/santi.png", x: 395, y: 44, w: 230, h: 282 },
  { src: "/images/personajes/luna.png", x: 765, y: 64, w: 251, h: 315 },
  { src: "/images/personajes/leo.png", x: 1155, y: 73, w: 216, h: 298 },
];

export default function OlaPersonajes() {
  return (
    <div className="relative aspect-[1440/402.5] w-full">
      <Image
        src="/images/onda-transicion.svg"
        alt=""
        width={1440}
        height={127.5}
        priority
        className="absolute bottom-0 left-0 h-auto w-full"
      />
      {personajes.map(({ src, x, y, w, h }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={w}
          height={h}
          priority
          className="absolute object-cover"
          style={{
            left: `${(x / ANCHO) * 100}%`,
            top: `${(y / ALTO) * 100}%`,
            width: `${(w / ANCHO) * 100}%`,
            height: "auto",
            aspectRatio: `${w} / ${h}`,
          }}
        />
      ))}
    </div>
  );
}
