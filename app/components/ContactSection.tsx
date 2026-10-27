export default function ContactSection() {
  return (
    <section
      id="kontak"
      className="bg-white px-[7.1%] py-24 max-[900px]:px-[5%] max-[640px]:py-16"
    >
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-10 max-[640px]:flex-col max-[640px]:items-start">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#71864a]">
            05 / Kontak
          </p>
          <h2 className="m-0 max-w-[620px] font-manrope text-[clamp(38px,5vw,62px)] font-semibold leading-[1.05] tracking-[-3px] text-[#263b30]">
            Punya ide? Mari mulai percakapan.
          </h2>
          <p className="mb-0 mt-5 max-w-[470px] text-sm leading-[1.8] text-[#66716a]">
            Ceritakan kebutuhan Anda dan kita cari langkah berikutnya bersama.
          </p>
        </div>
        <a
          className="inline-flex min-h-[51px] shrink-0 items-center justify-center bg-[#263b30] px-6 text-xs font-bold text-white transition-colors hover:bg-[#3b5646] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82975b] focus-visible:ring-offset-2 max-[640px]:w-full"
          href="mailto:hello@example.com"
        >
          Hubungi kami <span aria-hidden="true" className="ml-4">↗</span>
        </a>
      </div>
    </section>
  );
}
