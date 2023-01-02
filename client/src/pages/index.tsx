import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/templates/Navbar";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen bg-gray-50 flex-col font-poppins">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="w-full sticky top-0 z-50 bg-gray-50">
				<Navbar />
			</header>
			<div className="max-w-4xl w-full m-auto">
				<main className="flex w-full flex-col text-center ">
					<section className="h-full w-full">
						<div className="flex justify-between items-center">
							<div className="flex flex-col text-gray-500 text-left">
								<span className="font-semibold text-sm ">HELLO</span>
								<span className="text-5xl font-bold my-3 text-gray-700">
									I'm Rogelio John
								</span>
								<span className="font-medium text-lg">
									IT Graduate & Junior Web Developer
								</span>
								<div>
									<button className="rounded-md shadow-md border-2 border-amber-400 hover:bg-white hover:text-amber-400 font-semibold text-xs my-10 p-3 bg-amber-400 text-white">
										GET TO KNOW ME
									</button>
								</div>
							</div>
							<div className="relative flex-1 h-[600px]">
								<img
									src="/images/background-shape.png"
									className="absolute h-[530px] object-cover"
									alt="background-shape"
								/>
								<img
									src="/images/standing-portrait.png"
									className="absolute w-full h-full object-contain object-center mx-auto right-0 bottom-0 left-0"
									alt="background-shape"
								/>
							</div>
						</div>
					</section>
					<section>
						<div className="flex justify-between items-center">
							<div className="flex flex-col text-gray-500 text-left">
								<span className="font-semibold text-sm ">HELLO</span>
								<span className="text-5xl font-bold my-3 text-gray-700">
									I'm Rogelio John
								</span>
								<span className="font-medium text-lg">
									IT Graduate & Junior Web Developer
								</span>
								<div>
									<button className="rounded-md shadow-md border-2 border-amber-400 hover:bg-white hover:text-amber-400 font-semibold text-xs my-10 p-3 bg-amber-400 text-white">
										GET TO KNOW ME
									</button>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>

			{/* <footer className="flex h-24 w-full items-center justify-center border-t">
				<a
					className="flex items-center justify-center gap-2"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</a>
			</footer> */}
		</div>
	);
};

export default Home;
