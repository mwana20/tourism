import React, { useState, useEffect } from 'react';
import { EnquirySubmission } from '../types';
import { X, Search, ShieldCheck, Mail, Phone, Calendar, MapPin, Trash2, CheckCircle2 } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const loadEnquiries = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('mwanaweika_enquiries') || '[]');
      setEnquiries(stored);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadEnquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateStatus = (id: string, newStatus: EnquirySubmission['status']) => {
    const updated = enquiries.map((enq) =>
      enq.id === id ? { ...enq, status: newStatus } : enq
    );
    setEnquiries(updated);
    localStorage.setItem('mwanaweika_enquiries', JSON.stringify(updated));
  };

  const deleteEnquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      const updated = enquiries.filter((enq) => enq.id !== id);
      setEnquiries(updated);
      localStorage.setItem('mwanaweika_enquiries', JSON.stringify(updated));
    }
  };

  const filtered = enquiries.filter((enq) => {
    const matchesStatus = selectedStatus === 'all' || enq.status === selectedStatus;
    const q = search.toLowerCase();
    const matchesSearch =
      enq.fullName.toLowerCase().includes(q) ||
      enq.referenceCode.toLowerCase().includes(q) ||
      enq.email.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl border border-slate-200 my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#123D2A] text-white flex items-center justify-between border-b border-[#246B45]/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#246B45] flex items-center justify-center text-[#D9AC55]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9AC55]">
                Internal Staff Portal · Mukono Headquarters
              </span>
              <h2 className="font-serif text-xl font-bold">
                Safari Enquiries & Quotation Desk
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between shrink-0">
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, ref code, or email..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 font-medium">Filter Status:</span>
            {['all', 'New', 'In Review', 'Quoted', 'Confirmed', 'Archived'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  selectedStatus === st
                    ? 'bg-[#123D2A] text-white font-semibold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Enquiries List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No enquiries found matching your search.
            </div>
          ) : (
            filtered.map((enq) => {
              const isExpanded = expandedId === enq.id;
              return (
                <div
                  key={enq.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#123D2A] bg-slate-100 px-2 py-0.5 rounded">
                        {enq.referenceCode}
                      </span>
                      <span className="text-xs font-semibold text-slate-900">
                        {enq.fullName} ({enq.country})
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {new Date(enq.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={enq.status}
                        onChange={(e) => updateStatus(enq.id, e.target.value as any)}
                        className={`text-xs px-2.5 py-1 rounded font-semibold border ${
                          enq.status === 'New'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : enq.status === 'In Review'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : enq.status === 'Quoted'
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : enq.status === 'Confirmed'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Archived">Archived</option>
                      </select>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : enq.id)}
                        className="text-xs text-[#246B45] hover:underline cursor-pointer px-2 py-1"
                      >
                        {isExpanded ? 'Less' : 'Details'}
                      </button>

                      <button
                        onClick={() => deleteEnquiry(enq.id)}
                        className="text-slate-400 hover:text-red-600 p-1 cursor-pointer"
                        title="Delete enquiry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Summary Details */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Contact:</span>
                      <span>{enq.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Phone/WhatsApp:</span>
                      <span>{enq.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Party Size:</span>
                      <span>{enq.adultsCount} Adults, {enq.childrenCount} Children</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Duration:</span>
                      <span>{enq.durationDays} Days ({enq.travelDates})</span>
                    </div>
                  </div>

                  {/* Expanded Detailed View */}
                  {isExpanded && (
                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700 animate-in fade-in">
                      <div>
                        <strong>Preferred Travel Style:</strong> {enq.travelStyle} · {enq.accommodationType}
                      </div>
                      <div>
                        <strong>Safari Vehicle:</strong> {enq.transportPreference} · Airport Pickup:{' '}
                        {enq.airportPickup ? 'Yes' : 'No'}
                      </div>
                      {enq.destinations.length > 0 && (
                        <div>
                          <strong>Selected Parks/Destinations:</strong> {enq.destinations.join(', ')}
                        </div>
                      )}
                      {enq.experiences.length > 0 && (
                        <div>
                          <strong>Selected Activities:</strong> {enq.experiences.join(', ')}
                        </div>
                      )}
                      {enq.budgetPerPerson && (
                        <div>
                          <strong>Budget Indication:</strong> {enq.budgetPerPerson}
                        </div>
                      )}
                      {enq.specialRequests && (
                        <div>
                          <strong>Special Requests / Dietary:</strong>
                          <p className="mt-0.5 italic text-slate-600 bg-white p-2 rounded border border-slate-200">
                            {enq.specialRequests}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Total Records: {enquiries.length} enquiries</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#123D2A] text-white font-semibold rounded-md hover:bg-[#246B45]"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
