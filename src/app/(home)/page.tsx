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
      <div className="h-screen w-screen bg-black overflow-hidden absolute">
        <div className="bg-gradient-to-r from-indigo-500  via-blue-mid-gradient to-blue-last-gradient  h-[44%] w-[200%] bg-black -skew-y-12  absolute z-30 -bottom-20 -left-40 right-20 after:rotate-12"></div>
        {/* -bottom-4 -right-10 */}
      </div>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>{" "}
        {/* <WavyBackground
          backgroundFill="white"
          // containerClassName="bg-slate-100 overflow-hidden"
          className="h-full block"
          blur={0}
        > */}
        <section className="block w-full pt-32 z-50">
          <Container className="flex flex-col xl:flex-row">
            <Grid>
              <Column columns={{ "": 12, "xl:": 6 }}>
                <div>
                  <h2
                    id="whoweare"
                    className="text-4xl mb-8 mt-8 text-left uppercase"
                  >
                    who we are
                  </h2>
                  <p className="text-left">
                    The Monday Group is a distinguished multi-family office
                    dedicated to addressing the unique financial needs and
                    aspirations of high-net-worth individuals and families.
                    Committed to excellence and focused on wealth preservation,
                    we specialize in managing and growing wealth across diverse
                    investment avenues. Our extensive portfolio spans public and
                    private markets, including real estate, infrastructure,
                    venture capital, and early-stage companies.
                  </p>

                  <p className="mt-8 text-left">
                    For inquiries please email:{" "}
                    <b>
                      <u>
                        <a
                          href="mailto:danh@themondaygroup.net?"
                          className="font-normal"
                        >
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
        {/* </WavyBackground> */}
      </div>
    </Transition>
  );
}
