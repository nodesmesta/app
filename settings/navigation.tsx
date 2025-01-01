import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://www.nodesemesta.org/",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/nodesmesta/docs",
}
