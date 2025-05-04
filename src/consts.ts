import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Prodipta Roy",
  DESCRIPTION: "B.A. LL.B. (Hons.) student specializing in Intellectual Property Rights, Alternative Dispute Resolution, and Business Law",
  AUTHOR: "Prodipta Roy",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "My professional experience and internships.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Writing",
  DESCRIPTION: "Legal articles and research publications.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Legal research projects and case studies.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experience", 
    HREF: "/work", 
  },
  { 
    TEXT: "Writing", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "prodiptaroy@gmail.com",
    HREF: "mailto:prodiptaroy@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "prodipta-roy",
    HREF: "https://www.linkedin.com/in/prodipta-roy/",
  },
  { 
    NAME: "Website",
    ICON: "globe",
    TEXT: "www.prodiptaroy.space",
    HREF: "http://www.prodiptaroy.space",
  },
  { 
    NAME: "Phone",
    ICON: "phone",
    TEXT: "+91-9073773098",
    HREF: "tel:+919073773098",
  },
]

