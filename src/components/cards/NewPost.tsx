import { component$ } from "@builder.io/qwik";
import { BsSuitHeartFill } from "@qwikest/icons/bootstrap";
import { Image } from "@unpic/qwik";

interface inputNewPost {
  title: string;
  img: string;
  likes: string;
  avatar: string;
}

export default component$(({ title, img, likes, avatar }: inputNewPost) => {
  return (
    <div class="max-w-sm bg-home-blue-300 w-64 h-60 rounded-3xl p-4 space-y-2">
      <Image
        src={img}
        layout="post"
        alt="New Post"
        height={100}
        widht={100}
        class="mb-4 w-full h-32 rounded-xl"
      />

      <p class="text-lg text-white font-blod">{title}</p>
      <div class="flex justify-between items-center overflow-auto">
        <Image
          src={avatar}
          layout="constrained"
          alt="Icon"
          height={100}
          widht={100}
          class="w-8 h-8 bg-cover rounded-full"
        />
        <p class="flex gap-2 text-icon-active items-center">
          <BsSuitHeartFill />
          {likes}
        </p>
      </div>
    </div>
  );
});
