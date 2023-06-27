import { Slot, component$ } from "@builder.io/qwik";

interface NavButtonProps {
  Icon?: any;
}

export default component$(({ Icon }: NavButtonProps) => {
  return (
    <button class="flex w-14 h-14 justify-center items-center rounded-full border-2 bg-home-blue-400 opacity-50 focus:opacity-100 focus:outline-none hover:opacity-100">
      <Slot />
      {Icon && <Icon />}
    </button>
  );
});
