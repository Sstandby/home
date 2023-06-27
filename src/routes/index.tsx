import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Hello System",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
