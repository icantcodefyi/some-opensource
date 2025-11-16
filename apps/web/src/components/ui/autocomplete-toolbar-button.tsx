"use client";

import * as React from "react";
import { Switch } from "./switch";
import { Button } from "./button";

export function AutocompleteToolbarButton() {
	const [autocompleteEnabled, setAutocompleteEnabled] = React.useState(false);

	return (
		<Button
			variant="ghost"
			size="sm"
			className="h-7 gap-2 hover:bg-accent"
			onClick={() => setAutocompleteEnabled(!autocompleteEnabled)}
			aria-label="Autocomplete settings"
		>
			<Switch
				checked={autocompleteEnabled}
				onCheckedChange={setAutocompleteEnabled}
				className="scale-90"
			/>
			<span className="text-xs font-medium">Autocomplete</span>
		</Button>
	);
}
