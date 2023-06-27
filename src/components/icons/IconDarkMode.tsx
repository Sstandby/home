import { component$ } from "@builder.io/qwik";
import { LuMoon } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="flex" style={{ fontSize: "24px", color: "white" }}>
      <LuMoon />
    </div>
  );
});
