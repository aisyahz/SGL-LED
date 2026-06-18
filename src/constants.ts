import { LedDisplayProduct, CaseStudy } from './types';

// Importing our newly generated high-fidelity hero images
import heroIndoorImg from './assets/images/hero_indoor_led_1781800789276.jpg';
import heroMallImg from './assets/images/hero_mall_led_1781800803946.jpg';
import heroOutdoorImg from './assets/images/hero_outdoor_billboard_1781800816748.jpg';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    heading: 'Luxurious Seamless Indoor LED Walls',
    tagline: 'CREATING RM100,000+ ICONIC CORPORATE LANDMARKS',
    description: 'Transform executive lobbys, control command rooms, and premium boardrooms with elite 8K-ready seamless COB LED systems displaying rich, hyperrealistic visual dimensions.',
    image: heroIndoorImg,
    badge: 'LUXURY CORPORATE INTERIORS',
    accentColor: 'from-cyan-500 to-blue-500',
    meta: { size: 'Custom 8K Wide', pitch: 'P0.9 - P1.5', tech: 'COB Ultra-Seamless' }
  },
  {
    id: 'slide-2',
    heading: 'High-Impact Mall retail displays',
    tagline: 'PREMIUM SHOPPING MALL RETAIL INSTALLATIONS',
    description: 'Elevate luxury atria and premium shopping corridors with floating billboard arches, curved pillar columns, or super high-brightness dual-sided banner displays.',
    image: heroMallImg,
    badge: 'LUXURY RETAIL ATRIUMS',
    accentColor: 'from-purple-500 to-pink-500',
    meta: { size: 'Floating Curved', pitch: 'P1.8 - P2.5', tech: 'Flexible Flex-Fit' }
  },
  {
    id: 'slide-3',
    heading: 'Gigantic Sky-High Billboard Titans',
    tagline: 'HIGH-TRAFFIC METROPOLITAN WEATHERPROOF MEDIA',
    description: 'Command urban skylines and high-ways with bulletproof double-sided structures capable of exceeding 7,500 nits for pristine legibility under intense scorching solar rays.',
    image: heroOutdoorImg,
    badge: 'DRAMATIC SKYSCRAPER SITES',
    accentColor: 'from-blue-600 to-indigo-500',
    meta: { size: 'Up to 300 SQM', pitch: 'P4.0 - P8.0', tech: 'Common Cathode Power' }
  }
];

