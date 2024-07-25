import { useMemo } from "react";
import { DesktopNavItem } from "@/components/Header/NavItem";
import { NavigationItemProps } from "@/components/Header/types";
import {
  LoginNavItem,
  SignupNavItem,
} from "../../NavItem/Desktop/DesktopNavItem";

export interface DesktopNavigationProps {
  navigation: NavigationItemProps[];
  activeTab: string;
  handleClickNavigationItem: (navKey: string) => void;
}

export function DesktopNavigation(props: DesktopNavigationProps) {
  const navItems = useMemo(() => {
    return props.navigation.map((item, i) => (
      <DesktopNavItem
        key={i}
        onClick={() => props.handleClickNavigationItem(item.navKey)}
        isActive={props.activeTab === item.navKey}
        {...item}
      />
    ));
  }, [props.navigation, props.activeTab, props.handleClickNavigationItem]);

  return (
    <nav aria-label="Navigation" className="hidden h-full w-full xl:block">
      <ul
        aria-label="Navigation"
        role="menubar"
        className="flex h-full items-center list-none m-0 p-0"
      >
        {navItems}
        <LoginNavItem />
        <SignupNavItem />
      </ul>
    </nav>
  );
}
