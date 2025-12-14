import { format } from 'date-fns';

export function formatDateRange(startDate: Date, endDate?: Date) {
	const startLabel = format(startDate, 'MMM yyyy');
	const endLabel = endDate ? format(endDate, 'MMM yyyy') : 'Present';
	return `${startLabel} — ${endLabel}`;
}
