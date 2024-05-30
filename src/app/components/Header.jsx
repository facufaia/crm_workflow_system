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
    <header className="bg-white text-black py-1 px-4 flex justify-evenly font-semibold">
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
