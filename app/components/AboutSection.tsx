export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-[#f5f6ef] px-[7.1%] py-24 max-[900px]:px-[5%] max-[640px]:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#71864a]">
          01 / Tentang kami
        </p>
        <div className="grid grid-cols-[.9fr_1.1fr] gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-9">
          <h2 className="m-0 max-w-[440px] font-manrope text-[clamp(38px,5vw,62px)] font-semibold leading-[1.05] tracking-[-3px] text-[#263b30]">
            Ide baik layak punya dampak.
          </h2>
          <div>
            <p className="mb-9 max-w-[590px] text-[15px] leading-[1.9] text-[#66716a]">
              Kami membantu bisnis bergerak lebih jauh melalui strategi,
              teknologi, dan pengalaman digital yang bermakna. Setiap langkah
              dimulai dengan memahami kebutuhan, lalu membangun solusi bersama.
            </p>
            <div className="grid grid-cols-3 gap-5 border-t border-[#263b30]/15 pt-5 max-[520px]:grid-cols-1">
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#263b30]">Strategi</h3>
                <p className="m-0 text-xs leading-[1.7] text-[#66716a]">
                  Menentukan arah yang jelas untuk tujuan bisnis.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#263b30]">Teknologi</h3>
                <p className="m-0 text-xs leading-[1.7] text-[#66716a]">
                  Menghadirkan solusi digital yang berguna dan relevan.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#263b30]">Kolaborasi</h3>
                <p className="m-0 text-xs leading-[1.7] text-[#66716a]">
                  Bekerja bersama dari ide awal hingga hasil nyata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
