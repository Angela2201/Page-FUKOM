import Image from "next/image";
import { contacto } from "@/data/contacto";

export default function BotonWhatsapp() {
  return (
    <a
      href={contacto.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-[43px] right-[10px] z-30 size-[62px]"
    >
      <Image src="/icons/whatsapp-fondo.svg" alt="" width={62} height={62} />
      <Image
        src="/icons/whatsapp.png"
        alt=""
        width={42}
        height={42}
        className="absolute left-2.5 top-2.5"
      />
    </a>
  );
}
