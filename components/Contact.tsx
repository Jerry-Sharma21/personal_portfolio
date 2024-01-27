'use client';
import { useSectionInView } from '@/lib/Hooks';
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

      <p className="text-gray-700 -mt-6">
        Please contact me directly at {''}
        <a className="underline" href="mailto:">
          er.abhijeetsharma14@gmail.com
        </a>
        {''} or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async formData => {
          console.log(formData.get('senderEmail'));
          console.log(formData.get('senderMessage'));
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          maxLength={500}
          required
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="senderMessage"
          placeholder="Your message"
          maxLength={500}
          required
        />

        <button
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
          outline-none transition-all flex items-center justify-center gap-2
          group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit{' '}
          <FaPaperPlane
            className="test-xs opacity-70 transition-all 
            group-hover:translate-x-1
            group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
