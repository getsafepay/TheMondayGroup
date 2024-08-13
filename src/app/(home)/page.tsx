import { Column, Container } from "@/components/Foundations";
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
        <div className="w-full h-screen overflow-hidden bg-black text-center">
          <img
            src="https://picsum.photos/id/26/3000"
            className="m-auto h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="pt-20 pb-5">
        <Container className="flex flex-col xl:flex-row">
          <Column columns={{ "": 12, "xl:": 6 }}>
            <div>
              <h2 id="whoweare" className="text-4xl mb-8 mt-8 text-left">
                Who are we.
              </h2>
              <p className="text-left">
                The Monday Group is a distinguished multi-family office
                dedicated to addressing the unique financial needs and
                aspirations of high-net-worth individuals and families.
                Committed to excellence and focused on wealth preservation, we
                specialize in managing and growing wealth across diverse
                investment avenues. Our extensive portfolio spans public and
                private markets, including real estate, infrastructure, venture
                capital, and early-stage companies.
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

          <Column columns={{ "": 12, "xl:": 6 }}>
            <div className="text-center h-96">
              <img
                src="https://picsum.photos/id/57/1000"
                className="m-auto h-full w-full object-cover  p-10"
              />
            </div>
          </Column>
        </Container>
      </section>
    </Transition>
  );
}
