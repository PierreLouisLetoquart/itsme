import Link from "next/link";

export type SocialMediaInfo = {
  platform: string;
  profileLink: string;
  linkText: string;
};

export function SocialMediaElement({
  socialInfo,
}: {
  socialInfo: SocialMediaInfo;
}) {
  return (
    <li className="text-sm font-light sm:text-base md:text-lg">
      {socialInfo.platform} :{" "}
      <Link
        className="font-normal hover:underline hover:underline-offset-4"
        href={socialInfo.profileLink}
      >
        {socialInfo.linkText}
      </Link>
    </li>
  );
}
