import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="mt-28 bg-brand-cream border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-3 text-base md:text-lg font-medium">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-brand-green transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-green font-semibold">
                    {item.label}
                  </span>
                )}

                {index < items.length - 1 && (
                  <span className="text-brand-gold text-lg select-none">
                    /
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
