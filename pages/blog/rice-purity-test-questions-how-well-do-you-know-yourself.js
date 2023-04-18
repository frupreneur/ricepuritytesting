import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `Rice Purity Test Questions: How Well Do You Know Yourself?`;
  const description = `Find out how well you know yourself with the Rice Purity Test. This popular survey measures your level of innocence or purity based on a series of questions. In this article, we'll take a closer look at the test and some of the questions you might encounter. Read on to gain insight into yourself and your values.`;
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
          Have you ever taken the Rice Purity Test? If not, it's a test that
          measures your level of innocence or purity based on a series of
          questions. It's become increasingly popular in recent years, and it's
          not hard to see why. People are curious about how they stack up
          against their peers when it comes to experiences and behavior. In this
          article, we'll take a closer look at the Rice Purity Test and some of
          the questions you might encounter.{" "}
        </p>
        <h2>What is the Rice Purity Test?</h2>
        <p>
          The Rice Purity Test is a survey that originated at Rice University in
          Houston, Texas. It's designed to measure a person's level of innocence
          or purity based on their experiences and behavior. The test is
          comprised of 100 questions, and the more questions you answer "yes"
          to, the lower your purity score. The test is often taken by college
          students as a way to compare themselves to their peers and to see how
          "pure" they are.
        </p>
        <h2>Sample Rice Purity Test Questions</h2>
        <p>
          Some of the questions on the Rice Purity Test may be surprising or
          even uncomfortable to answer. Here are a few examples:
        </p>
        <ul>
          <li>Have you ever had sex in a public place?</li>
          <li>Have you ever cheated on a significant other?</li>
          <li>Have you ever used a fake ID to buy alcohol?</li>
          <li>Have you ever done drugs?</li>
          <li>Have you ever stolen something?</li>
        </ul>
        <h2>Why Take the Rice Purity Test?</h2>
        <p>
          People take the Rice Purity Test for a variety of reasons. Some take
          it just for fun, while others take it more seriously as a way to
          reflect on their experiences and behavior. Taking the test can be a
          way to gain insight into yourself and your values, and it can also be
          a way to bond with others who have taken the test.
        </p>
        <h2>Conclusion</h2>
        <p>
          The Rice Purity Test is a popular survey that measures a person's
          level of innocence or purity based on their experiences and behavior.
          While some of the questions may be uncomfortable to answer, taking the
          test can be a way to gain insight into yourself and your values. So,
          how well do you know yourself? Take the Rice Purity Test to find out!
        </p>
        
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
