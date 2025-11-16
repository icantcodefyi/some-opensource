"use client";

import * as React from "react";
import { AtSignIcon } from "lucide-react";
import { Button } from "./button";

export function CiteToolbarButton() {
	return (
		<Button
			variant="ghost"
			size="sm"
			className="h-7 text-xs gap-1 hover:bg-accent"
			onClick={() => {
				// TODO: Implement cite functionality
				console.log("Cite clicked");
			}}
		>
			<AtSignIcon className="w-4 h-4" />
			<span>Cite</span>
		</Button>
	);
}

