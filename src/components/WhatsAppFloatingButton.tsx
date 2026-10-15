import React, { useState } from 'react';
import { MessageSquare, Phone, X, Compass } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Action Popup Menu */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 w-72 text-xs space-y-3 animate-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold text-[#123D2A]">Mwanaweika Tours Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-slate-600 text-[11px] leading-relaxed">
            Welcome! Connect directly with our safari planning team in Mukono, Uganda.
          </p>

          <div className="space-y-1.5 pt-1">
            <a
              href="https://wa.me/256705750506?text=Hello%20Mwanaweika%20Tours!%20I%20would%20like%20to%20enquire%20about%20a%20safari%20in%20Uganda."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-[#246B45] hover:bg-[#123D2A] text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp (+256 705 750506)</span>
            </a>

            <a
              href="tel:+256705750506"
              className="w-full py-2 px-3 bg-[#F7F4EA] hover:bg-[#e9e4d3] text-[#123D2A] font-semibold rounded-md flex items-center justify-center gap-2 transition-colors border border-[#202922]/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#246B45]" />
              <span>Call: 0705750506</span>
            </a>

            <a
              href="tel:+256783354352"
              className="w-full py-1.5 px-3 text-slate-600 hover:text-slate-900 text-center block text-[11px]"
            >
              Alternative line: 0783354352
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#246B45] hover:bg-[#123D2A] text-white flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer border-2 border-white focus:outline-none"
        aria-label="Contact Mwanaweika Tours on WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
