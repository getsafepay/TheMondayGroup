import { NavigationItemProps } from "@/components/Header/types";

export const navigation: NavigationItemProps[] = [
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
];
