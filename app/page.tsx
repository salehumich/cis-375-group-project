import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<header className="flex w-full p-8">
				<p>Support</p>

				<div className="flex w-full justify-end gap-8">
					<a
						className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
						href="/login"
						rel="noopener noreferrer"
					>
						Login
					</a>
					<a
						className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
						href="/signup"
						rel="noopener noreferrer"
					>
						Sign Up
					</a>
				</div>
			</header>

			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<Image
					className="dark:invert h-5 w-[100px]"
					src="/next.svg"
					alt="Next.js logo"
					width={100}
					height={20}
					priority
				/>
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					AI Support Ticket Triage
					</h1>
					<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
					Manage customer support emails, identify urgent tickets, and generate AI-assisted replies.
					</p>
				</div>
				<div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
					<a
					className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
					href="/inbox"
					rel="noopener noreferrer"
					>
					Inbox
					</a>
				</div>
			</main>
		</div>
	);
}
