import { component$ } from "@builder.io/qwik"
import NavButton from "~/components/buttons/NavButton"

import { LuHome, LuMicroscope, LuMoon, LuTag, LuTerminalSquare } from "@qwikest/icons/lucide"

export default component$(() => {
  const icons = [
    { icon: <LuHome /> },
    { icon: <LuTag /> },
    { icon: <LuMicroscope /> },
    { icon: <LuTerminalSquare /> },
  ]
  return (
    <header>
      <nav class="flex flex-col items-center justify-between w-min py-9 px-4 bg-gradient-to-b from-home-blue-400 to-home-blue-600 h-screen text-icon-inactive text-2xl">
        <NavButton>
          <LuHome />
        </NavButton>
        <div class="flex flex-col items-center justify-center gap-8">
          {icons.map(({ icon }, index) => (
            <NavButton key={index}>{icon}</NavButton>
          ))}
        </div>
        <NavButton>
          <LuMoon />
        </NavButton>
      </nav>
    </header>
  )
})
