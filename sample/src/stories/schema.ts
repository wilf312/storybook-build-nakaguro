import { z } from 'zod';

export const schema = z.object({
  ネスト: z.object({
    ['中黒・あり']: z.string(),
  }),
});

export type SchemaType = z.infer<typeof schema>;
