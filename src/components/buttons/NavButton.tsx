import { Slot, component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <button class="flex w-14 h-14 justify-center items-center rounded-full bg-home-blue-500 outline-none focus:text-icon-active hover:text-icon-active duration-200">
      <Slot />
    </button>
  )
})
