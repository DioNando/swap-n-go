import { type EmojiInterface } from "~/interfaces/emoji.interface";

export const useEmojiStore = defineStore("emojiStore", {
  state: () => ({
    emojis: [] as EmojiInterface[],
    randomEmoji: null as EmojiInterface | null,
  }),
  actions: {
    async fetch() {
      const config = useRuntimeConfig();
      const data = await $fetch<EmojiInterface[]>(config.public.emojisApiUrl);
      this.emojis = data;
    },
    getRandomEmoji(): EmojiInterface {
      const randomIndex = Math.floor(Math.random() * this.emojis.length);
      return this.emojis[randomIndex];
    },
  },
});
