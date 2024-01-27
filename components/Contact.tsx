'use client';

import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import SubmitButton from './SubmitButton';
import { useSectionInView } from '@/lib/Hooks';
import { sendEmail } from '@/actions/SendEmail';

const Contact: React.FC = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text5-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:er.abhijeetsharma14@gmail.com">
          er.abhijeetsharma14@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formdata: FormData) => {
          await sendEmail(formdata);
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
          dark:outline-none transition-all"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          maxLength={500}
          required
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
          dark:outline-none transition-all"
          name="senderMessage"
          placeholder="Your message"
          maxLength={5000}
          required
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
