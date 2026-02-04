import { openRouter, openRouterAsOpenAI } from "@/configs/ai.config";
import { env } from "@/configs/env.config";

export const analyzeModel = openRouter(
	env.NEXT_PUBLIC_OPENROUTER_ANALYZE_MODEL,
	{
		logprobs: true,
		reasoning: {
			effort: "medium",
			enabled: true,
		},
		usage: {
			include: true,
		},
	},
);

export const embeddingModel = openRouterAsOpenAI.embedding(
	env.NEXT_PUBLIC_OPENROUTER_EMBEDDING_MODEL, // 1024-dimensional embeddings
);
