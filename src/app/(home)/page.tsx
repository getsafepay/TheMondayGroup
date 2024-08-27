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
        <div className="bg-gradient-to-r from-blue-last-gradient  via-TMG-blue to-indigo-500  h-[44%] w-[200%] bg-black -skew-y-12  absolute z-30 -bottom-32 md:-bottom-20 -left-40 right-40 after:rotate-12"></div>
      </div>
      <div className="h-screen w-full dark:bg-black bg-gray-200  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>{" "}
        <section className="block w-full pt-14 z-50">
          <Container className="flex flex-col xl:flex-row">
            <Grid>
              <Column columns={{ "": 12, "xl:": 7 }}>
                <div>
                  <p className="text-justify">
                    The Monday Group is a multi-family office dedicated to
                    meeting the unique financial needs of high-net-worth
                    individuals and families. Prioritizing wealth preservation
                    and growth, our portfolio encompasses investments across
                    private and public markets, real estate, infrastructure, and
                    venture capital.
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
      </div>
    </Transition>
  );
}
