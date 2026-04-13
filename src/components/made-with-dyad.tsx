import { Flame } from "lucide-react";

export const MadeWithDyad = () => {
  return (
    <div className="p-12 text-center border-t border-stone-900/50 mt-20">
      <div className="flex flex-col items-center gap-3">
        <Flame size={20} className="text-stone-700" strokeWidth={1} />
        <span className="text-stone-400 font-serif tracking-[0.4em] uppercase text-[10px]">CandleMind</span>
        <div className="h-[1px] w-8 bg-stone-800 my-2"></div>
        <p className="text-[9px] text-stone-600 uppercase tracking-[0.2em] font-light">
          © {new Date().getFullYear()} • Essência & Ciência
        </p>
      </div>
    </div>
  );
};