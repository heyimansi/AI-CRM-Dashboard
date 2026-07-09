import { NavLink, useNavigate } from "react-router-dom";
import { Search, Bell, Menu, ChevronDown, User, LogOut, Sparkles } from "lucide-react";
import {
  Avatar,
  IconButton,
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
} from "../ui";
import { useAuth } from "../../context/AuthContext";
import { cn } from "../../lib/utils";

/* Centered text links rendered in a pill nav bar. */
const LINKS = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/leads", label: "Leads" },
  { to: "/pipeline", label: "Pipeline" },
  { to: "/contacts", label: "Contacts" },
  { to: "/tasks", label: "Follow-ups" },
];

export function TopNav({ onMenuClick }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="flex items-center gap-3 h-10">
      {/* Brand */}
      <div className="flex items-center gap-2.5 pr-2">
        <div className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-sm">
          <Sparkles className="h-[15px] w-[15px]" />
        </div>
        <span className="hidden font-display text-[15px] font-bold text-ink sm:block tracking-tight">
          TTP CRM
        </span>
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-ink-soft hover:bg-surface-muted lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Centered nav pill — white bg, border, subtle shadow */}
      <nav className="mx-auto hidden items-center gap-0.5 rounded-xl border border-line bg-surface p-1 shadow-[var(--shadow-soft)] lg:flex">
        {LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                "rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-ink-soft hover:bg-surface-muted hover:text-ink"
              )
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Right cluster */}
      <div className="ml-auto flex items-center gap-1.5">
        <IconButton aria-label="Search" className="hidden sm:inline-flex">
          <Search className="h-[17px] w-[17px]" />
        </IconButton>
        <IconButton aria-label="Notifications" className="relative">
          <Bell className="h-[17px] w-[17px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-500 ring-2 ring-surface" />
        </IconButton>

        <Dropdown
          trigger={
            <button className="flex items-center gap-2 rounded-xl border border-line bg-surface py-1 pl-1 pr-3 transition hover:bg-surface-muted">
              <Avatar name={user?.name} src={user?.avatar} size="sm" />
              <span className="hidden text-sm font-medium text-ink sm:block">
                {user?.name?.split(" ")[0]}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-ink-soft" />
            </button>
          }
        >
          <DropdownLabel>{user?.email}</DropdownLabel>
          <DropdownSeparator />
          <DropdownItem onClick={() => navigate("/settings")}>
            <User className="h-4 w-4" /> Profile & settings
          </DropdownItem>
          <DropdownItem danger onClick={logout}>
            <LogOut className="h-4 w-4" /> Log out
          </DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
}
