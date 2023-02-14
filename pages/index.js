import React from "react";
import { QuizContainer, Ad, Meta } from "@/components";
import { DATABASE } from "@/db";
import Link from "next/link";

export default function Home(props) {
  return (
    <>
      <Meta />

      <div className="site-wrap" id="site-wrap">
        <h1 style={{ marginTop: "0 !important" }}>
          Free Love Language Test
        </h1>
        <p>
          Find Out What Makes Your Heart Sing: Take this free love language test
          to discover your primary love language, what it means, and how you can use it to better connect with someone you love.
        </p>
        <QuizContainer />
        <article className="articleHome">
          <h2>What are love languages and why do I need to take a love language test?</h2>
          <p>
            Love is a complex and multifaceted emotion that is expressed and
            experienced in different ways. To better understand and communicate
            love within a relationship, it is helpful to know your own love
            language as well as your partner's. The concept of love languages
            was first introduced by Dr. Gary Chapman in his book "The 5 Love
            Languages: The Secret to Love that Lasts." According to Dr. Chapman,
            people have a primary love language, which is the way they prefer to
            receive and give love to others. Here are the five love languages{" "}
          </p>
          <div className="quizContainer">
            <h2> Words of Affirmation:</h2>
            <p>
              People who have words of affirmation as their primary love
              language feel valued and loved when they receive positive and
              encouraging words from their partners. This can include
              compliments, expressions of appreciation, or simply telling them
              "I love you." People who prefer words of affirmation may not feel
              loved when their partner does something for them, but instead when
              they hear positive words about themselves. is love of affirmation
              your primary love language?
              <Link href="/words-of-affirmation">
                Learn more about Words of Affirmation
              </Link>
            </p>
          </div>

          <div className="quizContainer">
            <h2>Acts of Service</h2>
            <p>
              {" "}
              People with acts of service as their primary love language feel
              loved when their partner does something helpful or practical for
              them. This can include tasks such as doing the dishes, running
              errands, or fixing something that is broken. People who prefer
              acts of service feel appreciated when their partner takes the time
              to help them out in their day-to-day life. is acts of service your
              primary love language?{" "}
              <Link href="/acts-of-service">
                Learn more about Acts of Service
              </Link>
            </p>
          </div>

          <div className="quizContainer">
            <h2>Receiving Gifts</h2>
            <p>
              People with receiving gifts as their primary love language feel
              loved when they receive a thoughtful or sentimental gift from
              their partner. This can include anything from a bouquet of flowers
              to a hand-written love letter. People who prefer gifts as their
              love language feel valued when their partner takes the time to
              find something that is meaningful to them. Is receiving gifts your
              primary love language?{" "}
              <Link href="/receiving-gifts">
                Learn more about Receiving Gifts
              </Link>
            </p>
          </div>
          <div className="quizContainer">
            <h2>Physical Touch</h2>
            <p>
              People with physical touch as their primary love language feel
              loved through physical affection. This can include hugs, holding
              hands, or cuddling. People who prefer physical touch as their love
              language feel most connected to their partner through physical
              affection and close physical proximity. is physical touch your
              primary love language?{" "}
              <Link href="/physical-touch">
                Learn more about Physical Touch
              </Link>
            </p>
          </div>
          <div className="quizContainer">
            <h2>Quality Time</h2>
            <p>
              People with quality time as their primary love language feel loved
              when they spend undivided attention and focused time with their
              partner. This can include activities such as taking a walk
              together, going to a movie, or simply sitting down for a long
              conversation. People who prefer quality time feel most loved and
              connected to their partner when they are able to spend focused,
              one-on-one time with them. is quality time your primary love
              language?{" "}
              <Link href="/quality-time">Learn more about Quality Time</Link>
            </p>
          </div>

          <p>
            It is important to note that everyone experiences and expresses love
            differently, and everyone's love language is unique to them. Some
            people may have a dominant love language, while others may have a
            combination of two or more. Understanding and appreciating the love
            language of your partner can greatly improve the overall health and
            happiness of your relationship.
          </p>

          <p>
            In conclusion, the concept of love languages provides a helpful
            framework for understanding and appreciating the different ways
            people give and receive love. By taking a  <Link href="/">love language test</Link> and
            learning and understanding your own love language and that of your
            partner, you can create a stronger, more loving, and fulfilling
            relationship. Don't wait, take the <Link href="/">love language test</Link> now to get
            started on the path to a better understanding of love in your
            relationship.
          </p>
          <Link href="#">START YOUR LOVE LANGUAGE QUIZ</Link>
        </article>

        {/* {props.data.map((dbItem) => (
          <DiseaseContainer key={dbItem.route} data={dbItem} />
        ))} */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const data = [];

  for (const value of Object.values(DATABASE)) {
    data.push(value);
  }

  return {
    props: {
      data,
    },
  };
}
