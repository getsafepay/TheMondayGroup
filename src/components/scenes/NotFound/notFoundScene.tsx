"use client";
import Image from "next/image";
// import { Column, Container, Grid } from "@/interface/components/Foundations";
// import { Heading, Paragraph } from "@/interface/components/Typography";
// import { NotFoundIcon } from "@/interface/components/Icons";

export function NotFoundScene() {
  return (
    <div className="pt-0 w-full">
      <div>Page not found</div>
      {/* <Container>
        <Grid justify={{ "": "center" }}>
          <Column
            display={{ "": "flex" }}
            columns={{
              "": 12,
              "md:": 8,
            }}
            className="flex-col items-center py-12 md:py-24 px-12 text-center"
          >
            <NotFoundIcon />
            <Heading
              tag="h1"
              size="heading-4xl"
              alignment="center"
              className="pt-6"
            >
              404, page not found
            </Heading>
            <Paragraph size="text-lg" alignment="center" className="pt-6">
              The page you were looking for could not be found. We may have
              deleted or moved this page. Or the link never existed.
            </Paragraph>
          </Column>
        </Grid>
      </Container> */}
    </div>
  );
}
