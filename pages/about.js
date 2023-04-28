import React from "react";
import Link from "next/link";

import { Meta } from "@/components";

export default function AboutUsPage() {
  return (
    <>
      <Meta
        title="About Us - Rice Purity Testing"
        description="Rice Purity Testing is a website dedicated to helping people assess their level of innocence through taking the Rice Purity Test. Our website is designed to be user-friendly, with a simple and straightforward interface that makes it easy for anyone to take the test."
      />
      <div className="site-wrap">
        <article>
          <h1>About Us</h1>
          <p>
            Rice Purity Testing is a website dedicated to helping people assess
            their level of innocence through taking the Rice Purity Test. Our
            website is designed to be user-friendly, with a simple and
            straightforward interface that makes it easy for anyone to take the
            test.
          </p>
          <p>
            Our purity test is a 100-question survey that measures a person's
            level of purity based on their life experiences. The test covers a
            wide range of topics, including romantic relationships, substance
            use, and sexual behavior. It is a fun and interactive way for people
            to reflect on their past experiences and gain a better understanding
            of themselves.{" "}
          </p>
          <h2>History</h2>
          <p>
            Rice Purity Testing was founded as a way for people to measure their
            level of innocence in a lighthearted and entertaining way. Since
            then, our website has become one of the most popular destinations
            for people looking to take the Rice Purity Test.
          </p>
          <h2>Our Team</h2>
          <p>
            At Rice Purity Testing, we are dedicated to providing the best
            possible experience for our users. Our team is made up of experts in
            psychology and survey design who have worked hard to create a test
            that is accurate, engaging, and informative.
          </p>
          <p>
            We are committed to ensuring the privacy and security of our users'
            data, and we use the latest technology to protect the information
            that we collect. We also welcome feedback from our users and are
            always looking for ways to improve our website and the purity test.
          </p>
          <h2>Our Goals</h2>
          <p>
            Our goal at Rice Purity Testing is to provide a fun and engaging way
            for people to reflect on their past experiences and gain insight
            into their level of innocence. We believe that everyone can benefit
            from taking the purity test, regardless of their age, gender, or
            background.
          </p>
          <p>
            We are committed to providing a safe and inclusive environment for
            all our users, and we do not tolerate any form of harassment or
            discrimination. Our mission is to help people of all walks of life
            gain a better understanding of themselves and their past
            experiences, and to promote a culture of honesty and
            self-reflection.
          </p>
        </article>
      </div>
    </>
  );
}
