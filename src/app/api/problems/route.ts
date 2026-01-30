import { NextResponse } from 'next/server';
import problemsData from '@/data/problems.json';

export async function GET() {
    try {
        // Simply return the JSON data with assigned IDs if missing
        const problemsWithIds = (problemsData as any[]).map((problem, index) => ({
            ...problem,
            id: problem.id || (index + 1)
        }));

        return NextResponse.json(problemsWithIds);
    } catch (error) {
        console.error('Error fetching problems:', error);
        return NextResponse.json({ error: 'Failed to fetch problems' }, { status: 500 });
    }
}
