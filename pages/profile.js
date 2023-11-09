import { Footer, Header, Menu, Profile, Template } from "../components";

const ProfilePage = () => {
	return (
		<div>
			<Header title="Andrio Pratama Sirait Site" />
			<Template menu="/profile">
				<h2 className="text-button2 font-bold text-xl my-5">ABOUT ME</h2>
				<table className="table-fixed mt-5">
					<tbody>
						<tr>
							<td className="text-left text-sm w-[180px] text-primaryText1">Name</td>
							<td className="text-right font-semibold">
								Muhammad Maulana Saputra
							</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px] text-primaryText1">Date of Birth</td>
							<td className="text-right font-semibold">September, 18th 2003</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px] text-primaryText1">Phone</td>
							<td className="text-right font-semibold">+62 815 1198 2551</td>
						</tr>
						<tr>
							<td className="text-left text-sm w-[180px] text-primaryText1">Email</td>
							<td className="text-right font-semibold">
								maulana.saputra1909@gmail.com
							</td>
						</tr>
						{/* <tr>
							<td className="text-left text-sm w-[180px] text-primaryText1">Web</td>
							<td className="text-right font-semibold">www.andriosirait.com</td>
						</tr> */}
						<tr>
							<td className="text-left text-sm w-[180px] text-primaryText1">Address</td>
							<td className="text-right font-semibold">Jakarta, Indonesia</td>
						</tr>
					</tbody>
				</table>
				<h2 className="text-button2 font-bold text-xl mt-20 mb-5">EDUCATION</h2>
				<ol className="relative border-l border-gray-200 dark:border-button2">
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-button2 dark:bg-button1"></div>
						<time className="mb-1 text-sm font-normal leading-none text-primaryText1 dark:text-gray-500">
							2019 - 2022
						</time>
						<h3 className="text-base font-semibold text-primaryText2">
							Senior High School / SMK Budhi Warman 1 Jakarta
						</h3>
						<p className="text-sm font-normal text-primaryText1">
							Science major. Continue my interest into computer, start to learn a programming language with Pascal and Javascript, markup language such as HTML and CSS as style sheet language.
							Became the 4th best graduate at SMK Budhi Warman 1 with an average score of 93.81.
						</p>
					</li>
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-button2 dark:bg-button1"></div>
						<time className="mb-1 text-sm font-normal leading-none text-primaryText1 dark:text-gray-500">
							2016 - 2019
						</time>
						<h3 className="text-base font-semibold text-primaryText2">
							Junior High School / SMPN 263 Jakarta
						</h3>
						<p className="text-sm font-normal text-primaryText1">
							Continue my interest into computertried graphic design. Made a lot of
							projects in graphic design and video editing
						</p>
					</li>
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-button2 dark:bg-button1"></div>
						<time className="mb-1 text-sm font-normal leading-none text-primaryText1 dark:text-gray-500">
							2010 - 2016
						</time>
						<h3 className="text-base font-semibold text-primaryText2">
							Junior High School / SDN 5 Jakarta
						</h3>
						<p className="text-sm font-normal text-primaryText1">
							Started liked in computer, often fiddling with the computer and drawing on the computer
						</p>
					</li>
				</ol>
				<h2 className="text-button2 font-bold text-xl mt-10 mb-5">HOBBIES</h2>
				<p className="text-center md:mx-20 mb-14 text-primaryText1">
					Enjoy playing video games a little while to refresh myself from the
					exhausting coding. Also enjoy drawing and workout.
				</p>
			</Template>
		</div>
	);
};

export default ProfilePage;
