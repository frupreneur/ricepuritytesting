import React from "react";
import { ContactForm, Meta } from "@/components";
import { useGlobalState } from "@/state";

export default function contact() {
  const { state } = useGlobalState();

  console.log(state);
  return (
    <>
      <Meta title="Contact Us - Love Languages Test" index="noindex" />
      <ContactForm />
    </>
  );
}
