import type { CollectionEntry } from 'astro:content';

export type ExperienceEntry = CollectionEntry<'blog'>;

export type SearchEntry = {
	id: string;
	url: string;
	title: string;
	description: string;
	role?: string;
	type: 'work' | 'project';
	tags: string[];
	dateRange: string;
};
