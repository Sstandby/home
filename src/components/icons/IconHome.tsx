import { component$ } from "@builder.io/qwik";
import { LuHome } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="flex" style={{ fontSize: "24px", color: "white" }}>
      <LuHome />
    </div>
  );
});
