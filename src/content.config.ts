import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z
		.object({
			title: z.string(),
			description: z.string(),
			type: z.enum(['work', 'project']),
			role: z.string().optional(),
			pubDate: z.coerce.date(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			githubRepo: z.string().url().optional(),
			liveUrl: z.string().url().optional(),
			heroImage: z.string().optional(),
			tags: z.array(z.string()).optional(),
			updatedDate: z.coerce.date().optional(),
		})
		.refine(
			(data) => (data.type === 'work' && !!data.role) || data.type === 'project',
			{
				message: 'Work entries must include a role.',
				path: ['role'],
			},
		),
});

export const collections = { blog };
