import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import Tim from "../assets/Tim.jpg"
import Mitch from "../assets/Mitch.jpg";
import Tomish from "../assets/Tomish.png";
import logo from "../assets/logo.png";
import gboy from "../assets/gboy.jpg";


const Vision = () => (
	<div className="flex h-screen w-full">
		<div className="flex flex-col w-40 mt-36 ml-32">
			<h4 className="text-2xl font-bold">
				Vision
			</h4>
			<p className=""><b>Let's hack the boat of businesses.</b> The inner purpose we have as a company is to redistribute the profit we make to every single. This is the reason why we're looking to optimize the size of the theam by hiring as few people as possible starting with this members (plus freelancers when needed) </p>
		</div>

		{/* Coin + Treasury */}
		<div className="flex justify-center items-center gap-6 flex-wrap w-2/3 my-28 ml-28">
				<div class="group h-64 w-64 [perspective:1000px]">
					<div class="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div class="absolute inset-0">
							<img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Tim} alt="" />
						</div>
						<div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div class="flex min-h-full flex-col items-center justify-center">
								<h1 class="text-2xl ">@MortimCrypto</h1>
								<p class="text-lg font-bold">Founder and Creative Head</p>
								<div className="flex space-x-4 p-3">
									<a className="link hover:link-primary ">
										<FaTwitter />
									</a>
									<a className="link hover:link-primary">
										<FaLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group h-64 w-64 [perspective:1000px]">
					<div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div class="absolute inset-0">
							<img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Mitch} alt="" />
						</div>
						<div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div class="flex min-h-full flex-col items-center justify-center">
								<h1 class="text-2xl ">@mitchy_land_</h1>
								<p class="text-lg font-bold">Financial Head</p>
								<div className="flex space-x-4 p-3">
									<a className="link hover:link-primary ">
										<FaTwitter />
									</a>
									<a className="link hover:link-primary">
										<FaLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group h-64 w-64 [perspective:1000px]">
					<div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div class="absolute inset-0">
							<img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Tomish} alt="" />
						</div>
						<div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div class="flex min-h-full flex-col items-center justify-center">
								<h1 class="text-2xl ">@ThyMish</h1>
								<p class="text-lg font-bold">Project Manager</p>
								<div className="flex space-x-4 p-3">
									<a className="link hover:link-primary ">
										<FaTwitter />
									</a>
									<a className="link hover:link-primary">
										<FaLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group h-64 w-64 [perspective:1000px]">
					<div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div class="absolute inset-0">
							<img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={logo} alt="" />
						</div>
						<div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div class="flex min-h-full flex-col items-center justify-center">
								<h1 class="text-2xl ">Fongzy</h1>
								<p class="text-lg font-bold">Community Manager</p>
								<div className="flex space-x-4 p-3">
									<a className="link hover:link-primary ">
										<FaTwitter />
									</a>
									<a className="link hover:link-primary">
										<FaLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group h-64 w-64 [perspective:1000px]">
					<div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div class="absolute inset-0">
							<img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={logo} alt="" />
						</div>
						<div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div class="flex min-h-full flex-col items-center justify-center">
								<h1 class="text-2xl ">@</h1>
								<p class="text-lg font-bold">Lead Developper</p>
								<div className="flex space-x-4 p-3">
									<a className="link hover:link-primary ">
										<FaTwitter />
									</a>
									<a className="link hover:link-primary">
										<FaLinkedin />
									</a>
									<a className="link hover:link-primary">
										<FaGithub />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group h-64 w-64 [perspective:1000px]">
					<div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div class="absolute inset-0">
							<img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gboy} alt="" />
						</div>
						<div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
							<div class="flex min-h-full flex-col items-center justify-center">
								<h1 class="text-2xl ">@Checkgib</h1>
								<p class="text-lg font-bold">Developper front-end</p>
								<div className="flex space-x-4 p-3">
									<a className="link hover:link-primary ">
										<FaTwitter />
									</a>
									<a className="link hover:link-primary">
										<FaLinkedin />
									</a>
									<a className="link hover:link-primary">
										<FaGithub />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>


);

export default Vision;