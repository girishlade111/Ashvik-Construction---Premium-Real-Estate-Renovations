// FIX: Import React to fix "Cannot find namespace 'React'" error.
import React from 'react';

export type Page = 'Home' | 'Properties' | 'Services' | 'Portfolio' | 'About' | 'Contact' | 'Admin Dashboard';
export type Language = 'en' | 'mr';

export type PropertyType = 'Flat' | 'Villa' | 'Apartment';
export type ListingType = 'Buy' | 'Rent';
export type FurnishingStatus = 'Furnished' | 'Semi-Furnished' | 'Unfurnished';

export interface Property {
  id: number;
  title: { [key in Language]: string };
  location: string;
  type: PropertyType;
  listingType: ListingType;
  bhk: number;
  furnishing: FurnishingStatus;
  price: number;
  area: number; // in sqft
  images: string[];
  amenities: { [key in Language]: string[] };
  description: { [key in Language]: string };
  floorPlanUrl: string;
  brochureUrl: string;
}

export interface Project {
  id: number;
  title: { [key in Language]: string };
  location: string;
  description: { [key in Language]: string };
  beforeImage: string;
  afterImage: string;
  pdfUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: { [key in Language]: string };
  avatar: string;
}

export interface Service {
    id: number;
    title: { [key in Language]: string };
    description: { [key in Language]: string };
    icon: React.ElementType;
}

export interface Content {
    [key: string]: {
        [key in Language]: string;
    }
}
