import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextPage,
} from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeLogin from "../components/HomeLogin";
import LinkCreateForm from "../components/LinkCreateForm";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { ThemeContext } from "../context/ThemeContext";

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session = await getSession(context);
	return {
		props: {
			userData: session,
		},
	};
};

type HomeProps = {
	userData: Session | null;
};

const Home: NextPage<HomeProps> = ({ userData }: HomeProps) => {
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<Head>
				<title>Shrt-en</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="flex w-full justify-center p-4 h-[calc(60vh-6rem)]">
				<ThemeSwitcher />
				<HomeLogin userData={userData} />
				<span className="border-l border-l-gray-600 h-full rounded"></span>
				<LinkCreateForm />
			</main>
			<Footer />
		</>
	);
};

export default Home;
