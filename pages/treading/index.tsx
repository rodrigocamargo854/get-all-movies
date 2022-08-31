import { useState } from "react";
import {
  Flex,
  Text,
  Box,
  SimpleGrid,
  CircularProgress,
} from "@chakra-ui/react";

const defaultEndPoint = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_SYSTEM_ID}`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default function Treading({ data }) {
  console.log(data);
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);

  return (
    <>
      <Flex align="center" justify="center">
        <Text>Movies From TMDB </Text>
      </Flex>
      <Flex align="center" justify="center">
        <SimpleGrid columns={3} spacing={5}>
          {results.map((result) => {
            const { id, title, poster_path, vote_average } =
              result;
            const image = `https://image.tmdb.org/t/p/w200/${poster_path}`;

            return (
              <Box key={id}>
                <img src={image} alt={title} />
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  letterSpacing="tight"
                  color="yellow.500"
                  w="64"
                >
                  {title}
                </Text>
                <Text>Date: {result?.release_date || result?.first_air_date}</Text>
                <CircularProgress value={vote_average}>
                  {vote_average}
                </CircularProgress>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
