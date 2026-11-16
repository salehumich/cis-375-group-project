import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="flex flex-col min-h-screen gap-8 p-8">
			<header className="flex">
				Support
				<p className="flex justify-end w-full">
					Account
				</p>
			</header>

			<main className="flex flex-col gap-8">
				<h1 className="w-full">
					Compose | Search | Sort | Filters
				</h1>
				<div className="flex flex-col">
					Emails
				</div>
			</main>

			<footer className="mt-auto mb-8">
				<Link href="/">{"<"} Back to home page</Link>
			</footer>
		</div>
	)
}