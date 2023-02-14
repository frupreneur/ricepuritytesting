import React from "react";
import { QuestionContainer } from "@/components";
import { useGlobalState } from "@/state";
import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { useRouter } from "next/router";

export default function QuizContainer() {
  const { state, setState, DATABASE } = useGlobalState();
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (error) {
      setTimeout(() => setError(null), 1000);
    }
  }, [error]);

  return (
    <div className="quizContainer">
      {state.presentQuestion == -1 && (
        <>
          <Image
            style={{}}
            src="/assets/images/lovelanguagetest.svg"
            width="80"
            height="80"
            alt="Love Language Test"
          />

          <input
            ref={inputRef}
            type="text"
            name="quizName"
            id="quizName"
            placeholder="Enter Your Name"
          />

          <button
            onClick={() => {
              if (inputRef.current.value) {
                router.push("/");
                setState((old) => ({
                  ...old,
                  name: inputRef.current.value,
                  presentQuestion: old.presentQuestion + 1,
                }));
              } else {
                setError("Error: INPUT NAME ");
              }
            }}
          >
            {!error && <GiSelfLove />}
            {error ? error : "START TEST"}
          </button>
        </>
      )}

      {state.presentQuestion > -1 && (
        <>
          <QuestionContainer />
        </>
      )}
    </div>
  );
}
