'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

export default function EstimateForm() {
  const { t } = useLanguage()
  const f = t.estimateForm
  const { ref, inView } = useInView()

  return (
    <section
      id="contact"
      className="py-20 bg-[#1B2A4A] relative overflow-hidden"
      aria-label="Request an estimate"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute ken-burns" style={{ inset: '-8%' }}>
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#1B2A4A]/90" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1B2A4A]/20 via-[#1B2A4A]/60 to-[#1B2A4A]/95" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-500/15 blur-3xl rounded-full" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Info */}
          <div className="text-white lg:sticky lg:top-24">
            <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">
              {f.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">
              {f.heading}
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              {f.description}
            </p>
            <ul className="space-y-3">
              {f.perks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-100">
                  <CheckCircle size={18} className="text-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: GHL Embedded Form */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/hOxxRb1745wfKExtJoaZ"
              style={{ width: '100%', height: '600px', border: 'none' }}
              title="Atlas Plumbing Web Form"
              loading="lazy"
            />
          </div>

        </div>
      </div>

    </section>
  )
}
