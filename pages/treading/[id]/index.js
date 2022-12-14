import {
  Flex,
  Text,
  Box,
  SimpleGrid,
  CircularProgress,
  Stack,
  Switch,
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

  return (
    <>
      <Flex direction="column" align="center" justify="center">
        <Text color="pink.300">Popular Movies</Text>
        <Flex align="center" justify="center" gap="3">
          <Text color="blue.100">Day</Text>
          <Switch size="md" onChange={changePopulationRouter} />
          <Text color="green.white">week</Text>
        </Flex>
      </Flex>

      <Flex align="center" justify="center">
        <Text>Movies From TMDB </Text>
      </Flex>
      <Flex align="center" justify="center">
        <SimpleGrid columns={3} spacing={4}>
          {results?.map((result) => {
            const { id, poster_path, vote_average } = result;
            const image = `https://image.tmdb.org/t/p/w200/${poster_path}`;

            return (
              <Box key={id}>
                <img src={image} alt="movies" />
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                  letterSpacing="tight"
                  color="yellow.500"
                  w="64"
                >
                  Name: {result?.name || result?.title}
                </Text>
                <Flex align="center" justify="center" gap="1">
                Date:
                <Text
                    fontSize="1xl"
                    fontWeight="bold"
                    letterSpacing="tight"
                    color="pink.500"
                    w="64"
                  >
                    {format(
                      new Date(result?.release_date || result?.first_air_date),
                      "dd MMM yyyy",
                      {
                        locale: ptBR,
                      }
                    )}
                  </Text>
                </Flex>
                 
                <Flex   gap="3">

                  <CircularProgress value={vote_average} size="20px"/>
                    {vote_average}
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
