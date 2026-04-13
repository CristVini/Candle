import { Flame } from "lucide-react";

export const MadeWithDyad = () => {
  return (
    <div className="p-8 text-center border-t border-stone-900 mt-20">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Flame size={16} className="text-amber-500" />
        <span className="text-stone-100 font-serif tracking-widest uppercase text-xs">CandleMind</span>
      </div>
      <p className="text-[10px] text-stone-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} • Essência & Ciência
      </p>
    </div>
  );
};