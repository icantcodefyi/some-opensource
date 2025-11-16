"use client";

import * as React from "react";
import { ImageIcon } from "lucide-react";
import { ToolbarButton } from "./toolbar";

export function InsertImageToolbarButton(
	props: React.ComponentProps<typeof ToolbarButton>
) {
	return (
		<ToolbarButton {...props} tooltip="Insert Image">
			<ImageIcon className="w-4 h-4" />
		</ToolbarButton>
	);
}

