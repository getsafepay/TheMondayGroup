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
        <Container className="flex flex-col items-center">
          <div className="w-full">
            <ImageSpotlight
              src="/images/BannerImage.png"
              alt="Descriptive Alt Text"
              caption="This is an optional caption for the image."
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold mb-6">Who are we?</h2>
            <p>
              The Monday Group is a distinguished multi-family office dedicated
              to addressing the unique financial needs and aspirations of
              high-net-worth individuals and families. Committed to excellence
              and focused on wealth preservation, we specialize in managing and
              growing wealth across diverse investment avenues. Our extensive
              portfolio spans public and private markets, including real estate,
              infrastructure, venture capital, and early-stage companies.
            </p>
          </div>
        </Container>
      </section>
    </Transition>
  );
}
