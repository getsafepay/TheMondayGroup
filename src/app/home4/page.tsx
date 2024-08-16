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
      <section className="h-full block">
        <div className="w-full h-screen overflow-hidden text-center">
          <img
            src="/images/t5.png"
            className="m-auto h-full w-full object-cover opacity-20"
          />
        </div>
      </section>
      <section className="block absolute top-40 w-full">
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
                  Committed to excellence and focused on wealth preservation, we
                  specialize in managing and growing wealth across diverse
                  investment avenues. Our extensive portfolio spans public and
                  private markets, including real estate, infrastructure,
                  venture capital, and early-stage companies.
                </p>

                <p className="mt-8 text-left">
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

            {/* <Column columns={{ "": 12, "xl:": 6 }}>
              <div className="text-center h-96">
                <img
                  src="https://picsum.photos/id/57/1000"
                  className="m-auto h-full w-full object-cover  p-10"
                />
              </div>
            </Column> */}
          </Grid>
        </Container>
      </section>
    </Transition>
  );
}
