import { Header, Template } from "../components";

const Contact = () => {
	return (
		<div>
			<Header title="Andrio Pratama Sirait Site" />
			<Template menu="/contact">
				<div className="flex items-center justify-center flex-col h-full my-10">
					<h2 className="text-button2 font-bold text-xl mb-5">MY CONTACT</h2>
					<div className="text-center">
						<p>Jl. Al Bashor</p>
						<p>Jakarta Timur, Indonesia</p>
						<p>13550</p>
						+62 815 1198 2551 | maulana.saputra1909@gmail.com
					</div>
				</div>
			</Template>
		</div>
	);
};

export default Contact;
