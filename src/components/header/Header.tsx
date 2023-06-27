import { component$ } from "@builder.io/qwik";
import NavButton from "~/components/buttons/NavButton";

import IconTag from "~/components/icons/IconTag";
import IconHome from "~/components/icons/IconHome";
import IconAtom from "~/components/icons/IconAtom";
import IconTerminal from "~/components/icons/IconTerminal";
import IconDarkMode from "~/components/icons/IconDarkMode";

export default component$(() => {
  const icons = [
    { Icon: IconHome },
    { Icon: IconTag },
    { Icon: IconAtom },
    { Icon: IconTerminal },
  ];
  return (
    <header>
      <nav class="flex flex-col items-center justify-between w-24 h-screen border-r bg-home-blue-500 rounded-r py-9">
        <NavButton>
          <IconHome />
        </NavButton>
        <div class="flex flex-col items-center justify-center space-y-6">
          {icons.map(({ Icon }, index) => (
            <NavButton key={index} Icon={Icon} />
          ))}
        </div>
        <NavButton>
          <IconDarkMode />
        </NavButton>
      </nav>
    </header>
  );
});
