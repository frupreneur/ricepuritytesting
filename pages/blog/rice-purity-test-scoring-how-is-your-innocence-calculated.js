import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `Rice Purity Test Scoring: How Is Your Innocence Calculated`;
  const description = `Curious about your level of "purity"? Learn how the Rice Purity Test scoring system works and what your score really means. Find out why college students enjoy taking this test and whether your score could impact your future opportunities. Take the Rice Purity Test scoring system and find out how "pure" you really are!`;
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
          If you're a college student, chances are you've heard of the Rice
          Purity Test. This test has been around for decades and is designed to
          measure how "pure" you are based on a series of questions. The scoring
          system is a bit complex, but don't worry - we're here to break it down
          for you.
        </p>
        <h2>The Scoring System</h2>
        <p>
          The Rice Purity Test consists of 100 questions, each worth one point.
          The questions cover a wide range of topics, from sexual activity to
          drug use to criminal behavior. Depending on your answers, you'll
          receive a score between 0 and 100.
        </p>
        <p>
          If you answer "yes" to a question, you get 0 points. If you answer
          "no," you get 1 point. The higher your score, the more "pure" you are
          considered to be.
        </p>
        <h2>Interpreting Your Score</h2>
        <p>
          So, what does your score actually mean? It's important to note that
          the Rice Purity Test is not a scientific measure of purity or
          innocence. It's simply a fun activity that many college students enjoy
          taking.
        </p>
        <p>
          If you score between 0 and 30, you're in the "not-so-pure" category.
          Scores between 31 and 60 are considered "average," while scores
          between 61 and 90 are in the "pretty pure" range. If you score between
          91 and 100, congratulations - you're a "pure" individual!
        </p>
        <h2>Why Do People Take the Rice Purity Test?</h2>
        <p>
          While the Rice Purity Test may not be a serious measure of purity,
          many college students enjoy taking it as a way to bond with friends
          and compare experiences. It can also be a way to reflect on your own
          values and behaviors.
        </p>
        <p>
          Additionally, some employers and schools may ask for your Rice Purity
          Test score as part of an application process. While this isn't a
          common practice, it's something to keep in mind if you're thinking
          about taking the test.
        </p>
        <h2>Conclusion</h2>
        <p>
          The Rice Purity Test is a fun activity that many college students
          enjoy taking. While the scoring system is a bit complex, the test
          itself is easy to complete. Whether you score in the "not-so-pure"
          category or the "pure" category, remember that your score doesn't
          define you as a person. It's simply a way to compare experiences and
          reflect on your own values.
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
