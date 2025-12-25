import Image from "next/image";

export default function TermekekPage() {
  const products = [
    {
      id: "kerti-csap",
      title: "Fagymentes kerti csap",
      description: "Erőteljes öntöttvas csaptest, sárgaréz vízkifolyóval, rozsdaálló csapszárral. Megbízható megoldás minden kertbe, amely ellenáll a legkeményebb fagyoknak is.",
      image: "/termekek/FagymentesKertiCsap.webp",
      emailSubject: "Érdeklődés: Fagymentes kerti csap"
    },
    {
      id: "szivattyu",
      title: "Manuális kézi szivattyú",
      description: "Erős öntöttvas testtel és rozsdaálló csapszárral rendelkező kézi szivattyú. Ideális választás olyan helyekre, ahol nincs elektromos áram.",
      image: "/termekek/FagymentesKertiKut.webp",
      emailSubject: "Érdeklődés: Manuális kézi szivattyú"
    }
  ];

  return (
    <main className="min-h-screen pt-20 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-slate-900 dark:text-white">
            Termékeink
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Prémium minőségű alkatrészek és berendezések a vízellátás szolgálatában.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col h-full group bg-white dark:bg-slate-800/40 backdrop-blur-md p-4 rounded-[2.5rem] border border-slate-200 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:border-blue-600/30"
            >
              <div className="h-80 relative rounded-[2rem] overflow-hidden mb-8 bg-slate-100 shrink-0">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  draggable="false"
                />
              </div>

              <div className="px-6 pb-6 flex flex-col flex-grow">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-center text-slate-800 dark:text-white">
                  {product.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg text-center flex-grow">
                  {product.description}
                </p>

                <a 
                  href={`mailto:hajdu.zsolt@hajdu.hu?subject=${product.emailSubject}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto block w-full bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-600/20"
                >
                  AJÁNLATOT KÉREK
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}