import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `Rice Purity Test Quiz: How Well Do You Know Your Morals?`;
  const description = `Curious about your moral compass? Take the Rice Purity Test quiz and find out how "pure" or morally upright you are compared to others. Learn how the quiz works, what you can learn from taking it, and why it's gained popularity among university students and online communities.`;
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
          Have you ever heard of the Rice Purity Test? It's a self-assessment
          quiz that measures how "pure" or morally upright a person is based on
          their life experiences. Originally created by students at Rice
          University, this quiz has gained popularity as a way for people to
          reflect on their behavior and see how they compare to others. So, how
          well do you know your morals? Take the Rice Purity Test quiz and find
          out!
        </p>
        <h2>What is the Rice Purity Test?</h2>
        <p>
          The Rice Purity Test is a series of questions that assess a person's
          behavior and experiences in various areas of life, including
          relationships, drugs and alcohol, sex, and personal habits. The test
          is scored out of 100, with a higher score indicating a greater degree
          of "purity" or moral uprightness. Originally created as a way for Rice
          University students to bond and share experiences, the test has since
          spread to other universities and even online.
        </p>
        <h2>How Does the Rice Purity Test Work?</h2>
        <p>
          The Rice Purity Test consists of 100 questions, each with a score of
          either 0 or 1. Participants answer each question honestly, and their
          scores are tallied at the end to determine their overall "purity"
          score. The questions cover a wide range of topics, including drug and
          alcohol use, sexual behavior, and personal habits. Some questions are
          more serious than others, and participants may find themselves
          reflecting on their past behavior and choices as they take the test.
        </p>
        <h2>What Can You Learn From Taking the Rice Purity Test?</h2>
        <p>
          The Rice Purity Test can be a valuable tool for self-reflection and
          personal growth. By taking the test and seeing their score,
          participants can gain insight into their behavior and identify areas
          where they may need to make changes. For some, the test may be a
          wake-up call, prompting them to reconsider their choices and strive
          for greater moral uprightness. For others, the test may serve as a
          validation of their choices and lifestyle.
        </p>
        <h2>Take the Rice Purity Test Quiz Now</h2>
        <p>
          Are you ready to find out how well you know your morals? Take the Rice
          Purity Test quiz now and see where you score on the scale of moral
          uprightness. Remember, the test is just a tool for self-reflection,
          and there are no right or wrong answers. Be honest with yourself, and
          use your results as a starting point for personal growth and
          improvement.
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
