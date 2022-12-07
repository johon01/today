"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function PageRoute() {
  const [contactInp, setContactInp] = useState("");
  const [feedbackInp, setFeedbackInp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onContactChange = (e) => {
    setContactInp(e.target.value);
  };
  const onFeedbackChange = (e) => {
    setFeedbackInp(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      axios
        .post("http://localhost:3000/feedbacks", {
          contact: contactInp,
          description: feedbackInp,
        })
        .then(function (response) {
          console.log(response);
          setIsLoading(false);
          router.push("/");
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-2 max-w-5xl mx-auto mt-16 gap-20">
        <form onSubmit={onSubmit} className="shadow-lg border p-10">
          <label htmlFor="email">
            Email / telefon raqam / telegram username:
          </label>
          <input
            type="text"
            value={contactInp}
            onChange={onContactChange}
            name=""
            id="email"
            className="p-2 block w-full text-lg rounded-lg border outline-none"
          />
          <label htmlFor="feedback" className="block mt-6">
            Tavsiyangiz:
          </label>
          <textarea
            className="p-2 block w-full text-lg rounded-lg border outline-none"
            id="feedback"
            value={feedbackInp}
            cols="30"
            rows="4"
            onChange={onFeedbackChange}
          ></textarea>
          <input
            type="submit"
            disabled={isLoading}
            value="Jo'natish"
            className="mt-6 float-right disabled:bg-gray-600 hover:bg-indigo-700 hover:scale-105 bg-indigo-500 text-white px-6 py-2 rounded text-lg font-semibold"
          />
        </form>
        <div>
          <Image
            src="/feedback.svg"
            alt="Vercel Logo"
            className=""
            width={500}
            height={1100}
          />
        </div>
      </div>
      {isLoading && (
        <div className="absolute inset-0  bg-slate-900 opacity-30 flex justify-center items-center text-4xl text-white">
          Yuklanmoqda...
        </div>
      )}
    </>
  );
}

export default PageRoute;
