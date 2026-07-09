import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IconRail } from "./IconRail";
import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";

/**
 * Authenticated app shell — official enterprise layout:
 *  - floating icon-only rail on the left (desktop)
 *  - slide-in drawer on mobile
 *  - sticky white top bar with border + shadow
 *  - grey canvas content area
 */
export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-canvas">
      {/* Desktop icon rail */}
      <div className="hidden shrink-0 pl-3 lg:flex">
        <IconRail />
      </div>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full animate-[slidein_.25s_ease]">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main column */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Sticky white top bar */}
        <div className="shrink-0 border-b border-line bg-surface px-4 py-3 md:px-6 md:py-3.5"
             style={{ boxShadow: "0 1px 0 #e5e7eb, 0 2px 8px -4px rgba(17,24,39,0.06)" }}>
          <TopNav onMenuClick={() => setMobileOpen(true)} />
        </div>
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-6 md:py-7">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
