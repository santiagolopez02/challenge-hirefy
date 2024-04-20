import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "tailwindcss/tailwind.css";
import { GET_COUNTRIES } from "@/data/query/countries";
import App from "@/containers/app";
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {},
  },
});

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache,
});

function MyApp({ countries }) {
  return (
    <div className=" h-screen bg-gradient-to-tr from-opaqueskyblue via-graydark to-violet">
      <ApolloProvider client={client}>
        <App countries={countries} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });
  const countries = data?.countries?.map((item) => {
    return {
      emoji: item.emoji,
      name: item?.name,
      location: item?.continent?.name,
      states: item?.states?.length ? `${item?.states?.length} states` : null,
      phone: "+" + item?.phone,
      currency: item?.currency?.split(",") || null,
      languages: item?.languages?.map((i) => i?.name) || null,
    };
  });

  return {
    props: {
      countries,
    },
  };
}
