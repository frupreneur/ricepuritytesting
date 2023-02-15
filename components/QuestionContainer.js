import React, { useEffect, useState, useRef } from "react";
import { AnswerContainer } from "@/components";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useRouter } from "next/router";
import { useGlobalState } from "@/state";
import { DATABASE, db } from "@/db";

function shuffle(unShuffled) {
  let shuffled = unShuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}

const shuffledDB = shuffle(db);

export default function QuestionContainer() {
  const [questions, setQuestions] = useState(shuffledDB);
  const [generatingResults, setGeneratingResults] = useState(false);
  const { state, setState } = useGlobalState();

  const router = useRouter();

  let currentQuestion = questions[state.presentQuestion + 1];
  let answerNoRef = React.useRef(null);
  let answerYesRef = React.useRef(null);

  const handleNo = () => {
    router.push("/");
    answerNoRef.current.classList.add("active");
    setTimeout(() => {
      if (state.presentQuestion + 2 === questions.length) {
        setGeneratingResults(true);
      } else {
        setState((old) => ({
          ...old,
          presentQuestion: old.presentQuestion + 1,
        }));
      }
    }, 0);
  };

  const handleYes = () => {
    router.push("/");
    answerYesRef.current.classList.add("active");
    setTimeout(() => {
      if (state.presentQuestion + 2 === questions.length) {
        setGeneratingResults(true);
        setState((old) => ({
          ...old,
          score: old.score + 1,
        }));
      } else {
        setState((old) => ({
          ...old,
          score: old.score + 1,
          presentQuestion: old.presentQuestion + 1,
        }));
      }
    }, 0);
  };

  React.useEffect(() => {
    let timer;
    if (generatingResults) {
      timer = setTimeout(() => {
        setState((old) => ({
          name: "",
          score: 0,
          presentQuestion: -1,
          cache: { name: old.name, score: old.score },
        }));
        router.push("/purity-results");
      }, 500);
    }
  }, [ generatingResults]);

  if (generatingResults) {
    return (
      <div className="question-wrapper">
        <div className="questionContainer">
          <p>Generating Results...</p>
          <div className="loading"></div>
        </div>
      </div>
    );
  }


  return (
    <div className="question-wrapper">
      <p>{` ${state.presentQuestion + 1} / ${questions.length}`}</p>

      {state.presentQuestion + 1 < 100 && (
        <>
          <h2 className="questionTitle">{currentQuestion}</h2>
          <div className="questionContainer">
            <div className="answerWrapper">
              <div
                ref={answerYesRef}
                className="answer yes"
                onClick={handleYes}
              >
                <p>YES</p>
              </div>
              <div ref={answerNoRef} className="answer no" onClick={handleNo}>
                <p>NO</p>
              </div>
            </div>
          </div>
        </>
      )}

      {state.presentQuestion > 0 && (
        <button
          onClick={() =>
            setState({
              name: "",
              score: {
                a: 0,
                s: 0,
                g: 0,
                t: 0,
                pt: 0,
              },
              presentQuestion: -1,
            })
          }
        >
          <MdOutlineRestartAlt /> Start All Over
        </button>
      )}
    </div>
  );
}
