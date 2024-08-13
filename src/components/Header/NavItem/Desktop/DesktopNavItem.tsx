import { useMemo } from "react";
import { mergeClasses } from "@/helpers/mergeClasses";
import { ChevronDownIcon } from "lucide-react";
import { DesktopSubNav } from "@/components/Header/SubNav";
import { SubNavigationProps } from "@/components/Header/types";
import { Container } from "@/components/Foundations";
import { Button, LinkButton } from "@/components/Button";
import { AnimatePresence, delay, motion } from "framer-motion";

export interface DesktopNavItemProps {
  title: string;
  navKey: string;
  href?: string;
  subNav?: SubNavigationProps;
  isActive?: boolean;
  onClick: () => void;
}

const variants = {
  show: {
    maxHeight: "100vh",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  hide: {
    maxHeight: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const subNavVariants = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
      delay: 0.1,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
      delay: 0.2,
    },
  },
};

export function DesktopNavItem(props: DesktopNavItemProps) {
  const subNav = useMemo(() => {
    if (!props.subNav) {
      return null;
    }
    return <DesktopSubNav {...props.subNav} />;
  }, [props.subNav]);

  return (
    <li role="none" className="flex items-center h-full m-0 p-0 ml-6">
      <div className="h-full">
        <button
          role="menuitem"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={props.onClick}
          className={mergeClasses(
            "flex items-center text-base h-20 px-1 py-0 relative border-0 bg-transparent text-white transition-shadow",
            props.isActive && `shadow-[inset_0px_3px] shadow-primary-blue`
          )}
        >
          {props.title}
          {props.subNav && (
            <ChevronDownIcon
              scale={0.75}
              size={"14px"}
              className={mergeClasses(
                "flex-none ml-3 transition-transform",
                props.isActive && "rotate-180"
              )}
            />
          )}
        </button>
        {props.subNav && (
          <AnimatePresence>
            <motion.div
              key="subnav"
              variants={variants}
              initial={false}
              animate={props.isActive ? "show" : "hide"}
              className="bg-white shadow-nav-menu fixed left-0 overflow-hidden top-20 w-full"
            >
              <motion.div
                key={"subNavMenu"}
                variants={subNavVariants}
                initial={false}
                animate={props.isActive ? "show" : "hide"}
                aria-label="Products"
                role="menu"
                className="h-full w-full"
              >
                <Container>{subNav}</Container>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </li>
  );
}

export function LoginNavItem() {
  return (
    <li
      role="none"
      className="flex items-center h-full m-0 p-0 ml-6 flex-1 justify-end"
    >
      <Button variant="primary" color="white">
        Member Login
      </Button>
    </li>
  );
}

export function SignupNavItem() {
  return (
    <li role="none" className="flex items-center h-full m-0 p-0 ml-6">
      <Button variant="primary" color="blue">
        Sign Up
      </Button>
    </li>
  );
}
