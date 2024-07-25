import { Container } from "@/components/Foundations";
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
        <Container className="flex items-center h-20">
          <p>
            Welcome to The Monday Group (TMG). At TMG, we are more than a
            multi-family office; we are a community of high net worth
            individuals and families, forward-thinking companies, and top-tier
            financial analysts working together to forge a future of prosperity
            and growth. Our investments encompass a comprehensive array of asset
            classes including Equities, Fixed Income, Real Estate,
            Infrastructure, and a suite of Alternative Investments: Hedge Funds,
            Venture Capital, Early Stage Start-Ups, and Private Businesses.
            Mission Statement The Monday Group will cultivate a dynamic
            ecosystem where high net worth individuals and families, innovative
            companies, and the brightest minds in finance converge to achieve
            shared and individual goals. By investing in relationships,
            knowledge, and innovation, TMG aspires to be the cornerstone of
            financial success and professional development, securing legacies,
            catalyzing growth, and nurturing talent for a prosperous future. For
            inquiries please email danh@themondaygroup.net
          </p>
        </Container>
      </section>
    </Transition>
  );
}
