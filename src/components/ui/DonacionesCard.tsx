import type { DonacionesCardProps } from "@/types/api";

const numero = new Intl.NumberFormat("es-CO");

export default function DonacionesCard({ goal, collected, donors }: DonacionesCardProps) {
  const progreso = goal > 0 ? Math.min((collected / goal) * 100, 100) : 0;

  return (
    <section className="flex w-full max-w-[358px] flex-col gap-5 rounded-24 bg-primary-200 px-6 py-8 text-neutral-1000">
      <h1 className="text-center font-heading text-[28px]/8 font-extrabold">Donaciones</h1>

      <div
        className="h-3 overflow-hidden rounded-12 bg-white"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progreso)}
        aria-label="Progreso de la meta de donaciones"
      >
        <div className="h-full rounded-12 bg-secondary" style={{ width: `${progreso}%` }} />
      </div>

      <dl className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-base text-neutral-800">Recaudado</dt>
          <dd className="text-xl/6 font-semibold tabular-nums">{numero.format(collected)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-base text-neutral-800">Meta</dt>
          <dd className="text-xl/6 font-semibold tabular-nums">{numero.format(goal)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-base text-neutral-800">Donantes</dt>
          <dd className="text-xl/6 font-semibold tabular-nums">{numero.format(donors)}</dd>
        </div>
      </dl>
    </section>
  );
}
