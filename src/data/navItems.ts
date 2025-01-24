export interface NavItem {
    href: string;
    label: string;
  }
  
  export const navItems: NavItem[] = [
    { href: "/home", label: "Home" },
    { href: "/success", label: "Success Stories" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About us" },
    { href: "/career", label: "Career" },
  ];