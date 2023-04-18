import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `Rice Purity Test Scoring System: How Is Your Innocence Judged?`;
  const description = `Find out how your level of innocence is judged with the Rice Purity Test Scoring System. Learn how the scoring system works and what your score means in this comprehensive guide. Discover why your score doesn't define your worth as a person and take the test with a grain of salt. Read now to find out more!`;
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
          Are you familiar with the Rice Purity Test? It’s a survey that
          measures how “pure” or innocent you are based on your answers to a
          series of questions. Originally created by students at Rice
          University, the test has since become popular across college campuses
          and beyond. But how is your innocence actually judged? Let’s take a
          closer look at the scoring system behind the Rice Purity Test.
        </p>
        <h2>The Basics of the Rice Purity Test</h2>
        <p>
          The Rice Purity Test consists of 100 questions that cover a range of
          topics related to drugs, sex, alcohol, relationships, and more. Each
          question is answered with a “yes” or “no” response, and your score is
          based on the number of “yes” answers you give. A score of 100 means
          you’ve answered “no” to every question and are considered “pure” or
          innocent, while a lower score indicates a higher level of experience
          with various activities.
        </p>
        <h2>The Scoring System</h2>
        <p>
          As mentioned, a score of 100 on the Rice Purity Test means you’ve
          answered “no” to every question. But what about all the other scores?
          Here’s a breakdown of how innocence is judged based on your score:
        </p>
        <ul>
          <li>96-100: Very pure</li>
          <li>90-95: Pure</li>
          <li>85-89: Relatively pure</li>
          <li>70-84: Average</li>
          <li>56-69: Somewhat experienced</li>
          <li>41-55: Experienced</li>
          <li>25-40: Very experienced</li>
          <li>0-24: Extremely experienced</li>
        </ul>
        <h2>What Does Your Score Mean?</h2>
        <p>
          While the Rice Purity Test can be a fun way to compare experiences
          with your friends, it’s important to remember that your score doesn’t
          define your worth or value as a person. Your score simply reflects
          your level of experience with certain activities, and everyone’s
          experiences are different. Additionally, there’s no “right” or “wrong”
          way to answer the questions – it’s all based on personal experience
          and interpretation. So, take the Rice Purity Test with a grain of salt
          and remember that your innocence or lack thereof doesn’t define you.
        </p>
        <h2>Conclusion</h2>
        <p>
          The Rice Purity Test is a popular way to compare levels of innocence
          among friends and acquaintances. However, it’s important to remember
          that the scoring system is simply a reflection of personal experiences
          and doesn’t define your worth as a person. Take the test for fun, but
          don’t take it too seriously!
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
