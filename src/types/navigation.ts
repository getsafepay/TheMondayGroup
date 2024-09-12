export type NavigationType = "section" | "group" | "page";

export type NavigationRoute = {
  type: NavigationType;
  name: string;
  href: string;
  as?: string;
  hidden?: boolean;
  expanded?: boolean;
  sidebarTitle?: string;
  weight?: number;
  children?: NavigationRoute[];
};

export type NavigationRouteWithSection = NavigationRoute & { section?: string };
