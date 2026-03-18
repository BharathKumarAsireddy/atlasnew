'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Phone, FileText, Star, ShieldCheck, Clock, CheckCircle, ArrowRight, Truck, BadgePercent } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const trustIcons = [Clock, ShieldCheck, CheckCircle]

const heroSlides = [
  { src: '/hero/slide1.jpg', alt: 'Professional plumber at work' },
  { src: '/hero/slide2.jpg', alt: 'HVAC and plumbing technician' },
  { src: '/hero/slide3.jpg', alt: 'Plumbing crew on the job' },
  { src: '/hero/slide4.jpg', alt: 'Industrial pipe systems' },
  { src: '/hero/slide5.jpg', alt: 'Plumbing installation close-up' },
]

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  const [active, setActive]     = useState(0)
  const [prev, setPrev]         = useState<number | null>(null)
  const [sliding, setSliding]   = useState(false)
  const timerRef                = useRef<ReturnType<typeof setInterval> | null>(null)

  const advance = () => {
    if (sliding) return
    setSliding(true)
    setPrev(active)
    setActive(a => (a + 1) % heroSlides.length)
    setTimeout(() => { setPrev(null); setSliding(false) }, 950)
  }

  useEffect(() => {
    timerRef.current = setInterval(advance, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, sliding])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Sliding background carousel ── */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Exiting slide — slides out to left */}
        {prev !== null && (
          <div key={`out-${prev}`} className="absolute inset-0 hero-slide-exit">
            <div className="absolute ken-burns" style={{ inset: '-8%' }}>
              <Image
                src={heroSlides[prev].src}
                alt={heroSlides[prev].alt}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        )}

        {/* Active slide — slides in from right */}
        <div key={`in-${active}`} className="absolute inset-0 hero-slide-enter">
          <div className="absolute ken-burns" style={{ inset: '-8%' }}>
            <Image
              src={heroSlides[active].src}
              alt={heroSlides[active].alt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1929]/92 via-[#0D1929]/75 to-[#0D1929]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1929]/70 via-transparent to-[#0D1929]/40 z-10" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-brand-500/10 blur-3xl rounded-full z-10" />

        {/* Slide indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!sliding && i !== active) { setPrev(active); setActive(i); setSliding(true); setTimeout(() => { setPrev(null); setSliding(false) }, 950) } }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-brand-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 pt-44 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div>
            <div className="hero-animate-1 inline-flex items-center gap-2 bg-brand-500/15 border border-brand-400/40 text-brand-300 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              <ShieldCheck size={14} className="text-brand-400" />
              {h.badge}
            </div>

            <h1 className="hero-animate-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
              {h.headline1}<br />
              <span className="text-brand-400">{h.headline2}</span><br />
              {h.headline3}
            </h1>

            <p className="hero-animate-3 text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              {h.subheadline}
            </p>

            <div className="hero-animate-4 flex items-center gap-3 mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-brand-400 fill-brand-400" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">5.0</span>
              <span className="text-gray-400 text-sm">{h.ratingLabel}</span>
            </div>

            {/* 0% Financing callout */}
            <div className="mb-8 inline-flex items-center gap-3 bg-green-500/15 border border-green-400/30 rounded-2xl px-5 py-3 max-w-fit">
              <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <BadgePercent size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">0% APR Financing Available</div>
                <div className="text-gray-300 text-xs">Water heaters &amp; sewer replacements — apply in minutes</div>
              </div>
              <Link
                href="#contact"
                className="ml-2 pl-3 border-l border-white/20 text-brand-400 text-xs font-bold hover:text-brand-300 transition-colors whitespace-nowrap"
              >
                Apply Now →
              </Link>
            </div>

            <div className="hero-animate-5 flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+18569042097"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0D1929] font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Call Atlas Plumbing now"
              >
                <Phone size={18} />
                {h.callNow}
              </a>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse-glow"
              >
                <FileText size={18} />
                {h.getFreeEstimate}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-animate-6 flex flex-wrap gap-x-8 gap-y-3">
              {h.trustItems.map((text, i) => {
                const Icon = trustIcons[i]
                return (
                  <div key={text} className="flex items-center gap-2 text-gray-300">
                    <Icon size={15} className="text-brand-400" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column — hero plumber image */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full animate-float">
              {/* Ambient glow behind the image */}
              <div className="absolute inset-0 scale-90 translate-y-4 bg-brand-500/15 blur-3xl rounded-full pointer-events-none" />

              {/* Hero plumber image */}
              <Image
                src="/hero-plumber.png"
                alt="Atlas Plumbing technician with service van"
                width={600}
                height={600}
                className="relative w-full drop-shadow-2xl object-contain hero-img-zoom"
                priority
              />

              {/* Fleet-ready badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap">
                <Truck size={13} />
                Our Fleet Is Ready — New Jersey
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="hidden lg:flex absolute bottom-10 right-10 z-20 gap-4">
        {h.stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat-animate-${i + 1} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-center shadow-xl hover:bg-white/15 transition-colors`}
          >
            <div className="text-2xl font-extrabold text-brand-400 leading-none">{s.value}</div>
            <div className="text-gray-300 text-xs mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
