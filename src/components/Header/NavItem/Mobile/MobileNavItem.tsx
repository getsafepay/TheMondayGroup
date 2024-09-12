import { useCallback, useMemo } from "react";
import { ChevronRightIcon } from "lucide-react";
import { MobileSubNav } from "@/components/Header/SubNav";
import { SubNavigationProps } from "@/components/Header/types";
import { Button, LinkButton } from "@/components/Button";
import { LinkBase } from "@/components/Button/LinkBase";
import AuthBtn from "@/components/auth/AuthBtn";

export interface MobileNavItemProps {
  title: string;
  href?: string;
  subNav?: SubNavigationProps;
  isActive: boolean;
  onClick: () => void;
  onClickBack: () => void;
}

export function MobileNavItem(props: MobileNavItemProps) {
  const handleOnClick = useCallback(() => {
    props.onClick();
  }, [props]);

  const subNav = useMemo(() => {
    return (
      <MobileSubNav
        isVisible={props.isActive}
        onClickBack={() => props.onClickBack()}
        {...props.subNav}
      />
    );
  }, [props.subNav, props.isActive]);

  return (
    <li className=" first-of-type:pt-6 pt-4 bg-white relative px-10 text-sm ">
      <button
        onClick={props.href ? () => {} : handleOnClick}
        // href={props.href}
        //variant="primary"
        color="black"
        className=""
        // rightIcon={!props.href}
      >
        {props.title}
      </button>
      {/* <button
        onClick={handleOnClick}
        className="flex items-center justify-between w-full text-left text-default p-0.5 transform text-[32px]"
      >
        <span>{props.title}</span>
        <ChevronRightIcon size={"32px"} />
      </button> */}
      {/* {subNav} */}
    </li>
  );
}

export function SignupNavItem() {
  return (
    <li className="first-of-type:pt-6 pb-4 pt-4 relative px-6 md:px-12">
      <Button variant="primary" color="blue" className="w-full">
        Sign up
      </Button>
    </li>
  );
}

export function LoginNavItem() {
  return (
    <li className=" pb-4 pt-6 relative px-6 md:px-12">
      {/* <LinkButton variant="primary" color="black">
        Login
      </LinkButton> */}
      <LinkBase href="/login" className="underline">
        login
      </LinkBase>
    </li>
  );
}

export function ProfileNavItem() {
  return (
    <li className="first-of-type:pt-6 pb-4 pt-4 bg-white relative px-6 ">
      <div className="">
        <AuthBtn />
      </div>
    </li>
  );
}
