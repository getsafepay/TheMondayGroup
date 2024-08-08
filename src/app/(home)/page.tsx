import { Container } from "@/components/Foundations";
import ImageSpotlight from "@/components/LightboxImage";
import { Transition } from "@/components/Transition";
import { Heading } from "@/components/Typography";
import Image from "next/image";

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
        <div className="w-full h-full min-h-96 overflow-hidden">
          <img src="https://picsum.photos/id/26/2000/1000" />
        </div>
        <Container className="flex flex-col items-center">
          <div>
            <h2
              id="whoweare"
              className="text-4xl font-extrabold mb-8 mt-8 text-center"
            >
              Who are we
            </h2>
            <p className="text-center">
              The Monday Group is a distinguished multi-family office dedicated
              to addressing the unique financial needs and aspirations of
              high-net-worth individuals and families. Committed to excellence
              and focused on wealth preservation, we specialize in managing and
              growing wealth across diverse investment avenues. Our extensive
              portfolio spans public and private markets, including real estate,
              infrastructure, venture capital, and early-stage companies.
            </p>

            <p className="mt-8 text-center">
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
        </Container>
      </section>
    </Transition>
  );
}
