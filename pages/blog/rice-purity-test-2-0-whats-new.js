import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";

export default function Page() {
  const title = `The Rice Purity Test 2.0: What's New in the Latest Version?`;
  const description = `Discover the latest version of the Rice Purity Test, the Rice Purity Test 2.0, with new questions, an improved scoring system, and more inclusive language. Find out how this classic survey has evolved to reflect the changing behaviors and experiences of young people today`;
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
          For those who don't know, the Rice Purity Test is a 100-question
          survey that asks about a person's experiences with drugs, alcohol,
          sex, and other potentially "risky" behaviors. It's been around for
          decades and is often used as a way to gauge someone's level of
          innocence or "purity." Recently, a new version of the test, dubbed the
          Rice Purity Test 2.0, has been making the rounds online. Here's what's
          new in the latest version.
        </p>
        <h2>New Questions</h2>
        <p>
          One of the most notable differences between the original Rice Purity
          Test and the 2.0 version is the addition of several new questions. The
          updated test includes inquiries about topics like online bullying,
          vaping, and whether or not the test-taker has ever stolen something.
          These new questions help to bring the test up to date with current
          trends and behaviors among young people.
        </p>
        <h2>Improved Scoring</h2>
        <p>
          Another change in the Rice Purity Test 2.0 is an improved scoring
          system. The original test simply gave a score out of 100, with higher
          scores indicating a lower level of "purity." However, the new version
          takes into account the fact that some behaviors may be more serious
          than others. For example, drug use is weighted more heavily than
          having a crush on someone. This new scoring system provides a more
          nuanced view of a person's experiences and behaviors.
        </p>
        <h2>More Inclusive Language</h2>
        <p>
          The original Rice Purity Test was criticized for its use of gendered
          language and assumptions about a person's sexual orientation. The new
          version has addressed these issues by using more inclusive language
          throughout the test. For example, instead of asking if a person has
          had "sex with a member of the opposite gender," the 2.0 version asks
          if the person has had "sex with someone." These changes make the test
          more accessible and inclusive for all individuals.
        </p>
        <h2>Conclusion</h2>
        <p>
          The Rice Purity Test 2.0 is an updated version of the classic survey
          that takes into account the changing behaviors and experiences of
          young people. With new questions, an improved scoring system, and more
          inclusive language, the test provides a more nuanced view of a
          person's "purity." Whether you're taking the test for fun or as a way
          to reflect on your own experiences, the Rice Purity Test 2.0 is worth
          checking out.
        </p>
      </article>
      <Link className={`linkBTN`} href="/" alt="Rice Purity Test">
        {" "}
        TAKE RICE PURITY TEST
      </Link>
    </div>
  );
}
