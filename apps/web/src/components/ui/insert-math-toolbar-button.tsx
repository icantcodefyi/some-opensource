"use client";

import * as React from "react";
import { KEYS } from "platejs";
import { useEditorRef } from "platejs/react";
import { ToolbarButton } from "./toolbar";

export function InsertMathToolbarButton(
	props: React.ComponentProps<typeof ToolbarButton>
) {
	const editor = useEditorRef();

	return (
		<ToolbarButton
			{...props}
			tooltip="Insert Math"
			onClick={() => {
				editor.tf.insertNodes({
					children: [{ text: "" }],
					type: KEYS.equation,
					texExpression: "",
				});
			}}
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-4 h-4"
			>
				<path
					d="M10.6666 5.33334H5.33331L7.99998 8.00001L5.33331 10.6667H10.6666"
					stroke="currentColor"
					strokeWidth="1.33333"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M13.3333 2H2.66667C2.29848 2 2 2.29848 2 2.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H13.3333C13.7015 14 14 13.7015 14 13.3333V2.66667C14 2.29848 13.7015 2 13.3333 2Z"
					stroke="currentColor"
					strokeWidth="1.33333"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</ToolbarButton>
	);
}

