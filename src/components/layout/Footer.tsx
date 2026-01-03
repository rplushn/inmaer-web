import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {/* Links sociales - puedes agregar más después */}
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
