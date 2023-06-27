import { component$ } from "@builder.io/qwik";
import { LuTerminalSquare } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="flex" style={{ fontSize: "24px", color: "white" }}>
      <LuTerminalSquare />
    </div>
  );
});
