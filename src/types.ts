export interface LedDisplayProduct {
  id: string;
  name: string;
  series: 'Corporate' | 'Retail' | 'Outdoor';
  tagline: string;
  pitches: number[]; // e.g. [1.2, 1.5, 1.8] in mm
  brightness: string; // e.g., "1,200 nits"
  refreshRate: string; // e.g., "3,840 Hz" or "7,680 Hz"
  cabinetSize: string; // e.g., "600x337.5mm" or "500x500mm"
  ipRating: string; // e.g., "IP30" or "IP65"
  costFactor: number; // For demo calculations
  description: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  clientType: string;
  location: string;
  series: 'Corporate' | 'Retail' | 'Outdoor';
  imageType: 'indoor' | 'mall' | 'outdoor';
  size: string; // e.g., "12m x 4.5m"
  pitch: string; // e.g., "P1.5"
  resolution: string; // e.g., "8K UHD"
  totalCost: string; // e.g., "RM 380,000"
  description: string;
  objective: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface CalculatorState {
  pitch: number;
  widthMeters: number;
  heightMeters: number;
  cabinetType: string;
  customPitch: boolean;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  width: number;
  height: number;
  pitch: number;
  message: string;
}
