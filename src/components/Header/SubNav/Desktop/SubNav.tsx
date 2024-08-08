import { useMemo } from "react";
import { DesktopSubNavGroup } from "./Group";
import { SubNavigationGroupProps } from "../../types";
import { Column, Grid } from "@/components/Foundations";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Heading } from "@/components/Typography/Heading";

export interface DesktopSubNavProps {
  title: string;
  description: string;
  subNavItems: SubNavigationGroupProps[];
}

export function DesktopSubNav(props: DesktopSubNavProps) {
  const items = useMemo(() => {
    return props.subNavItems.map((item, i) => (
      <DesktopSubNavGroup key={i} {...item} />
    ));
  }, [props.subNavItems]);

  return (
    <Grid>
      <Column
        columns={{
          "": 3,
        }}
        className="pt-9 pr-16 pb-12 pl-3"
      >
        <Heading tag="h4" size="heading-2xl">
          {props.title}
        </Heading>
        <Paragraph size="text-base" className="mt-3">
          {props.description}
        </Paragraph>
      </Column>
      {items}
    </Grid>
  );
}
