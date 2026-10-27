import "../globals.css";


export default function HeroSection() {
  return (
    <section
      className="bg-gray-300 relative grid min-h-[660px] grid-cols-[1fr_.88fr] overflow-hidden px-[7.1%] pb-[38px] pt-[88px] max-[900px]:grid-cols-[1fr_.8fr] max-[900px]:px-[5%] max-[640px]:flex max-[640px]:min-h-0 max-[640px]:flex-col max-[640px]:pb-[85px] max-[640px]:pt-[47px]"
      id="beranda"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> 
    </section>
  );
}
