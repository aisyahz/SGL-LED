import { LedDisplayProduct, CaseStudy } from './types';

// Importing our newly generated high-fidelity hero images
import heroIndoorImg from './assets/images/hero_indoor_led_1781800789276.jpg';
import heroMallImg from './assets/images/hero_mall_led_1781800803946.jpg';
import heroOutdoorImg from './assets/images/hero_outdoor_billboard_1781800816748.jpg';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    heading: "Enhanced Visitor Experience",
    tagline: 'ENGINEERED IN MALAYSIA. INSTALLED NATIONWIDE.',
    description: 'Professional indoor LED displays designed to engage, convert, and inspire. Serving corporate offices, universities, churches, and restaurants across Malaysia with local Kuala Lumpur support teams and 48-hour standby response.',
    image: heroIndoorImg,
    badge: 'ENHANCED VISITOR EXPERIENCE',
    accentColor: 'from-cyan-500 to-blue-500',
    meta: { size: 'Custom Indoor Sets', pitch: 'P1.86', tech: 'Lobbies & Auditoriums' },
    industry: 'Corporate Reception, Schools, Premium Restaurants, Worship Houses',
    useCase: 'Welcoming lobbies, immersive workspaces, elegant dining halls, digital signage',
    benefit: 'Command absolute attention, bolster operational prestige, and deliver clear, striking communication'
  },
  {
    id: 'slide-2',
    heading: 'Maximized Ad Revenue',
    tagline: 'TRUSTED BY MALAYSIAN COMMERCE & SHOPPING MALLS',
    description: 'Transform commercial foot traffic into highly profitable sponsor visibility. Suspended atrium ribbons, curving column wraps, and digital entrance portals engineered to secure top-tier advertising rates nationwide.',
    image: heroMallImg,
    badge: 'MAXIMIZED AD REVENUE',
    accentColor: 'from-purple-500 to-pink-500',
    meta: { size: 'Floating ribbons', pitch: 'P2.5', tech: 'Atriums & Store Fronts' },
    industry: 'Shopping Malls, Flagship Retailers, Commercial Property Developers',
    useCase: 'Curved architectural ribbons, suspended central atriums, focal main lobbies',
    benefit: 'Increase direct advertising sales, boost visitor dwell times, and secure lucrative premium sponsor leases'
  },
  {
    id: 'slide-3',
    heading: 'Reliable 24/7 Performance',
    tagline: 'INTERNATIONAL QUALITY. MALAYSIAN SUPPORT.',
    description: 'Shatter-proof weatherproof outdoor billboards and indoor command centers designed for tropical microclimates. Deployed on energy-saving circuit systems with a full 24-month local warranty.',
    image: heroOutdoorImg,
    badge: 'RELIABLE 24/7 PERFORMANCE',
    accentColor: 'from-blue-600 to-indigo-500',
    meta: { size: 'Up to 300 SQM', pitch: 'P4 Waterproof', tech: 'Boardrooms & Live Staging' },
    industry: 'Boardrooms, High-Traffic Highways, Stage Halls, Public Centers',
    useCase: 'Weatherproof high-nit billboards, 24/7 command displays, premium conference walls',
    benefit: 'Guarantee camera-flicker-free visual continuity, lower power consumption, and provide 24-month local parts support'
  }
];

export const PRICING_PRODUCTS = {
  Corporate: {
    productName: 'P1.86 Indoor Led Display',
    pitch: 1.86,
    ratePerSqm: 3200
  },
  Retail: {
    productName: 'P2.5 Indoor Led Display',
    pitch: 2.5,
    ratePerSqm: 2800
  },
  Outdoor: {
    productName: 'P4 Led Display Water Proof',
    pitch: 4.0,
    ratePerSqm: 3500
  }
} as const;

