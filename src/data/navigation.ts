import { NavigationItemProps } from "@/components/Header/types";

export const navigation: NavigationItemProps[] = [
  {
    title: "Dashboard",
    navKey: "dashboard",
    href: "/protected/",
    adminOnly: false,
  },
  {
    title: "Posts",
    navKey: "posts",
    href: "/protected/posts",
    adminOnly: false,
  },
  {
    title: "Invite Member",
    navKey: "invite",
    href: "/protected/invite",
    adminOnly: true,
  },
  {
    title: "Profile",
    navKey: "profile",
    href: "/protected/profile",
    adminOnly: false,
  },
];
