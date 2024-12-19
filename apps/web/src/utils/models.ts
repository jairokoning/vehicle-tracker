import type { DirectionsResponseData } from "@googlemaps/google-maps-services-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DirectionsData = DirectionsResponseData & { request: unknown };

export type RouteModel = {
  id: string;
  name: string;
  source: { name: string; location: { lat: number; lng: number } };
  destination: { name: string; location: { lat: number; lng: number } };
  distance: number;
  duration: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  directions: DirectionsResponseData & { request: unknown };
  created_at: Date;
  updated_at: Date;
};