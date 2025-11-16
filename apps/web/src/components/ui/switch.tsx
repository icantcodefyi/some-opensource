import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

function Switch({
	className,
	...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	const [checked, setChecked] = React.useState(
		props.checked || props.defaultChecked || false
	);

	React.useEffect(() => {
		if (props.checked !== undefined) {
			setChecked(props.checked);
		}
	}, [props.checked]);

	const handleCheckedChange = (newChecked: boolean) => {
		setChecked(newChecked);
		props.onCheckedChange?.(newChecked);
	};

	return (
		<SwitchPrimitive.Root
			{...props}
			checked={checked}
			onCheckedChange={handleCheckedChange}
			data-slot="switch"
			className={cn(
				"peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 relative",
				className
			)}
		>
			<motion.span
				data-slot="switch-thumb"
				className={cn(
					"bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0"
				)}
				animate={{
					x: checked ? "calc(100% - 2px)" : 0,
				}}
				transition={{
					type: "spring",
					stiffness: 700,
					damping: 30,
				}}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
