interface NavLink {
  id: number;
  title: string;
  redirect_url: string;
}

export const NavLinks: NavLink[] = [
  {
    id: 1,
    title: "home",
    redirect_url: "/",
  },
  {
    id: 2,
    title: "about us",
    redirect_url: "/about",
  },
  {
    id: 3,
    title: "contact us",
    redirect_url: "/contact",
  },
  {
    id: 4,
    title: "privacy policy",
    redirect_url: "/privacy",
  },
  {
    id: 5,
    title: "terms of use",
    redirect_url: "/terms",
  },
];
