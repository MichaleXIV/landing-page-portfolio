import { Header, Template } from "../components";
import Image from "next/image";

const Skill = ({ src, nama, level }) => {
	return (
		<div className="mb-5 text-center">
			<Image alt={nama} src={src} width={100} height={80} objectFit="contain" />
			<p>{nama}</p>
			<p className="text-sm text-gray-600 text-center">{level}</p>
		</div>
	);
};

const Resume = () => {
	return (
		<div>
			<Header title="Muhammad Maulana Saputra Site" />
			<Template menu="/resume">
				<h1 className="text-button2 font-bold text-xl mb-10 mt-5">
					WORK EXPERIENCE
				</h1>
				<ol className="relative border-l border-button1">
					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-button1 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-buttonText1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							August 2022 - now <span className="text-gray-400">| Full time</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							PT. Mitratech Indonesia - Front-End Web Developer
						</h3>
						<p className="mb-4 text-sm font-normal text-primaryText1">
							Mitra Tech Indonesia is a Leading Solution Provider & System
							Integrator that Focuses on Providing Comprehensive Solution to the
							Client to Answer Business Needs & Operational Challenges.
						</p>
					</li>

					<li className="mb-10 ml-6">
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-button1 rounded-full ring-8 ring-white">
							<svg
								className="w-3 h-3 text-buttonText1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"></path>
							</svg>
						</span>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400">
							November 2022 - now <span className="text-gray-400">| Seasonal</span>
						</time>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
							PT. Andomus Tech Universe - Front-End Web Developer
						</h3>
						<p className="mb-4 text-sm font-normal text-primaryText1">
							Andomus menghadirkan sebuah inovasi digital yang didesain untuk pemenangan pemilu legistatif, kepala daerah hingga kepala desa yang berbasis web dan mobile dan terintegrasi Sistem Infomasi Geografis dengan memberikan kepastian Satu NIK Satu Suara pada setiap level pemilihan sehingga data yang dihasilkan lebih objective dan akurat
						</p>
					</li>
				</ol>

				<h1 className="text-button2 font-bold text-xl mt-5 mb-7">SKILL</h1>
				<p className="font-bold my-5 underline text-button1">Language</p>
				<div className="grid grid-cols-3 gap-10 text-center mb-10">
					<Skill
						src="/assets/images/typescript.png"
						nama="Typescript"
						level=""
					/>
					<Skill
						src="/assets/images/javascript.png"
						nama="JavaScript"
						level=""
					/>
					<Skill src="/assets/images/php.svg" nama="Php" level="" />
				</div>
				<p className="font-bold my-5 underline text-button1">Framework & Library</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-10 w-full">
					{/* <Skill
						src="/assets/images/react-native.png"
						nama="React Native"
						level="Expert "
					/> */}
					<Skill
						src="/assets/images/react.png"
						nama="React.js"
						level=""
					/>
					<Skill
						src="/assets/images/next.png"
						nama="Next.js"
						level=""
					/>
					<Skill
						src="/assets/images/express.png"
						nama="Express.js"
						level=""
					/>
					<Skill
						src="/assets/images/laravel.png"
						nama="Laravel"
						level=""
					/>
					{/* <Skill
						src="/assets/images/ci.png"
						nama="CodeIgniter"
						level=""
					/> */}
					<Skill
						src="/assets/images/bootstrap.png"
						nama="Bootstrap"
						level=""
					/>
					<Skill
						src="/assets/images/tailwind.png"
						nama="Tailwind"
						level=""
					/>
					{/* <Skill
						src="/assets/images/laravel-livewire.png"
						nama="Laravel Livewire"
						level="Intermediate "
					/>
					<Skill
						src="/assets/images/sass.png"
						nama="SASS"
						level="Intermediate "
					/>
					<Skill
						src="/assets/images/jquery.gif"
						nama="jQuery"
						level="Intermediate "
					/> */}
				</div>
				<p className="font-bold my-5 underline text-button1">Database</p>
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-center mb-10 w-full">
					<Skill
						src="/assets/images/mysql.png"
						nama="MySQL"
						level=" "
					/>
					<Skill
						src="/assets/images/postgresql.png"
						nama="PostgreSQL"
						level=" "
					/>
					<Skill
						src="/assets/images/mongodb.png"
						nama="MongoDB"
						level=" "
					/>
				</div>
				<p className="font-bold my-5 underline text-button1">Tools</p>
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-center mb-10 w-full">
					<Skill
						src="/assets/images/vscode.png"
						nama="VSCode"
						level=" "
					/>
					<Skill
						src="/assets/images/github.jpg"
						nama="GitHub"
						level=" "
					/>
					<Skill
						src="/assets/images/figma.png"
						nama="Figma"
						level=" "
					/>
				</div>
			</Template>
		</div>
	);
};

export default Resume;
