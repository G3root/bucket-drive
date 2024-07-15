import { NavLink } from "@remix-run/react";
import clsx from "clsx";

type NavLinks = {
  label: string;
  to: string;
};

const NavLinks: NavLinks[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Settings",
    to: "/settings",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {NavLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                "transition-colors hover:text-foreground",
                isActive ? "text-foreground" : "text-muted-foreground"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
