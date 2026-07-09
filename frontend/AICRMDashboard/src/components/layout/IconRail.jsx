import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Contact2,
  KanbanSquare,
  StickyNote,
  CalendarCheck,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { useAuth } from "../../context/AuthContext";

/* Primary nav as an icon-only rail — deep indigo active state, clean white background. */
const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutGrid, end: true },
  { to: "/leads", label: "Leads", icon: Users },
  { to: "/contacts", label: "Contacts", icon: Contact2 },
  { to: "/pipeline", label: "Pipeline", icon: KanbanSquare },
  { to: "/notes", label: "Notes", icon: StickyNote },
  { to: "/tasks", label: "Follow-ups", icon: CalendarCheck },
];

function RailLink({ to, label, icon: Icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      title={label}
      className={({ isActive }) =>
        cn(
          "group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-150",
          isActive
            ? "brand-gradient text-white shadow-sm"
            : "text-ink-soft hover:bg-surface-muted hover:text-ink"
        )
      }
    >
      <Icon className="h-[18px] w-[18px]" />
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-ink px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
        {label}
      </span>
    </NavLink>
  );
}

export function IconRail() {
  const { logout } = useAuth();

  return (
    <aside className="flex h-full flex-col items-center justify-center gap-1.5 py-4">
      {/* Primary nav */}
      <nav className="flex flex-col items-center gap-1.5">
        {NAV.map((item) => (
          <RailLink key={item.to} {...item} />
        ))}
      </nav>

      {/* Divider then settings + logout */}
      <div className="my-2 h-px w-7 bg-line" />
      <RailLink to="/settings" label="Settings" icon={Settings} />
      <button
        onClick={logout}
        title="Log out"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-soft transition hover:bg-rose-50 hover:text-rose-600"
      >
        <LogOut className="h-[18px] w-[18px]" />
      </button>
    </aside>
  );
}
