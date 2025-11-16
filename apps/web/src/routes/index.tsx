import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="flex flex-col bg-background/95">
			{/* Hero Section */}
			<section className="flex flex-1 items-center justify-center px-4 py-16">
				<div className="mx-auto max-w-5xl text-center">
					<h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
						Meet Your Intelligent
						<br />
						Research Assistant
					</h1>
					<p className="mb-10 text-xl text-muted-foreground sm:text-xl">
						read, write, and organize research with ease.
					</p>
					<div className="flex justify-center">
						<Link to="/editor">
							<Button className="h-12 px-7 text-md">Start Writing</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
