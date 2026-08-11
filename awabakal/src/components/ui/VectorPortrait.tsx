import Image from "next/image";

/** Organic blob from `public/Vector 2534.svg`, authored in a 15x15 box. */
const BLOB_PATH =
  "M1.40042 3.63541L2.64823 1.98014L3.031 1.56873C3.21359 1.37248 3.41445 1.19406 3.63087 1.03588L3.74619 0.951585C3.99257 0.771507 4.25774 0.618664 4.53706 0.495733L4.94872 0.314553L5.32906 0.202361C5.62237 0.115838 5.92421 0.0614291 6.22927 0.0400917L6.80247 0H7.19996C7.5295 0 7.8579 0.0385695 8.17847 0.114921L8.49703 0.190794L9.1926 0.391388C9.39615 0.450089 9.595 0.524023 9.78745 0.612563L10.5408 0.959129L11.5524 1.51089L12.374 2.11937L12.9645 2.66081L13.4523 3.22288L13.6976 3.55799C13.9132 3.85244 14.0897 4.17358 14.2227 4.5134L14.3589 4.86154C14.4425 5.07509 14.5085 5.29508 14.5564 5.51935L14.6226 5.8295C14.6844 6.11922 14.7156 6.41463 14.7156 6.71086V7.42036L14.6487 8.00154C14.6146 8.29737 14.5494 8.58876 14.454 8.87087L14.3099 9.29736L14.0223 9.89553L13.4831 10.9578L13.2281 11.3762C13.053 11.6635 12.8442 11.9288 12.6061 12.1665L12.2675 12.5047C12.123 12.6489 11.9682 12.7825 11.8044 12.9044L11.4576 13.1625C11.2848 13.291 11.1024 13.4062 10.9121 13.507L10.8305 13.5501C10.5696 13.6882 10.2949 13.7986 10.0111 13.8794L9.47782 14.0311L8.85635 14.1792C8.53574 14.2555 8.2073 14.2941 7.87772 14.2941H7.55415C7.26264 14.2941 6.97191 14.2639 6.68661 14.2041L5.86276 14.0311L4.83062 13.6805L3.97307 13.304L3.03335 12.7574L2.60059 12.4607C2.39313 12.3185 2.19879 12.158 2.01989 11.9812L1.60636 11.5724C1.40793 11.3763 1.22943 11.161 1.07346 10.9296L0.932317 10.7203C0.809802 10.5386 0.701619 10.3476 0.608747 10.1491L0.388814 9.67895L0.227041 9.15098C0.157001 8.9224 0.106498 8.68828 0.0760757 8.45115L0.0139564 7.96696L0.0030082 7.63054C-0.00677953 7.32977 0.016843 7.02885 0.073442 6.7333C0.119276 6.49396 0.186528 6.25923 0.274387 6.03193L0.748266 4.80596L1.40042 3.63541Z";

type VectorPortraitProps = {
  /** unique per instance — clip paths are referenced by id */
  id: string;
  src: string;
  alt: string;
  /** rendered size in px, used for the image `sizes` hint */
  size: number;
  className?: string;
};

/**
 * The Vector 2534 blob used as a mask: the photo fills the shape exactly,
 * scaled to the element via an objectBoundingBox clip path.
 */
export default function VectorPortrait({
  id,
  src,
  alt,
  size,
  className,
}: VectorPortraitProps) {
  return (
    <div className={`relative aspect-square ${className ?? ""}`}>
      <svg aria-hidden className="absolute size-0">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            {/* 15-unit artboard normalised to 0..1 */}
            <path d={BLOB_PATH} transform="scale(0.0666666667)" />
          </clipPath>
        </defs>
      </svg>

      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        style={{ clipPath: `url(#${id})` }}
      />
    </div>
  );
}
