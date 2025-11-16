"use client";

import * as React from "react";
import { CodeIcon } from "lucide-react";
import { KEYS } from "platejs";
import { useEditorRef } from "platejs/react";
import { ToolbarButton } from "./toolbar";

export function InsertCodeToolbarButton(
	props: React.ComponentProps<typeof ToolbarButton>
) {
	const editor = useEditorRef();

	return (
		<ToolbarButton
			{...props}
			tooltip="Insert Code Block"
			onClick={() => {
				editor.tf.insertNodes({
					children: [{ children: [{ text: "" }], type: "code_line" }],
					lang: "javascript",
					type: KEYS.codeBlock,
				});
			}}
		>
			<CodeIcon className="w-4 h-4" />
		</ToolbarButton>
	);
}
