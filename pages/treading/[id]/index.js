import {
  Flex,
  Text,
  Box,
  SimpleGrid,
  CircularProgress,
  Stack,
  Switch,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const defaultEndPoint = `https://api.themoviedb.org/3/trending/all`;
const apiKey = `?api_key=${process.env.NEXT_PUBLIC_SYSTEM_ID}`;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndPoint}/${id}${apiKey}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Treading({ data }) {
  const { results } = data;
  const router = useRouter();

  const changePopulationRouter = useCallback(
    (event) => {
      const option = event.target.checked ? "week" : "day";
      router.push(`/treading/${option}`);
    },
    [router]
  );

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Flex direction="column" align="center" justify="center" bg="gray.900" p="5">
      <Text fontSize="3xl" color="white" mb="4">
        Popular Movies
      </Text>
      <Stack direction="row" spacing="3" mb="5">
        <Text color="gray.300">Day</Text>
        <Switch size="md" onChange={changePopulationRouter} />
        <Text color="gray.300">Week</Text>
      </Stack>

      <Text fontSize="2xl" color="white" mb="5">
        Movies From TMDB
      </Text>

      <SimpleGrid columns={columns} spacing={10}>
        {results?.map((result) => {
          const { id, poster_path, vote_average } = result;
          const image = `https://image.tmdb.org/t/p/w300/${poster_path}`;

          return (
            <Box key={id} bg="gray.800" p="5" maxWidth="320px" borderRadius="md">
              <img src={image} alt="movies" style={{ maxWidth: '100%', borderRadius: '10px' }} />
    <Text
        fontSize="xl"
        fontWeight="bold"
        mt="4"
        color="white"
    >
        {result?.name || result?.title}
    </Text>
    <Text color="gray.400" mt="2">
        Date: {format(new Date(result?.release_date || result?.first_air_date), "dd MMM yyyy", { locale: ptBR })}
    </Text>
    <Flex align="center" gap="2" mt="3">
        <CircularProgress value={vote_average * 10} size="40px" color="green.400" />
        <Text color="white" fontSize="lg">{vote_average}</Text>
    </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
