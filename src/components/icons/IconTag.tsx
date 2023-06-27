import { component$ } from "@builder.io/qwik";
import { LuTag } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="flex" style={{ fontSize: "24px", color: "white" }}>
      <LuTag />
    </div>
  );
});
