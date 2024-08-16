import { Vortex } from "@/components/AnimatedBG/Vortex";
import { WavyBackground } from "@/components/AnimatedBG/Wavy";
import { Column, Container, Grid } from "@/components/Foundations";
import { Transition } from "@/components/Transition";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Transition>
      <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          rangeSpeed={0.5}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <section className="block w-full ">
            <Container className="flex flex-col xl:flex-row">
              <Grid>
                <Column columns={{ "": 12, "xl:": 6 }}>
                  <div>
                    <h2
                      id="whoweare"
                      className="text-4xl mb-8 mt-8 text-left uppercase text-white"
                    >
                      who we are
                    </h2>
                    <p className="text-left text-white">
                      The Monday Group is a distinguished multi-family office
                      dedicated to addressing the unique financial needs and
                      aspirations of high-net-worth individuals and families.
                      Committed to excellence and focused on wealth
                      preservation, we specialize in managing and growing wealth
                      across diverse investment avenues. Our extensive portfolio
                      spans public and private markets, including real estate,
                      infrastructure, venture capital, and early-stage
                      companies.
                    </p>

                    <p className="mt-8 text-left text-white">
                      For inquiries please email{" "}
                      <b>
                        <u>
                          <a href="mailto:danh@themondaygroup.net?">
                            danh@themondaygroup.net
                          </a>
                        </u>
                      </b>
                    </p>
                  </div>
                </Column>
              </Grid>
            </Container>
          </section>
        </Vortex>
      </div>
    </Transition>
  );
}
