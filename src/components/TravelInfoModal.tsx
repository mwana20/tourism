import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { travelInfoTopics } from '../data/travelInfo';
import {
  X,
  Plane,
  FileText,
  HeartPulse,
  Banknote,
  Sun,
  Backpack,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface TravelInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getTopicIcon = (id: string) => {
  switch (id) {
    case 'getting-here': return Plane;
    case 'visas': return FileText;
    case 'health': return HeartPulse;
    case 'currency': return Banknote;
    case 'climate': return Sun;
    case 'packing': return Backpack;
    case 'ethics': return ShieldCheck;
    default: return FileText;
  }
};

export const TravelInfoModal: React.FC<TravelInfoModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [activeTopicId, setActiveTopicId] = useState<string>(travelInfoTopics[0].id);

  if (!isOpen) return null;

  const currentTopic = travelInfoTopics.find((top) => top.id === activeTopicId) || travelInfoTopics[0];
  const IconComp = getTopicIcon(currentTopic.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#123D2A] text-white flex items-center justify-between border-b border-[#246B45]/40 shrink-0">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9AC55]">
              {t.travelGuide.title}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
              {t.travelGuide.subtitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body: Two columns (topics list + details) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Topics Sidebar */}
          <div className="w-full md:w-64 bg-[#F7F4EA]/80 border-b md:border-b-0 md:border-r border-[#202922]/10 p-3 space-y-1 overflow-y-auto shrink-0">
            {travelInfoTopics.map((top) => {
              const isActive = activeTopicId === top.id;
              const TopicIcon = getTopicIcon(top.id);
              return (
                <button
                  key={top.id}
                  onClick={() => setActiveTopicId(top.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#123D2A] text-white font-semibold shadow-sm'
                      : 'text-[#202922]/80 hover:bg-[#e9e4d3]'
                  }`}
                >
                  <TopicIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#D9AC55]' : 'text-[#246B45]'}`} />
                  <span className="line-clamp-1">{top.title}</span>
                </button>
              );
            })}
          </div>

          {/* Details Pane */}
          <div className="flex-1 p-6 sm:p-8 space-y-6 overflow-y-auto bg-white">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#246B45]">
                <IconComp className="w-4 h-4" />
                <span>{currentTopic.badge}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#123D2A]">
                {currentTopic.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#202922]/80 leading-relaxed">
                {currentTopic.summary}
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Guidelines & Recommendations:
              </div>
              <div className="space-y-2.5">
                {currentTopic.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F4EA]/60 border border-[#202922]/10 text-xs text-[#202922]/90 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#246B45] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Source Notice */}
            {currentTopic.officialSourceNotice && (
              <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Official Authority Notice:</strong> {currentTopic.officialSourceNotice}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Need specialized visa or logistics support? Ask during your booking enquiry.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#123D2A] text-white font-semibold rounded-md hover:bg-[#246B45] transition-colors cursor-pointer"
          >
            {t.common.close}
          </button>
        </div>
      </div>
    </div>
  );
};
