import React, { useEffect, useState, useRef } from "react";
import { AnswerContainer } from "@/components";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useRouter } from "next/router";
import { useGlobalState } from "@/state";
import { DATABASE } from "@/db";

function shuffle(unShuffled) {
  let shuffled = unShuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}

const shuffledDB = shuffle(DATABASE);

export default function QuestionContainer() {
  const [questions, setQuestions] = useState(shuffledDB);
  const [results, setResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [generatingResults, setGeneratingResults] = useState(false);
  const { state, setState } = useGlobalState();

  const router = useRouter();

  let currentQuestion = questions[state.presentQuestion];
  let answerARef = React.useRef(null);
  let answerBRef = React.useRef(null);
  let progressRef = React.useRef(null);

  const handleA = () => {
    router.push("/");
    answerARef.current.classList.add("active");
    setTimeout(() => {
      if (state.presentQuestion + 1 === questions.length) {
        setGeneratingResults(true);
        setState((old) => ({
          ...old,
          score: {
            ...old.score,
            [currentQuestion.a.for]: old.score[currentQuestion.a.for] + 1,
          },
        }));
      } else {
        setLoading(true);
        setState((old) => ({
          ...old,
          score: {
            ...old.score,
            [currentQuestion.a.for]: old.score[currentQuestion.a.for] + 1,
          },
          presentQuestion: old.presentQuestion + 1,
        }));
      }
    }, 250);
  };

  const handleB = () => {
    router.push("/");
    answerBRef.current.classList.add("active");
    setTimeout(() => {
      if (state.presentQuestion + 1 === questions.length) {
        setGeneratingResults(true);
        setState((old) => ({
          ...old,
          score: {
            ...old.score,
            [currentQuestion.a.for]: old.score[currentQuestion.a.for] + 1,
          },
        }));
      } else {
        setLoading(true);
        setState((old) => ({
          ...old,
          score: {
            ...old.score,
            [currentQuestion.b.for]: old.score[currentQuestion.b.for] + 1,
          },
          presentQuestion: old.presentQuestion + 1,
        }));
      }
    }, 250);
  };

  React.useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    if (generatingResults) {
      timer = setTimeout(() => {
        setState((old) => ({
          name: "",
          score: {
            a: 0,
            s: 0,
            g: 0,
            t: 0,
            pt: 0,
          },
          presentQuestion: -1,
          cache: { name: old.name, score: old.score },
        }));
        router.push("/results");
      }, 500);
    }
  }, [loading, generatingResults]);


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

  if (loading) {
    return (
      <div className="question-wrapper">
        <div className="questionContainer">
          <p>Registering...</p>
          <div className="loading"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="question-wrapper">
      <p>Select Answer Below</p>
      <h2>It means more to me when...?</h2>

      <div className="questionContainer">
        <div className="progressContainer">
          <div
            ref={progressRef}
            style={{
              width: `${(state.presentQuestion / questions.length) * 100}%`,
            }}
            className="progress"
          ></div>
        </div>
        <div ref={answerARef} className="answer" onClick={handleA}>
          <p>
            {currentQuestion.a.answer.charAt(0).toUpperCase() +
              currentQuestion.a.answer.slice(1)}
          </p>
        </div>
        <div ref={answerBRef} className="answer" onClick={handleB}>
          <p>
            {currentQuestion.b.answer.charAt(0).toUpperCase() +
              currentQuestion.b.answer.slice(1)}
          </p>
        </div>
      </div>

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
