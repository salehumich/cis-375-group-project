"use client";

import Link from "next/link";

import { useState } from "react";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
			<main className="flex flex-1 flex-col p-8">
				<p><Link href="/">{"<"} Back to home page</Link></p>
				
				<div className="flex flex-1 flex-col items-center justify-center">
					<h1 className="text-3xl font-semibold mb-8">Sign Up</h1>
					
					<div className="flex flex-col">
						<label htmlFor="email">Email</label>
						<input
						id="email"
						type="email"
						placeholder="Enter your email"
						className="mb-4"
						/>

						<div>
							<label htmlFor="password">Password<br /></label>
							<input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Enter your password"
							className="mb-8"
							/>
							<button
								type="button"
								onClick={() => setShowPassword(previous => !previous)}
							>
								{showPassword ? "Hide Password" : "Show Password"}
							</button>
						</div>

						<div>
							<label htmlFor="confirmPassword">Confirm Password<br /></label>
							<input
							id="confirmPassword"
							type={showPassword ? "text" : "password"}
							placeholder="Confirm your password"
							className="mb-8"
							/>
							<button
								type="button"
								onClick={() => setShowPassword(previous => !previous)}
							>
								{showPassword ? "Hide Password" : "Show Password"}
							</button>
						</div>
					</div>
					
					<a
						className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
						href="/inbox"
						rel="noopener noreferrer"
					>
					Sign Up
					</a>

					<p className="mt-8 mb-8">
						Already have an account?{" "}
						<Link href="/login" className="text-blue-500 hover:underline">Login</Link>
					</p>
				</div>
			</main>
        </div>
    )
}