export const PRODUCTS: LedDisplayProduct[] = [
  {
    id: 'sgl-onyx',
    name: 'SGL Onyx Series',
    series: 'Corporate',
    tagline: 'Supreme Fine Pitch Command & Lobby Wall',
    description: 'Crafted for close-range visual dominance. Utilizing next-generation Chip-on-Board (COB) technology for deep, velvet-grade blacks, superior physical protection, and flawless matte finish.',
    pitches: [0.9, 1.2, 1.5, 1.8],
    brightness: '600 - 1,200 nits (Adjustable)',
    refreshRate: '7,680 Hz Ultra-Fluid',
    cabinetSize: '600mm x 337.5mm (Cinematic 16:9 Aspect)',
    ipRating: 'IP30 Dustproof',
    costFactor: 8500, // Cost indicator per square meter (approx in RM)
    features: [
      'COB (Chip on Board) encapsulation for impact, dust, and anti-static defense',
      'HDR10+ true color processing & 22-bit grayscale depth',
      'Complete modular front-service access via vacuum extraction tools',
      'Direct-to-wall precision structural coupling, no heavy sub-frame needed'
    ]
  },
  {
    id: 'sgl-horizon',
    name: 'SGL Horizon Series',
    series: 'Retail',
    tagline: 'Creative Curving & Atrium Floating Screen',
    description: 'Unleash architecture. Horizon is built with dynamic modular cabinets that curve seamlessly in concave or convex profiles, specialized for retail centers and flagship experiential showrooms.',
    pitches: [1.8, 2.0, 2.5, 3.0],
    brightness: '1,500 - 2,200 nits High-contrast',
    refreshRate: '3,840 Hz High-refresh',
    cabinetSize: '500mm x 500mm or Custom Curving Segment',
    ipRating: 'IP40 Front / IP30 Rear',
    costFactor: 5800,
    features: [
      'Ultra lightweight aluminum alloy frames (only 5.8kg per panel)',
      'Intelligent angle joints supporting 15° step-less curving customization',
      'Dual self-correcting video card signals with auto-failover mechanics',
      'Perfect color consistency under wide 160° horizontal viewing angles'
    ]
  },
  {
    id: 'sgl-titan',
    name: 'SGL Titan Series',
    series: 'Outdoor',
    tagline: 'Shatter-proof Heavy Outdoor Digital Billboard',
    description: 'Engineered to withstand equatorial climates. The Titan features Common Cathode energy topology, ensuring 30% lower temperatures, massive energy savings, and spectacular 7,500 nits daytime luminance.',
    pitches: [4.0, 5.0, 6.0, 8.0],
    brightness: '6,500 - 8,000 nits High-luminance',
    refreshRate: '3,840 Hz Standard',
    cabinetSize: '960mm x 960mm magnesium-alloy heavy structural shell',
    ipRating: 'IP65 Waterproof All-Weather',
    costFactor: 4200,
    features: [
      'Industrial-grade IP65 weatherproof seals against extreme tropical rainstorms',
      'Exclusive Common Cathode circuit architecture reducing core operating heat',
      'Built-in brightness sensor with auto-dimming depending on ambient sunlight',
      'No air-conditioning needed - convective heat dissipation columns'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-std-stanchart',
    title: 'Standard Chartered Executive Lobby Wall',
    client: 'Standard Chartered Global Corporate Bank',
    location: 'Kuala Lumpur Financial District',
    series: 'Corporate',
    imageType: 'indoor',
    size: '8.4m x 3.375m (28.35 sqm)',
    pitch: 'P1.2',
    resolution: '6,720 x 2,700 Pixels (UHD Master Display)',
    totalCost: 'RM 320,000',
    description: 'Installed a continuous, ultra-fine pixel pitch SGL Onyx LED display in the banking lobby, rendering real-time financial analytics, premium corporate branded video loops, and live greetings.',
    challenge: 'The architectural lobby boasts dual-aspect full glass facades, resulting in glare. Standard screens were overly reflective or washed-out under intense Malaysian daylight.',
    solution: 'Engineered SGL Onyx COB with high-nit customized calibrated output up to 1,200 nits, layered with a special anti-glare micro-diffuser cover that eliminates glare while maintaining deep black contrast.'
  },
  {
    id: 'case-std-avenuek',
    title: 'Avenue K Floating Atrium Ribbon Display',
    client: 'Avenue K Luxury Retail Mall',
    location: 'Opposite Petronas Twin Towers, KLCC',
    series: 'Retail',
    imageType: 'mall',
    size: '15m x 4.5m (67.5 sqm)',
    pitch: 'P2.0',
    resolution: '7,500 x 2,250 Pixels (Sinuous Curved Display)',
    totalCost: 'RM 480,000',
    description: 'A spectacular concave curving LED screen suspended vertically on high-strength aircraft cables inside the main multi-storey mall atrium, captivating shoppers with fashion campaigns.',
    challenge: 'Extremely tight load limits on the historical roof framework. Installing traditional heavy iron cabinets was structurally impossible.',
    solution: 'Designed custom ultralight structural magnesium-carbon SGL Horizon cabinets, totaling just 14kg/sqm with frame. Engineered custom bracket lines to align sections cleanly to the structural columns.'
  },
  {
    id: 'case-std-bintang',
    title: 'Bukit Bintang Digital Landmark Billboard',
    client: 'City Centre Outdoor Media Corp',
    location: 'Jalan Bukit Bintang High Traffic Crossing',
    series: 'Outdoor',
    imageType: 'outdoor',
    size: '18m x 10m (180 sqm)',
    pitch: 'P5.0',
    resolution: '3,600 x 2,000 Pixels (Extreme Outdoor Giant)',
    totalCost: 'RM 980,000',
    description: 'An iconic digital billboard mounted 15m above the most congested street pedestrian crossing in Malaysia, yielding 4.2 million weekly visual impressions for tier-1 luxury fashion and auto brands.',
    challenge: 'High equatorial heat exceeding 38°C on clear afternoons, paired with flash monsoon cloudbursts, demanding reliable 24/7/365 uninterrupted thermal defense.',
    solution: 'Deployed the SGL Titan Series with Common Cathode power configuration. This maintained screen running temperatures 14°C lower than typical standard LEDs, avoiding heat degradation without heavy energy costs.'
  }
];

export const TECHNICAL_USPs = [
  {
    title: 'True Common Cathode Technology',
    subtitle: 'High energy conservation',
    description: 'Traditional screens supply power to Red, Green, and Blue diodes concurrently at 5V, wasting massive heat on variables. Our Common Cathode separate-rail design feeds Green/Blue at 2.8V and Red at 1.8V, slashing operating heat by 35% and saving 30% on electricity bills.',
    metric: '-30%',
    metricLabel: 'Power Savings'
  },
  {
    title: 'Next-Generation COB Encapsulation',
    subtitle: 'Unrivaled physical protection',
    description: 'By shifting from surface-mount (SMD) to Chip-on-Board (COB) technology, the micro-LED chips are soldered directly flat onto the printed PCB, then sealed in an optically clear protective polymer. This results in ultimate liquid, impact, scratch, and static safety.',
    metric: '4H',
    metricLabel: 'Surface Hardness'
  },
  {
    title: '7,680 Hz Refresh Rate Dynamic Control',
    subtitle: 'Zero flicker, zero scanning lines',
    description: 'Equipped with elite premium double-buffered driver chips. SGL Onyx delivers a majestic 7,680Hz refresh rate. Whether filmed on premium high-frame-rate commercial cameras, mobile phones, or viewed live, the picture is completely grain-free, seamless, and high-fidelity.',
    metric: '7,680 Hz',
    metricLabel: 'Refresh Rate'
  }
];
