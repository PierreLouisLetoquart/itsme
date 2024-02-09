import { SocialMediaElement } from "@/components/socials";
import { socialMediaInfo } from "@/data/socials";

export default function Home() {
  return (
    <>
      <p className="mb-6 mt-8 text-sm font-normal leading-7 sm:mt-10 md:mb-8 md:mt-14 md:text-lg">
        👋 Hi there! I&apos;m Pierre-Louis, a student in computer science
        actually in Montreal, Canada. When I&apos;m not programming, I like to
        play basketball or climbing montains with my friends.
      </p>

      <p className="mb-8 text-sm font-normal leading-7 md:mb-12 md:text-lg lg:mb-16">
        I created this portfolio to share my projects and my thoughts about the
        tech world. I hope you will find something interesting here! 🚀
      </p>

      <ul className="flex flex-col gap-5 pb-12 md:pb-20 lg:gap-8">
        {socialMediaInfo.map((socialInfo, index) => (
          <SocialMediaElement key={index} socialInfo={socialInfo} />
        ))}
      </ul>
    </>
  );
}
