import React from "react";
import { Timeline } from "../ui/timeline";

interface TimelineDemoProps {
    id?: string;
  }
  
  export function TimelineDemo({ id }: TimelineDemoProps) {
    const data = [
        {
          title: "2021",
          content: (
            <div>
              <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Manas and Will’s journey began in an unexpected place—TAMS, a prestigious private high school six hours away from their homes. Despite living just 20 minutes apart, they found themselves on separate paths due to the school’s unique focus on advanced academics and competitive programs. Fate, however, had a different plan. As they navigated the challenging coursework and dynamic social environment of TAMS, their paths crossed in ways neither of them anticipated. Their initial connection was grounded in shared classes and mutual interests, which quickly blossomed into a deep friendship. Through late-night study sessions, shared passions, and the highs and lows of high school life, they discovered a profound bond that neither could have foreseen.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                    src="src/assets/image4.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                    src="src/assets/image5.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                    src="src/assets/image6.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                    src="src/assets/image10.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "2023",
          content: (
            <div>
              <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              As high school progressed, Manas and Will’s friendship evolved into something much more significant. Together, they tackled rigorous assignments, participated in extracurricular activities, and supported each other through the ups and downs of teenage life. Their shared experiences and growing affection led to a romance that was as natural as it was unexpected. After graduation, their love for gaming and technology took center stage, inspiring them to found Groundbreaking Studios. This venture allowed them to channel their creative energy and passion into developing innovative video games, marking the beginning of a new chapter in their lives. Their collaboration and love for each other were integral to the success of their studio.
              </p>
              <div className="grid grid-cols-1 gap-4">
              <img
                    src="src/assets/image1.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-40 md:h-80 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            <img
                src="src/assets/image0.jpeg"
                alt="startup template"
                className="rounded-lg object-cover h-40 md:h-80 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
              </div>
            </div>
          ),
        },
        {
          title: "Present",
          content: (
            <div>
              <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Despite the physical distance that college introduced—Manas and Will enrolled in different institutions—they maintained their connection through their shared love of gaming. Online multiplayer games became their virtual meeting ground, where they could continue to bond and collaborate, even while miles apart. Their time spent playing together not only provided a sense of continuity in their relationship but also allowed them to continue working on new ideas for Groundbreaking Studios. Their online gaming sessions became a cherished tradition, a way to stay connected and celebrate their shared successes while navigating the challenges of college life and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4">
              <img
                    src="src/assets/image2.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                    src="src/assets/image3.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                    src="src/assets/image9.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                    src="src/assets/image8.jpeg"
                    alt="startup template"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
      ];
      return (
        <div className="w-full" id={id}>
            <Timeline data={data} />
        </div>
    );
}
