---
title: "Wikipedia RAG QNA System"
description: "A simple RAG system which answers questions about football based on a wikipedia page."
tags: ["Langchain", "FAISS", "Groq(Llama 3)", "HuggingFace sentence-transformers"]
github: "https://github.com/sathyajitp/FootballRAG"
---

Built a Retrieval-Augmented Generation pipeline from scratch to answer natural-language questions over Wikipedia
content, implementing document chunking, local sentence-transformer embeddings and FAISS vector search with
MMR retrieval to ground LLM responses in source text.
Migrated the system across three LLM/embedding providers (OpenAI, Gemini, Groq) to resolve rate-limiting
constraints, deepening understanding of provider-agnostic RAG architecture.