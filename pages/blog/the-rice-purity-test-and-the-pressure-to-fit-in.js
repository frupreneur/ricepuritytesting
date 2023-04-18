import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `The Rice Purity Test and the Pressure to Fit In`;
  const description = `Are you feeling the pressure to fit in with your college peers? Discover how the Rice Purity Test has become a symbol of fitting in and the negative consequences it can bring. Find out why you don't have to engage in risky behaviors to fit in and how your worth as a person is not based on your experiences. Read on to learn more.`;
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
          College life can be an exciting experience for most students, as it
          marks the beginning of their independence and the exploration of new
          things. It's a time where students get to meet new people, try new
          activities, and have new experiences. However, with all the excitement
          and fun that college brings, there's also the pressure to fit in. One
          way that students have been trying to fit in is through the Rice
          Purity Test. In this article, we'll discuss what the Rice Purity Test
          is and how it has become a symbol of fitting in.
        </p>
        <h2>What is the Rice Purity Test?</h2>
        <p>
          The Rice Purity Test is a self-graded survey that originated at Rice
          University in Houston, Texas. It consists of 100 questions that ask
          about a person's experiences and behaviors. The questions cover a wide
          range of topics, including sexual activities, drug use, and other
          risky behaviors. The test is designed to give a score out of 100, with
          a higher score indicating a higher level of purity or innocence.
        </p>
        <h2>How has the Rice Purity Test become a symbol of fitting in?</h2>
        <p>
          The Rice Purity Test has become a popular way for college students to
          bond and fit in with their peers. By taking the test and comparing
          scores, students can see how they measure up against their friends. In
          some cases, the test has become a competition to see who can score the
          highest or lowest. It has become a way for students to show off their
          experiences and prove that they are "cool" or "experienced."
        </p>
        <p>
          However, this pressure to fit in can have negative consequences.
          Students may feel like they have to engage in risky behaviors to fit
          in with their peers, even if they're not comfortable doing so. They
          may also feel ashamed or embarrassed if they score low on the test,
          which can lead to feelings of isolation and loneliness.
        </p>
        <p>
          Overall, the Rice Purity Test may seem like a harmless way for college
          students to bond, but it can also create unnecessary pressure and
          anxiety. It's important for students to remember that they don't have
          to engage in risky behaviors to fit in and that their worth as a
          person is not based on their experiences.
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
