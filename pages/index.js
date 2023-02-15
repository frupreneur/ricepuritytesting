import React from "react";
import { QuizContainer, Ad, Meta } from "@/components";
import { DATABASE, testimonials } from "@/db";
import Link from "next/link";
import Image from "next/image";

export default function Home(props) {
  return (
    <>
      <Meta />

      <div className="site-wrap" id="site-wrap">
        <h1
          style={{ marginTop: "0 !important" }}
        >{`Rice Purity Test ${new Date().getFullYear()}`}</h1>
        <p className="intro">
          How Pure Are You? Take this 100-Question Rice Purity Test / Innocence
          Test to Find Out! Get Ready for Some Surprises :D
        </p>
        <QuizContainer />
        <article className="articleHome">
          <h2>What Is The Rice Purity Test</h2>
          <p>
            The Rice Purity Test is a self-assessment questionnaire consisting
            of 100 questions that cover everything a student might have or is
            engaged in. It's like an adult version of the SATs, but instead of
            measuring your intelligence, it measures how much of a hot mess you
            are.
          </p>
          <Image
            src="/assets/images/rice-purity-test.png"
            width="600"
            height="300"
            alt="Rice Purity Test"
          />
          <p>
            The goal of the Rice Purity Test is to determine just how pure (or
            impure) you are, with scores ranging from 0 to 100. Think of it like
            a purity ring, but instead of a piece of jewelry, it's a number that
            tells the world just how much of a freak you are.
          </p>
          <Link href="/" alt="Rice Purity Test">
            {" "}
            <button>TAKE RICE PURITY TEST</button>
          </Link>
          <p>
            But fear not, my fellow college students, because the Rice Purity
            Test is here to help you navigate the treacherous waters of college
            life. Developed by the Rice Purity Testing team, this test is
            designed to evaluate your purity and help you make better choices.
            Because who needs free will when you can just follow a purity score?
          </p>
          <p>
            The test has been around since 1924, when{" "}
            <Link href="https://en.wikipedia.org/wiki/Rice_University">
              Rice University
            </Link>{" "}
            introduced it to measure the maturity and innocence level of their
            students. I guess they wanted to make sure their students weren't
            just partying all the time, but were also good, upstanding citizens.
            Or maybe they just wanted to make sure no one was having too much
            fun.
          </p>
          <p>
            So, whether you're a goody two-shoes with a score of 100, or a hot
            mess with a score of 0, the Rice Purity Test is here to judge you.
            Just remember, it's all in good fun (or is it?). And who knows,
            maybe taking the test will make you reflect on your choices and help
            you make better ones in the future. Or, more likely, it will just
            make you feel really judged and guilty. But hey, that's college life
            for you!
          </p>
          <Link href="/" alt="Rice Purity Test">
            {" "}
            <button>TAKE RICE PURITY TEST</button>
          </Link>
          <Link
            href="/what-does-the-rice-purity-test-score-mean"
            alt="Rice Purity Test"
          >
            <h2>What Does the Rice Purity Test Score Mean?</h2>
          </Link>
          <p>
            The Rice Purity Test is a self-assessment questionnaire that has
            become popular among college students. It consists of 100 questions
            that measure a person's level of innocence or purity. The test
            includes questions about a wide range of activities, relationships,
            and academic integrity. Each question is assigned a score between 0
            and 100, with a higher score indicating a lower level of purity.
          </p>
          <p>
            Although the Rice Purity Test is not a perfect measure of a person's
            character or behavior, it can provide insight into the choices that
            a person has made and the impact that those choices have had on
            their life. For many students, taking the test is a way to reflect
            on their experiences and consider the consequences of their actions.
          </p>
          <p>
            The Rice Purity Test is often seen as a rite of passage for college
            students, as it can provide a sense of shared experience and
            community. Many students compare their scores with their peers, and
            some even use the test as a way to bond and share stories about
            their past experiences.
          </p>
          <ul className="score-meanings" style={{ listStyle: "none" }}>
            <li>
              A score of 100 on the Rice Purity Test is considered rare, as it
              means that the person has never engaged in any of the behaviors
              listed on the questionnaire. While a score of 100 is not
              necessarily something to aspire to, it can serve as a reminder
              that it is possible to make choices that prioritize one's values
              and well-being.
            </li>
            <li>
              For most students, scores in the 90-99 range are more common.
              These scores suggest that the person has had some minor
              experiences in areas such as relationships, but has generally made
              choices that reflect a higher level of purity. Students with these
              scores may still feel a sense of pride in their accomplishments,
              while recognizing that there is always room for improvement.
            </li>
            <li>
              Scores in the 80-89 range suggest that the person has had slightly
              more experience in areas of relationships. While these experiences
              may have been limited to experimentation or a brief period of
              time, the person may still feel a sense of regret or shame about
              their past choices.
            </li>
            <li>
              Scores in the 70-79 range indicate that the person may have
              engaged in more risky or dangerous behaviors. Students with these
              scores may have had some negative consequences as a result of
              their choices, and may be looking for ways to make healthier
              choices in the future.
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
              Scores in the 50-59 range suggest that the person has had
              extensive experience in many areas, and may have engaged in
              behaviors that are considered more extreme or dangerous. Students
              with these scores may have had a significant impact on their life
              as a result of their choices, and may be looking for ways to make
              significant changes.
            </li>
            <li>
              Scores in the 0-49 range indicate that the person has had a high
              level of experience in almost all areas, and may have engaged in
              behaviors that are considered very risky or dangerous. Students
              with these scores may have experienced serious negative
              consequences as a result of their choices, and may be looking for
              ways to make significant changes in their life.
            </li>
          </ul>
          <Link href="/" alt="Rice Purity Test">
            {" "}
            <button>TAKE RICE PURITY TEST</button>
          </Link><br/>
          <h2>How Does the Rice Purity Test Work?</h2>
          <p>
            The Rice Purity Test is simple to take and easy to understand.
            Participants simply go through the list of questions and answer
            truthfully. They are asked about their experiences potentially
            controversial topics. The questions are designed to provide a
            comprehensive look at a person's life, and the answers are used to
            determine their level of innocence or purity.
          </p>
          <h2>What is the Average Rice Purity Test Score?</h2>
          <p>
            The average Rice Purity Test score varies widely depending on a
            number of factors, including the demographic of the participants,
            the cultural background of the participants, and the specific
            questions that are asked. In general, however, most people score
            between 30 and 70. A score of 100 is considered to be the highest
            level of purity, while a score of 0 is considered to be the lowest.
          </p>
          <h2>How to Calculate Rice Purity Test?</h2>
          <p>
            Calculating the Rice Purity Test is simple. Participants simply add
            up the number of questions they answered truthfully and divide that
            number by 100. This gives them their final score, which is expressed
            as a percentage. The higher the score, the more pure or innocent the
            person is considered to be.
          </p>
          <h2>What Does MPS Stand For Rice Purity Test?</h2>
          <p>
            MPS is an acronym that stands for "maximum possible score." This
            term is used to refer to the highest possible score that can be
            achieved on the Rice Purity Test. A score of 100 is considered to be
            the MPS, and it represents the highest level of innocence or purity
            that can be achieved.
          </p>
          <h2>What is a Good Score on the Rice Purity Test?</h2>
          <p>
            A good score on the Rice Purity Test is subjective and depends on a
            number of factors, including the cultural background of the
            participants, their personal beliefs and values, and their own
            definition of what constitutes a good score. In general, however, a
            score of 70 or higher is considered to be a good score, while a
            score of 50 or lower is considered to be a poor score.
          </p>
          <h2>Is the Rice Purity Test Safe?</h2>
          <p>
            The Rice Purity Test is not a scientifically validated test and its
            results should not be taken seriously. The questions can be
            intrusive and personal in nature, and some participants may find
            them offensive. Additionally, the test is not designed to provide
            accurate or meaningful information about an individual's personality
            or behavior. As such, it is not considered to be a safe or reliable
            tool for measuring an individual's level of innocence or purity.
          </p>
          <br /> <br />
          <h2>RICE PURITY TESTIMONIALS</h2>
          {testimonials.map((x, i) => (
            <div key={i} className="quizContainer">
              <p className="testimonial">{x}</p>
            </div>
          ))}
          <Link href="/" alt="Rice Purity Test">
            {" "}
            <button>TAKE RICE PURITY TEST</button>
          </Link>
        </article>
      </div>
    </>
  );
}
