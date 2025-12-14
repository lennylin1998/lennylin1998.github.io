import { useMemo, useState } from 'preact/hooks';
import type { SearchEntry } from '../../types/experience';

type Props = {
	entries: SearchEntry[];
};

const normalize = (value: string) => value.toLowerCase();

export default function SearchIsland({ entries }: Props) {
	const [query, setQuery] = useState('');
	const normalizedQuery = normalize(query.trim());

	const filtered = useMemo(() => {
		if (!normalizedQuery) return entries;
		return entries.filter((entry) => {
			const haystack = normalize(
				[
					entry.title,
					entry.description,
					entry.role ?? '',
					entry.tags.join(' '),
					entry.dateRange,
				].join(' '),
			);
			return haystack.includes(normalizedQuery);
		});
	}, [entries, normalizedQuery]);

	return (
		<div class="search-panel">
			<label class="search-panel__label" htmlFor="experience-search">
				Search by skill, role, or keyword
			</label>
			<input
				id="experience-search"
				type="search"
				class="search-panel__input"
				placeholder="e.g. accessibility, full-stack, marketing"
				value={query}
				onInput={(event) => setQuery((event.currentTarget as HTMLInputElement).value)}
			/>
			<p class="search-panel__meta">
				Showing {filtered.length} of {entries.length} entries
			</p>
			<div class="search-panel__results">
				{filtered.map((entry) => (
					<div key={entry.id}>
						<a class="search-panel__result" href={entry.url}>
							<div>
								<p class="search-panel__eyebrow">
									{entry.type === 'work' ? 'Work' : 'Project'} · {entry.dateRange}
								</p>
								<strong>{entry.title}</strong>
								{entry.role && <span class="search-panel__role">{entry.role}</span>}
								<p>{entry.description}</p>
							</div>
							{entry.tags.length > 0 && (
								<div class="search-panel__tags">
									{entry.tags.map((tag) => (
										<span>{tag}</span>
									))}
								</div>
							)}
						</a>
					</div>
				))}
				{filtered.length === 0 && (
					<p class="search-panel__empty">No matching experience yet. Try another keyword.</p>
				)}
			</div>
		</div>
	);
}
