import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextPage,
} from "next";
import { Session } from "next-auth";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import HomeLogin from "../components/HomeLogin";
import LinkCreateForm from "../components/LinkCreateForm";

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
	const { data: session } = useSession();

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex justify-center p-4 h-[calc(80vh-6rem)]">
				<HomeLogin userData={userData} />
				<span className="w-[4px] mx-8 bg-gray-600 h-3/5 mt-[10%] rounded"></span>
				<LinkCreateForm />
			</main>
		</div>
	);
};

export default Home;