export const PRODUCTS: LedDisplayProduct[] = [
  {
    id: 'sgl-onyx',
    name: PRICING_PRODUCTS.Corporate.productName,
    series: 'Corporate',
    tagline: 'PRESTIGE CORPORATE LOBBIES & RESTAURANTS',
    description: 'Designed for close-range visual elegance. Perfect for corporate headquarters, VIP boardrooms, and premium restaurant feature walls. Proclaim brand authority and inspire visiting clients with deep, true-color imagery that remains eye-safe and completely glare-free.',
    pitches: [PRICING_PRODUCTS.Corporate.pitch],
    brightness: '600 - 1,200 nits (Daylight Adjustable)',
    refreshRate: '7,680 Hz Studio-Fluent',
    cabinetSize: '600mm x 337.5mm (Cinematic 16:9 Aspect)',
    ipRating: 'IP30 Indoor Dustproof',
    costFactor: PRICING_PRODUCTS.Corporate.ratePerSqm,
    features: [
      'Next-Gen COB panel coating - waterproof, scratchproof, and dustproof',
      'Ultra-fine pixel pitch optimized for comfortable, close-range indoor reading',
      'Vacuum tool micro front-service access for near-zero maintenance downtime',
      'Pre-calibrated 22-bit deep colors to perfectly represent premium brand assets'
    ]
  },
  {
    id: 'sgl-horizon',
    name: PRICING_PRODUCTS.Retail.productName,
    series: 'Retail',
    tagline: 'SHOPPING MALL ATRIUMS & CREATIVE SPACES',
    description: 'Flexible, curving digital sheets engineered to flow around columns and float inside multi-storey shopping mall atriums. Drive elite consumer foot traffic, extend viewer dwell times, and secure lucrative advertising partnerships with premier retail labels.',
    pitches: [PRICING_PRODUCTS.Retail.pitch],
    brightness: '1,500 - 2,200 nits High-contrast',
    refreshRate: '3,840 Hz Standard',
    cabinetSize: '500mm x 500mm or Custom Curving Segment',
    ipRating: 'IP40 Front / IP30 Rear',
    costFactor: PRICING_PRODUCTS.Retail.ratePerSqm,
    features: [
      'Ultra-light magnesium alloy segments (only 5.8kg) - safe for roof suspension',
      'Step-less angle joints supporting curving configurations (+/- 15°)',
      'Dual self-correcting receiver cards for continuous zero-interruption display',
      'Super-wide 160° viewing angles capturing traffic from every approach'
    ]
  },
  {
    id: 'sgl-titan',
    name: PRICING_PRODUCTS.Outdoor.productName,
    series: 'Outdoor',
    tagline: 'METROPOLITAN WEATHERPROOF OUTDOOR BILLBOARDS',
    description: 'Highly robust, convective-cooled outdoor billboard titans built for the harsh tropical Malaysian climate. Secure high-impact visibility along congested ring roads and highways to generate millions of weekly advertiser impressions.',
    pitches: [PRICING_PRODUCTS.Outdoor.pitch],
    brightness: '6,500 - 8,000 nits Scorching-Sun Ready',
    refreshRate: '3,840 Hz Dynamic',
    cabinetSize: '960mm x 960mm magnesium-alloy heavy structural shell',
    ipRating: 'IP65 All-Weather Waterproof',
    costFactor: PRICING_PRODUCTS.Outdoor.ratePerSqm,
    features: [
      'Genuine IP65 fully weatherproof seals defending against flash tropical storms',
      'Energy-saving Common Cathode topology slashes monthly electric power bills by 30%',
      'Daylight optical sensors dynamically dim brightness to match night curfew rules',
      'Fan-free natural convection cooling columns - no corporate AC cooling required'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-std-stanchart',
    title: 'Executive Corporate Lobby Wall',
    client: 'Standard Chartered Global Corporate Bank',
    clientType: 'Corporate Offices / Financial Institution',
    location: 'Kuala Lumpur Financial District',
    series: 'Corporate',
    imageType: 'indoor',
    size: '8.4m x 3.375m (28.35 sqm)',
    pitch: 'P1.2',
    resolution: '6,720 x 2,700 Pixels (UHD Master Display)',
    totalCost: 'RM 320,000',
    description: 'Installed an ultra-fine, seamless commercial lobby video wall to display global market indices, dynamic banking graphics, and strategic announcements, projecting premium corporate authority to high-profile clients.',
    objective: 'Create an immediate "wow-factor" entrance experience for high-profile clients and display real-time global banking news clearly in a sunlit reception atrium.',
    challenge: 'A high-rise lobby wall prone to severe daylight glare from multi-storey glass facades, making typical displays look washed-out and difficult to read.',
    solution: 'Designed and deployed an Onyx COB lobby screen with 1,200-nits adjustable daylight-boost, pairing it with specialized anti-reflective surface treatment that preserves contrast under intense ambient sun rays.',
    outcome: 'An iconic executive lobby centerpiece that immediately asserts brand prestige, completely eliminates daytime glare, and acts as a dynamic corporate communication hub.'
  },
  {
    id: 'case-std-avenuek',
    title: 'Avenue K Atrium Hanging Display',
    client: 'Avenue K Shopping Mall Complex',
    clientType: 'Shopping Malls & Retail Centers',
    location: 'Opposite Petronas Twin Towers, KLCC',
    series: 'Retail',
    imageType: 'mall',
    size: '15m x 4.5m (67.5 sqm)',
    pitch: 'P2.0',
    resolution: '7,500 x 2,250 Pixels (Sinuous Curved Display)',
    totalCost: 'RM 480,000',
    description: 'Suspended a majestic curved floating ribbon LED screen centrally within the multi-storey mall shopping gallery. The screen acts as an advertising landmark for premier luxury brands.',
    objective: 'Increase shopper dwell-time in core mall zones and secure highly profitable advertising leases from luxury flagship brands.',
    challenge: 'Strict mechanical overhead weight constraints on the high-ceiling glass dome, making standard heavy steel LED frames physically impossible to mount.',
    solution: 'Engineered an ultra-light carbon-composite sub-assembly using micro Horizon panels, weighing under 14kg per square meter, safely suspended via architectural steel tension-cables.',
    outcome: 'Increased visitor engagement and direct ad-revenue generation. Anchor tenants reported elevated brand visual exposure since deployment.'
  },
  {
    id: 'case-std-bintang',
    title: 'Bukit Bintang High-Traffic Landmark Billboard',
    client: 'City Centre Outdoor Media Corp',
    clientType: 'Property Developers & Billboard Operators',
    location: 'Jalan Bukit Bintang Pedestrian Crossing',
    series: 'Outdoor',
    imageType: 'outdoor',
    size: '18m x 10m (180 sqm)',
    pitch: 'P5.0',
    resolution: '3,600 x 2,000 Pixels (Extreme Outdoor Giant)',
    totalCost: 'RM 980,000',
    description: 'A spectacular weatherproof digital media billboard strategically positioned on Malaysia’s busiest commercial shopping crossing, capturing millions of weekly impressions.',
    objective: 'Command major road passenger eyes and build an absolute landmark for prime advertiser content in Kuala Lumpur’s golden triangle.',
    challenge: 'Facing extreme afternoon tropical heat up to 38°C and intense local monsoon downpours, requiring absolute rainproof sealing and active heat management.',
    solution: 'Deployed the Titan high-luminance weatherproof screen running on energy-saving Common Cathode topology, allowing natural cooling columns to dissipate heat without heavy AC utilities.',
    outcome: 'A robust, 24/7 high-luminance digital landmark with 35% lower operating costs, highly coveted by major fashion, tech, and automotive brands.'
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
