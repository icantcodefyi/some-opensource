"use client";

import {
	ArrowUpToLineIcon,
	BaselineIcon,
	BoldIcon,
	Code2Icon,
	HighlighterIcon,
	ItalicIcon,
	PaintBucketIcon,
	StrikethroughIcon,
	UnderlineIcon,
	WandSparklesIcon,
} from "lucide-react";
import { KEYS } from "platejs";
import { useEditorReadOnly } from "platejs/react";

import { AIToolbarButton } from "./ai-toolbar-button";
import { AlignToolbarButton } from "./align-toolbar-button";
import { AutocompleteToolbarButton } from "./autocomplete-toolbar-button";
import { CiteToolbarButton } from "./cite-toolbar-button";
import { CommentToolbarButton } from "./comment-toolbar-button";
import { EmojiToolbarButton } from "./emoji-toolbar-button";
import { ExportToolbarButton } from "./export-toolbar-button";
import { FontColorToolbarButton } from "./font-color-toolbar-button";
import { FontSizeToolbarButton } from "./font-size-toolbar-button";
import { RedoToolbarButton, UndoToolbarButton } from "./history-toolbar-button";
import { ImportToolbarButton } from "./import-toolbar-button";
import {
	IndentToolbarButton,
	OutdentToolbarButton,
} from "./indent-toolbar-button";
import { InsertCodeToolbarButton } from "./insert-code-toolbar-button";
import { InsertImageToolbarButton } from "./insert-image-toolbar-button";
import { InsertMathToolbarButton } from "./insert-math-toolbar-button";
import { InsertToolbarButton } from "./insert-toolbar-button";
import { LineHeightToolbarButton } from "./line-height-toolbar-button";
import { LinkToolbarButton } from "./link-toolbar-button";
import {
	BulletedListToolbarButton,
	NumberedListToolbarButton,
	TodoListToolbarButton,
} from "./list-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { MediaToolbarButton } from "./media-toolbar-button";
import { ModeToolbarButton } from "./mode-toolbar-button";
import { MoreToolbarButton } from "./more-toolbar-button";
import { TableToolbarButton } from "./table-toolbar-button";
import { ToggleToolbarButton } from "./toggle-toolbar-button";
import { ToolbarGroup, ToolbarSeparator } from "./toolbar";
import { TurnIntoToolbarButton } from "./turn-into-toolbar-button";
import { WordCountDisplay } from "./word-count-display";

export function FixedToolbarButtons() {
	const readOnly = useEditorReadOnly();

	return (
		<div className="flex w-full items-center justify-center gap-1 relative">
			{!readOnly && (
				<>
					{/* Main Content - Centered */}
					<div className="flex items-center gap-0.5">
						{/* Autocomplete Toggle */}
						<AutocompleteToolbarButton />

						<ToolbarSeparator />

						{/* Cite Button */}
						<CiteToolbarButton />

						<ToolbarSeparator />

						{/* Turn Into Dropdown */}
						<TurnIntoToolbarButton />

						<ToolbarSeparator />

						{/* Insert Buttons */}
						<InsertImageToolbarButton />
						<TableToolbarButton />
						<InsertCodeToolbarButton />
						<InsertMathToolbarButton />

						<ToolbarSeparator />

						{/* Undo/Redo */}
						<UndoToolbarButton />
						<RedoToolbarButton />
					</div>

					{/* Right Section - Word Count (Absolute positioned) */}
					<div className="absolute right-2">
						<WordCountDisplay />
					</div>

					{/* ========== OLD TOOLBAR (COMMENTED OUT) ========== */}
					{/* <ToolbarGroup>
						<InsertToolbarButton />
					</ToolbarGroup>

					<ToolbarGroup>
						<TurnIntoToolbarButton />
					</ToolbarGroup>

					<ToolbarGroup>
						<AlignToolbarButton />
					</ToolbarGroup>

					<ToolbarGroup>
						<MarkToolbarButton nodeType={KEYS.bold} tooltip="Bold (⌘+B)">
							<BoldIcon />
						</MarkToolbarButton>

						<MarkToolbarButton nodeType={KEYS.italic} tooltip="Italic (⌘+I)">
							<ItalicIcon />
						</MarkToolbarButton>

						<MarkToolbarButton
							nodeType={KEYS.underline}
							tooltip="Underline (⌘+U)"
						>
							<UnderlineIcon />
						</MarkToolbarButton>

						<MarkToolbarButton
							nodeType={KEYS.strikethrough}
							tooltip="Strikethrough (⌘+⇧+M)"
						>
							<StrikethroughIcon />
						</MarkToolbarButton>
					</ToolbarGroup>

					<ToolbarGroup>
						<NumberedListToolbarButton />
						<BulletedListToolbarButton />
						<TodoListToolbarButton />
					</ToolbarGroup>

					<ToolbarGroup>
						<MediaToolbarButton nodeType={KEYS.img} />
						<LinkToolbarButton />
						<TableToolbarButton />
						<MoreToolbarButton />
					</ToolbarGroup>

					<ToolbarGroup>
						<UndoToolbarButton />
						<RedoToolbarButton />
					</ToolbarGroup> */}
				</>
			)}
		</div>
	);
}
