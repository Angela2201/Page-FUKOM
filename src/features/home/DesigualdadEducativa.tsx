export default function DesigualdadEducativa() {
    return (
        <section className="flex items-start gap-6 bg-white p-10">
            <div className="flex-1 rounded-24 p-8">
                <div className="flex flex-col gap-5">
                    <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <div className="space-y-9 text-[28px]/9 font-medium text-[#858585]">
                        <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </p>
                        <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-5 self-stretch rounded-24 p-8">
                <div className="flex h-[288px] items-center">
                    <p className="font-heading text-[240px] font-extrabold leading-[normal] text-secondary">
                        XX%
                    </p>
                </div>
                <p className="text-[32px]/10 font-semibold text-neutral-1000">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
        </section>
    );
}
