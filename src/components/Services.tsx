'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, AlertTriangle, Waves, Flame, GitBranch, Droplets, Building2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

const serviceIcons = [AlertTriangle, Waves, GitBranch, Flame, Droplets, Building2]

const serviceImages = [
  { src: '/plumbing/emergency-plumbing.webp',    alt: 'Emergency plumber repairing a burst pipe',            anim: '-translate-x-full group-hover:translate-x-0' },
  { src: '/plumbing/drain-cleaning.avif',        alt: 'Plumber performing professional drain cleaning',        anim: 'translate-y-full group-hover:translate-y-0'  },
  { src: '/plumbing/sewer-line.jpg',             alt: 'Sewer line inspection and repair work',                anim: 'translate-x-full group-hover:translate-x-0'  },
  { src: '/plumbing/water-heater-install.webp',  alt: 'Professional tankless water heater installation',      anim: '-translate-y-full group-hover:translate-y-0' },
  { src: '/plumbing/leak-detection.png',         alt: 'Professional leak detection service',                  anim: '-translate-x-full group-hover:translate-x-0' },
  { src: '/plumbing/commercial-plumbing.png',    alt: 'Commercial plumbing installation in a large facility', anim: 'translate-x-full group-hover:translate-x-0'  },
]

const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-0', 'delay-100', 'delay-200']

export default function Services() {
  const { t } = useLanguage()
  const s = t.services
  const { ref: headRef, inView: headIn } = useInView()
  const { ref: gridRef, inView: gridIn  } = useInView()
  const { ref: ctaRef,  inView: ctaIn   } = useInView()

  return (
    <section id="services" className="py-24 bg-gray-50" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            {s.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A4A] mt-2 mb-4">
            {s.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {s.subheading}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {s.cards.map((card, i) => {
            const Icon = serviceIcons[i]
            const img  = serviceImages[i]
            return (
              <Link
                href="/plumbing"
                key={card.title}
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                className={`relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group ${delays[i]} ${
                  gridIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                {/* Background image — slides in on hover */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-out ${img.anim}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#1B2A4A]/88" />
                </div>

                {/* Orange top accent bar */}
                <div className="relative z-10 h-1.5 bg-[#1B2A4A] group-hover:bg-orange-500 transition-colors duration-300" />

                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-[#1B2A4A] rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300 shadow-md">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1B2A4A] group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="leading-relaxed text-sm text-gray-500 group-hover:text-orange-100 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Emergency CTA Banner */}
        <div
          ref={ctaRef}
          className={`mt-16 bg-[#1B2A4A] rounded-2xl p-8 md:flex md:items-center md:justify-between gap-6 transition-all duration-700 ${
            ctaIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Shimmer layer */}
          <div className="absolute inset-0 rounded-2xl animate-shimmer pointer-events-none" />

          <div className="mb-6 md:mb-0 relative z-10">
            <h3 className="text-white font-bold text-xl mb-1">
              {s.emergencyHeading}
            </h3>
            <p className="text-orange-200 text-sm">
              {s.emergencySubtext}
            </p>
          </div>
          <a
            href="tel:+18569042097"
            className="relative z-10 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all whitespace-nowrap flex-shrink-0 shadow-lg hover:-translate-y-0.5 animate-pulse-glow"
          >
            <Phone size={18} />
            (856) 904-2097
          </a>
        </div>
      </div>
    </section>
  )
}
