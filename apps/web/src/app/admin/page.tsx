"use client";

import { type RefObject, useRef } from "react";
import { useMap } from "../../hooks/useMap";

export function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef);
  //useMap(mapContainerRef as RefObject<HTMLDivElement>);

  return <div className="h-full w-full" ref={mapContainerRef} />;
}

export default AdminPage;