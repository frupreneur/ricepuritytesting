import React from "react";
import { useGlobalState } from "@/state";

import { IoTimer } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaGift, FaWhatsapp, FaRegCopy, FaFacebook } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { Meta, ShareButtons } from "@/components";

import { useRouter } from "next/router";

export default function Results() {
  const [loading, setLoading] = React.useState(true);
  const [noCache, setNoCache] = React.useState(true);
  const [name, setName] = React.useState(true);
  const [scores, setScores] = React.useState(true);

  const link = "https://www.lovelanguagestest.com";

  const { state } = useGlobalState();
  const router = useRouter();

  React.useEffect(() => {
    let timer = setTimeout(() => {
      if (state.cache.name) {
        setLoading(false);
        setNoCache(false);
        setName(state.cache.name);
        setScores(
          Object.entries(state.cache.score)
            .sort((x, y) => y[1] - x[1])
            .map((x) => {
              let name;
              if (x[0] === "s") {
                name = "Acts of Service";
              } else if (x[0] === "t") {
                name = "Quality Time";
              } else if (x[0] === "a") {
                name = "Words of Affirmation";
              } else if (x[0] === "pt") {
                name = "Physical Touch";
              } else if (x[0] === "g") {
                name = "Receiving Gifts";
              }
              return { ll: name, score: x[1] };
            })
        );
      } else {
        setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="site-wrap" id="site-wrap">
        <Meta index="noindex" />
        <div className="quizContainer">
          <div className="question-wrapper">
            <p>Generating results...</p>
          </div>
        </div>
      </div>
    );
  }
  if (noCache) {
    return (
      <div className="site-wrap" id="site-wrap">
        <Meta index="noindex" />
        <div className="quizContainer">
          <div className="question-wrapper">
            <h2>{`Uuhmmm, Seems like you haven't taken the love language test yet`}</h2>
            <p>
              To get your love language results you have to first take the love
              language test so we can better understand which love languages
              mean the most to you.
            </p>

            <button onClick={() => router.push("/")}>
              {" "}
              Take Love Language Test
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="site-wrap" id="site-wrap">
      <Meta index="noindex" />
      <div className="quizContainer">
        <div className="question-wrapper">
          <h2 style={{ textAlign: "left" }}>{`${name}'s Love Languages`}</h2>
          <div className="questionContainer">
            {scores.map((x, i) => {
              return (
                <div
                  style={{ fontWeight: "bold", textAlign: "left" }}
                  className="llc"
                  key={i}
                >
                  {resultIcon(x.ll)}
                  <div>
                    <span>{x.ll}: </span>
                    <span style={{ color: "#843897" }}>
                      {((x.score / 30) * 100).toFixed() + "%"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ShareButtons />
    </div>
  );
}

function resultIcon(i) {
  if (i === "Physical Touch") return <GiLovers />;
  if (i === "Receiving Gifts") return <FaGift />;
  if (i === "Words of Affirmation") return <BsChatTextFill />;
  if (i === "Quality Time") return <IoTimer />;
  if (i === "Acts of Service") return <RiUserSettingsFill />;

  return <GiLovers />;
}
