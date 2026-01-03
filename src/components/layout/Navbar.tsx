import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          {siteConfig.name}
        </Link>
        <ul className="flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/design-2"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Ver Diseño 2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
