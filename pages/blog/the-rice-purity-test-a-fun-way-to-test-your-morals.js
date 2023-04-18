import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `The Rice Purity Test: A Fun Way to Test Your Morals?`;
  const description = `Have you ever heard of the Rice Purity Test? It's a popular test among college students to determine how "pure" they are based on a series of questions about their personal life. While it may seem like a fun way to pass the time with friends, the test can have serious implications on one's self-esteem and mental health. Learn more about the Rice Purity Test and its effects in this article.`;
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
          Have you ever heard of the Rice Purity Test? It's a popular test among
          college students to determine how "pure" they are based on a series of
          questions about their personal life. While it may seem like a fun way
          to pass the time with friends, the test can have serious implications
          on one's self-esteem and mental health.
        </p>
        <h2>What is the Rice Purity Test?</h2>
        <p>
          The Rice Purity Test is a 100-question survey that originated at Rice
          University in Houston, Texas. The test was designed to gauge the
          "purity" of incoming students and to help them adjust to college life.
          Over time, the test has gained popularity among college students
          across the country and is now a common way for students to bond and
          compare experiences.
        </p>
        <h2>How Does the Test Work?</h2>
        <p>
          The test consists of 100 yes or no questions that cover a range of
          topics from drugs and alcohol to sex and relationships. The questions
          are designed to be personal and can be uncomfortable for some
          test-takers. For example, questions like "Have you ever cheated on a
          significant other?" or "Have you ever had sex in a public place?" are
          common.
        </p>
        <h2>Should You Take the Test?</h2>
        <p>
          While the Rice Purity Test may seem like harmless fun, it can have
          negative effects on one's self-esteem and mental health. The test is
          often used as a way to compare experiences and can lead to feelings of
          shame or embarrassment for those who score lower. Additionally, the
          test reinforces the idea that one's worth is based on their "purity"
          or lack of experience in certain areas.
        </p>
        <p>
          If you do choose to take the test, it's important to remember that the
          results do not define you as a person. Everyone has different
          experiences and there is no "right" or "wrong" way to live your life.
          It's also important to recognize that the test does not account for
          factors like consent or personal beliefs and values.
        </p>
        <h2>Conclusion</h2>
        <p>
          The Rice Purity Test may seem like a fun way to bond with friends, but
          it can have serious implications on one's self-esteem and mental
          health. It's important to remember that the results do not define you
          as a person and that everyone has different experiences. If you choose
          to take the test, do so with caution and keep in mind that there is no
          "right" or "wrong" way to live your life.
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
