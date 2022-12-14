import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IExperience, IProject } from "../../content/portfolio";

const ExperienceCard = ({ experience }: { experience: IExperience | IProject }) => {
  const { title, subtitle, desc, icons } = experience;

  return (
    <Center py={2}>
      <Box
        maxW="2xl"
        w="full"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="md"
        rounded="md"
        textAlign="left"
        mx={2}
        border="1px solid"
        borderColor={useColorModeValue("gray.50", "gray.700")}
      >
        <Box p={6}>
          <Stack spacing={0} align="left" mb={5}>
            <Heading fontSize="xl" fontWeight={500} fontFamily="body">
              {title}
            </Heading>
            <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
              {subtitle}
            </Text>
            {icons.length ? (
              <Wrap py={4}>
                {icons.map((_icon) => (
                  <WrapItem key={_icon!.toString()}>{_icon}</WrapItem>
                ))}
              </Wrap>
            ): <Box py={2} />}
            <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.200")}>
              {desc}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export { ExperienceCard };
