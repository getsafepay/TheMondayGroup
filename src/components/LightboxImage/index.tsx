import { type CSSProperties } from "react";
import { LightboxImage } from "./Lightbox";
import { mergeClasses } from "@/helpers/mergeClasses";
import {
  StaticImageData,
  StaticRequire,
} from "next/dist/shared/lib/get-img-props";

type Props = {
  alt: string;
  style?: CSSProperties;
  containerClassName?: string;
  src?: string | StaticImageData | StaticRequire;
  caption?: string;
};

export default function ImageSpotlight({
  alt,
  src,
  style,
  containerClassName,
  caption,
}: Props) {
  return src ? (
    <figure
      className={mergeClasses(
        "text-center bg-subtle py-2.5 my-5 rounded-lg",
        containerClassName
      )}
    >
      <LightboxImage
        src={src.toString()}
        alt={alt}
        style={style}
        className="inline rounded-md transition-opacity duration-default ease-in-out hover:opacity-80"
      />
      {caption && (
        <figcaption className="mt-[14px] text-secondary text-center text-xs px-8 py-2">
          {caption}
        </figcaption>
      )}
    </figure>
  ) : null;
}
