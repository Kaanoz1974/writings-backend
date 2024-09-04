import { z } from "zod";
import { CHAPTER_COUNT, versesInSurahs } from "../../verse/types/utility";
import { MAX_LENGTH_OF_COLLECTION_NAME } from "./utility";

export const editSavedContentSchema = z
  .object({
    surahNumber: z.number().int().min(1).max(CHAPTER_COUNT),
    verseNumber: z.number().int().min(1),
    collectionName: z
      .string()
      .min(1)
      .max(MAX_LENGTH_OF_COLLECTION_NAME)
      .optional(),
    newNote: z.string().min(1),
  })
  .superRefine((data, ctx) => {
    const { surahNumber, verseNumber } = data;
    if (
      !(versesInSurahs[surahNumber - 1] >= verseNumber === true ? true : false)
    )
      ctx.addIssue({
        path: ["verseNumber", "surahNumber"],
        message: `Invalid verseNumber or surahNumber`,
        code: "custom",
      });
  });