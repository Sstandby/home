import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import NewPost from "~/components/cards/NewPost";

export default component$(() => {
  const items = [
    {
      img: "https://i.pinimg.com/originals/70/ea/62/70ea628636a68c034ecd30b73363be67.jpg",
      title: "Reversing",
      likes: "129",
      avatar:
        "https://i.pinimg.com/originals/3d/18/9b/3d189b230eaf41c2c0c2c1f6f8a16e8c.jpg",
    },
    {
      img: "https://wallpapers.com/images/hd/cyberpunk-aesthetic-h2or3egwcz8eors0.jpg",
      title: "Big data",
      likes: "223",
      avatar:
        "https://i.pinimg.com/originals/3d/18/9b/3d189b230eaf41c2c0c2c1f6f8a16e8c.jpg",
    },
    {
      img: "https://i.etsystatic.com/18836924/r/il/6ab88b/4569682143/il_fullxfull.4569682143_qkwk.jpg",
      title: "Hacking web",
      likes: "443",
      avatar:
        "https://i.pinimg.com/originals/3d/18/9b/3d189b230eaf41c2c0c2c1f6f8a16e8c.jpg",
    },
  ];
  return (
    <div class="flex items-end h-screen">
      <div class="bg-gradient-to-b from-home-blue-600 w-[1334px] h-56 bg-black rounded-3xl">
        <div class="relative flex justify-start ml-20 top-[-84px] space-x-8">
          {items.map(({ img, title, likes, avatar }, index) => (
            <NewPost
              key={index}
              img={img}
              title={title}
              likes={likes}
              avatar={avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
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
