import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `Rice Purity Test Scores: Are You Really as Innocent as You Think?`;
  const description = `Curious about your level of innocence? The Rice Purity Test has been around for years, but is it an accurate measure of your character? Learn more about the test and its limitations in this article.`;
  return (
    <div className="site-wrap">
      <Meta title={title} description={description} />

      <article>
        <h1>{title}</h1>
        <p>{description}</p>

        <Image
          src="/assets/images/rice-purity-test.png"
          width="600"
          height="300"
          alt="Rice Purity Test"
          priority
        />
        <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
          {" "}
          TAKE RICE PURITY TEST
        </Link>

        <p>
          If you're a college student or have spent any time on social media,
          you've probably heard of the Rice Purity Test. This online quiz has
          been around for years and asks questions about various behaviors to
          determine how "pure" or innocent you are. The higher your score, the
          more innocent you are said to be. But is this test really an accurate
          reflection of your character? Let's take a closer look.
        </p>
        <h2>What is the Rice Purity Test?</h2>
        <p>
          The Rice Purity Test is a 100-question quiz that asks about your
          experiences with a variety of behaviors, including sex, drugs, and
          alcohol. It's often used as a way for college students to bond or brag
          about their experiences, with higher scores indicating greater
          "experience." The test was originally created by Rice University in
          the 1960s as a way to gauge the experiences of their students, but it
          has since spread to other universities and beyond.
        </p>
        <h2>How is the test scored?</h2>
        <p>
          The test is scored on a scale of 0-100, with higher scores indicating
          more "impure" or "experienced" behavior. Questions include things like
          "Have you ever had sex in a public place?" and "Have you ever tried
          drugs?" Each question is worth one point, so the highest score you can
          get is 100.
        </p>
        <h2>Is the Rice Purity Test a good measure of innocence?</h2>
        <p>
          The short answer is no. While the Rice Purity Test may be a fun way to
          compare experiences with your friends, it's not an accurate measure of
          your character or innocence. The questions on the test are often
          subjective and can be interpreted in different ways, and the test
          doesn't take into account things like consent or context. Just because
          you have a high score on the Rice Purity Test doesn't mean you're a
          bad person, and just because you have a low score doesn't mean you're
          an angel.
        </p>
        <h2>Should you take the Rice Purity Test?</h2>
        <p>
          Ultimately, whether or not you take the Rice Purity Test is up to you.
          If you're curious about your score or want to bond with your friends
          over your experiences, go ahead and take the test. But remember that
          your score doesn't define you as a person, and it's important to make
          decisions based on your own values and beliefs, not what a silly
          online quiz says.
        </p>
        <h2>The Bottom Line</h2>
        <p>
          The Rice Purity Test may be a fun way to compare experiences with your
          friends, but it's not an accurate measure of your innocence or
          character. Don't take your score too seriously, and remember that your
          worth as a person isn't determined by your experiences or lack
          thereof.
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
