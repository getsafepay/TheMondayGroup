export interface SubNavigationGroupItemProps {
  title: string;
  description: string;
  href: string;
  openInNewTab?: boolean;
}

export interface SubNavigationGroupProps {
  groupTitle: string;
  groupItems: SubNavigationGroupItemProps[];
}

export interface SubNavigationProps {
  title: string;
  description: string;
  subNavItems: SubNavigationGroupProps[];
}

export interface NavigationItemProps {
  title: string;
  navKey: string;
  href?: string;
  subNav?: SubNavigationProps;
}
