"use client";

import * as React from "react";
import { useEditorSelector } from "platejs/react";
import { Node } from "slate";

export function WordCountDisplay() {
	// Calculate word count reactively
	const wordCount = useEditorSelector((editor) => {
		const text = editor.children.map((n) => Node.string(n)).join(" ");
		const words = text.trim().split(/\s+/).filter(Boolean);
		return words.length > 0 ? words.length : 0;
	}, []);

	return (
		<div className="flex items-center h-7 px-2">
			<span className="text-muted-foreground text-xs font-medium">
				{wordCount} words
			</span>
		</div>
	);
}

