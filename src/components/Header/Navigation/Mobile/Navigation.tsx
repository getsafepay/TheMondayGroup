import { useMemo } from "react";
import { mergeClasses } from "@/helpers/mergeClasses";
import { NavigationItemProps } from "@/components/Header/types";
import { MobileNavItem } from "@/components/Header/NavItem";
import {
  LoginNavItem,
  ProfileNavItem,
  SignupNavItem,
} from "../../NavItem/Mobile/MobileNavItem";
import AuthBtn from "@/components/auth/AuthBtn";

export interface MobileNavProps {
  navigation: NavigationItemProps[];
  activeTab: string;
  visible: boolean;
  handleClickShowNavigationItem: (navKey: string) => void;
  handleClickHideNavigationItem: (navKey: string) => void;
  isUserLoggedIn: boolean | null;
}

export function MobileNavigation(props: MobileNavProps) {
  const navItems = useMemo(() => {
    return props.navigation.map((item, i) => (
      <MobileNavItem
        key={i}
        isActive={props.activeTab === item.navKey}
        onClickBack={() => props.handleClickHideNavigationItem(item.navKey)}
        onClick={() => props.handleClickShowNavigationItem(item.navKey)}
        {...item}
      />
    ));
  }, [
    props.navigation,
    props.activeTab,
    props.handleClickHideNavigationItem,
    props.handleClickShowNavigationItem,
  ]);

  return (
    <div
      className={mergeClasses(
        "w-0 translate-x-full transition-all duration-300 bg-white h-screen overflow-hidden fixed top-0 right-0 z-10",
        "shadow-[-12px_24px_24px_0px_rgba(0,17,44,0.1)]",
        props.visible && "translate-x-0 w-full md:w-[420px]"
      )}
    >
      <nav className="w-full mt-20 h-full md:w-[420px]">
        <ul className="bg-white h-full w-full list-none">
          {navItems}
          {props.isUserLoggedIn ? <></> : <LoginNavItem />}
          {props.isUserLoggedIn ? <ProfileNavItem /> : <></>}
        </ul>
      </nav>
    </div>
  );
}
