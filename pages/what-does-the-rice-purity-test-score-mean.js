import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  return (
    <div className="site-wrap">
      <Meta
        title="What Does the Rice Purity Test Score Mean?"
        description=" The Rice Purity Test is often seen as a rite of passage for college students, as it can provide a sense of shared experience and community. Many students compare their scores with their peers, and some even use the test as a way to bond and share stories about their past experiences."
      />
      <article>
        <h1>What Does the Rice Purity Test Score Mean?</h1>

        <Image
          src="/assets/images/rice-purity-test.png"
          width="600"
          height="300"
          alt="Rice Purity Test"
          priority
        />
        <p>
          Although the{" "}
          <Link href="/" alt="Rice Purity Test">
            Rice Purity Test
          </Link>{" "}
          is not a perfect measure of a person's character or behavior, it can
          provide insight into the choices that a person has made and the impact
          that those choices have had on their life. For many students, taking
          the test is a way to reflect on their experiences and consider the
          consequences of their actions.
        </p>
        <p>
          The{" "}
          <Link href="/" alt="Rice Purity Test">
            Rice Purity Test
          </Link>{" "}
          is often seen as a rite of passage for college students, as it can
          provide a sense of shared experience and community. Many students
          compare their scores with their peers, and some even use the test as a
          way to bond and share stories about their past experiences.
        </p>

        <ul className="score-meanings" style={{ listStyle: "none" }}>
          <li>
            A score of 100 on the{" "}
            <Link href="/" alt="Rice Purity Test">
              Rice Purity Test
            </Link>{" "}
            is considered rare, as it means that the person has never engaged in
            any of the behaviors listed on the questionnaire. While a score of
            100 is not necessarily something to aspire to, it can serve as a
            reminder that it is possible to make choices that prioritize one's
            values and well-being.
          </li>
          <li>
            For most students, scores in the 90-99 range are more common. These
            scores suggest that the person has had some minor experiences in
            areas such as relationships, but has generally made choices that
            reflect a higher level of purity. Students with these scores may
            still feel a sense of pride in their accomplishments, while
            recognizing that there is always room for improvement.
          </li>
          <li>
            Scores in the 80-89 range suggest that the person has had slightly
            more experience in areas of relationships. While these experiences
            may have been limited to experimentation or a brief period of time,
            the person may still feel a sense of regret or shame about their
            past choices.
          </li>
          <li>
            Scores in the 70-79 range indicate that the person may have engaged
            in more risky or dangerous behaviors. Students with these scores may
            have had some negative consequences as a result of their choices,
            and may be looking for ways to make healthier choices in the future.
          </li>
          <li>
            Scores in the 60-69 range suggest that the person has had
            substantial experience in several areas, and may have engaged in
            more serious or risky behaviors. These scores indicate that the
            person may have had a significant impact on their life as a result
            of their choices, and may be looking for ways to make positive
            changes.
          </li>
          <li>
            Scores in the 50-59 range suggest that the person has had extensive
            experience in many areas, and may have engaged in behaviors that are
            considered more extreme or dangerous. Students with these scores may
            have had a significant impact on their life as a result of their
            choices, and may be looking for ways to make significant changes.
          </li>
          <li>
            Scores in the 0-49 range indicate that the person has had a high
            level of experience in almost all areas, and may have engaged in
            behaviors that are considered very risky or dangerous. Students with
            these scores may have experienced serious negative consequences as a
            result of their choices, and may be looking for ways to make
            significant changes in their life.
          </li>
        </ul>
        <Link href="/" alt="Rice Purity Test">
          {" "}
          <button>TAKE RICE PURITY TEST</button>
        </Link>
      </article>
    </div>
  );
}
