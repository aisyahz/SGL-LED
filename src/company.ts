export const COMPANY = {
  name: 'SGL International LED Sdn Bhd',
  contactName: 'Daniel T',
  contactPosition: 'Managing Director',
  phoneDisplay: '010 425 7824',
  phoneLink: '+60104257824',
  whatsappNumber: '60104257824',
  email: 'daniel6688@sglled.com',
  website: 'https://sglled.com/',
  streetAddress: '26 Jalan Airport City 2, Kota Warisan',
  addressLocality: 'Bandar Baru Salak Tinggi',
  postalCode: '43900',
  addressRegion: 'Selangor',
  addressCountry: 'MY',
} as const;

export const COMPANY_ADDRESS = `${COMPANY.streetAddress}, ${COMPANY.postalCode} ${COMPANY.addressLocality}, ${COMPANY.addressRegion}, Malaysia`;

export const COMPANY_WHATSAPP_URL = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
  `Hello ${COMPANY.name}, I would like to request a quotation for an LED display.`
)}`;

export const COMPANY_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS)}&output=embed`;
