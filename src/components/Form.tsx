import { ChangeEvent, FormEvent } from "react";
import { FormProps } from "../types";

function Form(props: FormProps) {
  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    props.setSubmitted(true);
    props.randomizeAnswer();
  };

  return (
    <form
      className="flex items-center justify-center gap-2"
      action=""
      onSubmit={formHandler}
    >
      <div>
        <label htmlFor="question"></label>
        <input
          className="rounded-lg border border-blue-50 bg-white/40 px-2 py-1 outline"
          type="text"
          name="question"
          id="question"
          placeholder="Will I win the lottery?"
          value={props.question}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.setQuestion(e.target.value)
          }
          required
        />
      </div>
      <button
        className="rounded-lg border border-slate-50 bg-slate-800 px-3 py-1 text-slate-50 outline outline-slate-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
