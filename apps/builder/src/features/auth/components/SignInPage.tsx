import { Seo } from "@/components/Seo";
import { TextLink } from "@/components/TextLink";
import { Box, Image, Heading, VStack } from "@chakra-ui/react";
import { T, useTranslate } from "@tolgee/react";
import { useRouter } from "next/router";
import { SignInForm } from "./SignInForm";

type Props = {
  type: "signin" | "signup";
  defaultEmail?: string;
};

export const SignInPage = ({ type }: Props) => {
  const { t } = useTranslate();
  const { query } = useRouter();

  return (
    <VStack spacing={4} h="100vh" justifyContent="center">
      <Box maxW="400px" w="full" borderRadius="lg" boxShadow="lg" p={4} bg="white">
      <Seo
        
        title={
          type === "signin"
            ? t("auth.signin.heading")
            : t("auth.register.heading")
        }
      />
      <Image
        src="https://mcube.com/wp-content/uploads/2023/10/website-logo-1.png" 
        alt="Logo"
        borderRadius={10}
        // background="black"
        display="block"
        mx="auto"
      />
      <Heading textAlign="center" m={4} color="black">
        {type === "signin"
          ? t("auth.signin.heading")
          : t("auth.register.heading")}
      </Heading>
      {/* {type === "signin" ? (
        <Text>
          {t("auth.signin.noAccountLabel.preLink")}{" "}
          <TextLink href="/register">
            {t("auth.signin.noAccountLabel.link")}
          </TextLink>
        </Text>
      ) : ( */}
        {/* <Text>
          {t("auth.register.alreadyHaveAccountLabel.preLink")}{" "}
          <TextLink href="/signin">
            {t("auth.register.alreadyHaveAccountLabel.link")}
          </TextLink>
        </Text> */}
      {/* )} */}
      <SignInForm defaultEmail={query.g?.toString()} />
      {/* {type === "signup" ? (
        <Text fontSize="sm" maxW="400px" textAlign="center">
          <T
            keyName="auth.register.aggreeToTerms"
            params={{
              terms: <TextLink href={"https://typebot.io/terms-of-service"} />,
              privacy: <TextLink href={"https://typebot.io/privacy-policy"} />,
            }}
          />
        </Text>
      ) : null} */}
      </Box>
    </VStack>
  );
};
