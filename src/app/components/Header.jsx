import Link from "next/link";

const Links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Tickets",
    href: "/tickets",
  },
  {
    label: "Messages",
    href: "/messages",
  },
];

export default function Header() {
  return (
    <header className="text-slate-100 bg-slate-950 py-3 px-4 flex justify-evenly font-semibold text-xl">
      {Links.map(({ label, href }) => {
        return (
          <Link key={label} href={href}>
            {label}
          </Link>
        );
      })}
    </header>
  );
}
