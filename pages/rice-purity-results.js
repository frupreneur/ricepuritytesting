import React from "react";
import Link from "next/link";
import { useGlobalState } from "@/state";

import { IoTimer } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { Meta, Ad, ShareButtons } from "@/components";
import { MdOutlineRestartAlt } from "react-icons/md";

import { useRouter } from "next/router";

export default function Results() {
  const link = "https://www.ricepuritytesting.com";
  const { state, setState } = useGlobalState();
  const router = useRouter();

  React.useEffect(() => {
    setState((old) => ({
      ...old,
      generatingResults: false,
      presentQuestion: -1,
    }));
  }, []);

  if (state.cache.score == null) {
    return (
      <div className="site-wrap" id="site-wrap">
        <Meta
          title="Results - Rice Purity Test"
          description="View results of your Rice Purity Test"
        />
        <div className="quizContainer">
          <div className="question-wrapper">
            <h2>{`Uuhmmm, Seems like you haven't taken the Purity Test Yet`}</h2>
            <p>
              To get your Rice Purity Test Results you have to first take the
              test so we can better understand you
            </p>

            <button onClick={() => router.push("/")}>
              {" "}
              Take Rice Purity Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-wrap" id="site-wrap">
      <Meta
        title="Results - Rice Purity Test"
        description="View results of your Rice Purity Test"
      />
      <div className="quizContainer">
        <div className="question-wrapper">
          <div className="questionContainer">
            <h2>
              {`${state.cache.name} is  ${100 - state.cache.score}% Pure`}{" "}
            </h2>
            <p>What does your score mean?</p>
            <Link href="/what-does-the-rice-purity-test-score-mean">
              click here to learn more
            </Link>

            <Link href="/" alt="Rice Purity Test">
              {" "}
              <button>
                {" "}
                <MdOutlineRestartAlt /> RE-TAKE TEST
              </button>
            </Link>
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
