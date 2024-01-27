import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface IEmailProps {
  senderEmail: string;
  senderMessage: string;
}
const ContactFormEmail: React.FC<IEmailProps> = props => {
  const { senderEmail, senderMessage } = props;

  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the portfolio contact
                form
              </Heading>
              <Text>{senderMessage}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
