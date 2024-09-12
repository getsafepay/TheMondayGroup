import { FilePenIcon, GithubIcon, MessageSquareIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

import { FeedbackDialog } from "./FeedbackDialog";
import { githubUrl } from "./utils";
import { A, CALLOUT, LI } from "../Text";

const LINK_CLASSES =
  "inline-flex items-center mb-1 focus-visible:outline-offset-4";
const ICON_CLASSES = "flex items-center mr-2.5 text-icon-secondary shrink-0";

export const IssuesLink = ({
  title,
  repositoryUrl,
}: {
  title: string;
  repositoryUrl?: string;
}) => (
  <LI>
    <A
      isStyled
      openInNewTab
      href={
        repositoryUrl
          ? `${repositoryUrl}/issues`
          : `https://github.com/getsafepay/safepay-checkout-issues/labels/${title}`
      }
      className={LINK_CLASSES}
    >
      <GithubIcon className={ICON_CLASSES} />
      <CALLOUT theme="secondary">View open bug reports for {title}</CALLOUT>
    </A>
  </LI>
);

export const EditPageLink = ({ pathname }: { pathname: string }) => (
  <LI>
    <A
      isStyled
      openInNewTab
      href={githubUrl(pathname)}
      className={LINK_CLASSES}
    >
      <FilePenIcon className={ICON_CLASSES} />
      <CALLOUT theme="secondary">Edit this page</CALLOUT>
    </A>
  </LI>
);

export const ShareFeedbackLink = ({ pathname }: { pathname?: string }) => {
  return (
    <LI>
      <Dialog.Root>
        <Dialog.Trigger className="h-[22px] focus-visible:outline-offset-4">
          <A isStyled className={LINK_CLASSES}>
            <MessageSquareIcon className={ICON_CLASSES} />
            <CALLOUT theme="secondary">Share your feedback</CALLOUT>
          </A>
        </Dialog.Trigger>
        <FeedbackDialog pathname={pathname} />
      </Dialog.Root>
    </LI>
  );
};
