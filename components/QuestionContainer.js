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
    if (state.presentQuestion + 2 === questions.length) {
      setState((old) => ({
        ...old,
        generatingResults: true,
      }));
    } else {
      setState((old) => ({
        ...old,
        presentQuestion: old.presentQuestion + 1,
      }));
    }
  };

  const handleYes = () => {
    router.push("/");
    answerYesRef.current.classList.add("active");
    if (state.presentQuestion + 2 === questions.length) {
      setState((old) => ({
        ...old,
        score: old.score + 1,
        generatingResults: true,
      }));
    } else {
      setState((old) => ({
        ...old,
        score: old.score + 1,
        presentQuestion: old.presentQuestion + 1,
      }));
    }
  };

  React.useEffect(() => {
    let timer;
    if (state.generatingResults) {
      timer = setTimeout(() => {
        setState((old) => ({
          name: "",
          score: 0,
          generatingResults: true,
          cache: { name: old.name, score: old.score },
        }));
        router.push("/purity-results");
      }, 500);
    }
  }, [state.generatingResults]);

  if (state.generatingResults) {
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
          <h2 className="questionTitle">
            {currentQuestion.charAt(0).toUpperCase() + currentQuestion.slice(1)}
          </h2>
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
          onClick={() => {
            setState({
              name: "",
              score: 0,
              generatingResults: false,
              presentQuestion: -1,
              cache: {
                name: "",
                score: null,
              },
            });
          }}
        >
          <MdOutlineRestartAlt /> Start All Over
        </button>
      )}
    </div>
  );
}
