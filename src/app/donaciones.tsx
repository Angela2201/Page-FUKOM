import DonacionesCard from "@/components/ui/DonacionesCard";
import { recibirDonacion } from "@/services/donaciones.service";

export const dynamic = 'force-dynamic';

export default async function Donaciones() {
    const donaciones = await recibirDonacion();
    return (
        <div>
            <DonacionesCard {...donaciones} />
        </div>
    );
}