"use client";

import { useTasks } from "@/hooks/tasks.hook";

import { Button } from "@/components/ui/button";

export default function Home() {
	const tasks = useTasks();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{tasks?.map(({ _id, text }) => (
				<div key={_id}>{text}</div>
			))}

			<Button>test</Button>
		</main>
	);
}
