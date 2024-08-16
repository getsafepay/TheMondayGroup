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
      <WavyBackground
        backgroundFill="white"
        // containerClassName="bg-slate-100 overflow-hidden"
        className="h-full block"
        blur={0}
      >
        <section className="block w-full pt-32">
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
      </WavyBackground>
    </Transition>
  );
}
