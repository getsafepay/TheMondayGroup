"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import useScrollPosition from "@react-hook/window-scroll";
import { DesktopNavigation, MobileNavigation } from "./Navigation";
import { NavigationItemProps } from "./types";
import { Column, Container, Grid } from "../Foundations";
import { useRouter, usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { mergeClasses } from "@/helpers/mergeClasses";
import { breakpoints } from "@/helpers/breakpoints";
import { useOutsideClick } from "@/hooks/useClickOutside";
import { getViewportSize } from "@/helpers/viewPortSize";
import { BurgerIcon } from "../Burger";
import { Logo } from "../Logo";
import { createClient } from "@/utils/supabase/client";

export interface HeaderProps {
  navigation: NavigationItemProps[];
}

export function Header(props: HeaderProps) {
  const pathname = usePathname();
  const scrollDirection = useDetectScroll();
  const scrollPosition = useScrollPosition();
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
  const [user, setUser] = useState<any>(undefined);
  const [userBasedNav, setUserBasedNav] = useState<Array<NavigationItemProps>>(
    []
  );
  const supabase = createClient();
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  useEffect(() => {
    if (!user) {
      setUserBasedNav([]);
      return;
    }
    if (user?.user_metadata.isAdmin) {
      setUserBasedNav(navigation);
      return;
    }
    if (!user.user_metadata.isAdmin) {
      setUserBasedNav(
        navigation.filter(
          (item: NavigationItemProps) => item.adminOnly === false
        )
      );
      return;
    }
  }, [user]);

  useEffect(() => {
    getUser();
    setActiveTab("");
    setMobileMenuVisible(false);
  }, [pathname]);

  const handleClickDesktopNavigationItem = useCallback(
    (navKey: string) => {
      const item = navigation.find((item) => item.navKey === navKey);

      if (activeTab === navKey) {
        setActiveTab("");
      } else if (item && item.href) {
        setActiveTab("");
        router.push(item.href);
      } else {
        setActiveTab(navKey);
      }
    },
    [activeTab]
  );

  const handleClickMobileMenuButton = useCallback(() => {
    setMobileMenuVisible(!isMobileMenuVisible);
    setActiveTab("");
  }, [props, isMobileMenuVisible]);

  const handleResize = () => {
    if (getViewportSize().width >= breakpoints.large) {
      setMobileMenuVisible(false);
      setActiveTab("");
    }
  };

  const showHeader = useMemo(() => {
    return (
      scrollDirection.scrollDir === Direction.Up ||
      isMobileMenuVisible ||
      scrollPosition === 0
    );
  }, [scrollDirection, isMobileMenuVisible, scrollPosition]);

  const fixHeader = useMemo(() => {
    return scrollPosition > 0 || isMobileMenuVisible;
  }, [scrollPosition, isMobileMenuVisible]);

  useEffect(() => {
    if (!showHeader) {
      setActiveTab("");
    }
  }, [showHeader]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const ref = useOutsideClick(() => {
    setActiveTab("");
    setMobileMenuVisible(false);
  });

  return (
    <header
      ref={ref}
      className={mergeClasses(
        "h-20 w-full z-20 transition-all transparent bg-white border-b",
        // showHeader ? "translate-y-0" : "-translate-y-full",
        fixHeader ? "fixed" : "absolute"
        // scrollPosition > 0
        //   ? "bg-black/20 backdrop-blur-sm"
        //   : "bg-black/20 backdrop-blur-sm"
      )}
    >
      <section className="h-full block">
        <Container className="flex items-center h-20">
          <Grid>
            <Column display={{ "": "flex" }}>
              <div className="flex items-center h-full z-20">
                <Logo />
              </div>
              <div className="h-full relative w-full">
                <DesktopNavigation
                  navigation={userBasedNav}
                  handleClickNavigationItem={handleClickDesktopNavigationItem}
                  activeTab={activeTab}
                  isUserLoggedIn={user ? true : false}
                />
                <div className="flex justify-end xl:hidden">
                  <button
                    className="flex items-center h-12 z-20 transition p-0.5"
                    onClick={handleClickMobileMenuButton}
                  >
                    <BurgerIcon active={isMobileMenuVisible} />
                  </button>
                  <MobileNavigation
                    visible={isMobileMenuVisible}
                    navigation={userBasedNav}
                    activeTab={activeTab}
                    handleClickShowNavigationItem={
                      handleClickDesktopNavigationItem
                    }
                    handleClickHideNavigationItem={
                      handleClickDesktopNavigationItem
                    }
                    isUserLoggedIn={user ? true : false}
                  />
                </div>
              </div>
            </Column>
          </Grid>
        </Container>
      </section>
    </header>
  );
}
