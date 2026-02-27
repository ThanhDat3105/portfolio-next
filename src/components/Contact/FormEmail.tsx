'use client';

import React, { useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

export default function FormEmail() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.user_name.trim()) {
      toast.error('Please enter your name');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim() || !emailRegex.test(formData.user_email)) {
      toast.error('Please enter a valid email');
      return false;
    }

    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log(error);
          toast.error('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='mx-auto w-full max-w-2xl space-y-6'
    >
      <input
        type='text'
        id='reply_to'
        name='reply_to'
        value={formData.user_name}
        onChange={handleChange}
        className='hidden'
        placeholder='Your name'
        disabled={isSubmitting}
      />
      {/* Name Field */}
      <div className='space-y-2'>
        <input
          type='text'
          id='user_name'
          name='user_name'
          value={formData.user_name}
          onChange={handleChange}
          className='py-4 w-full rounded-lg border-2 border-[#ffffff14] pl-6 text-white transition-all duration-500 outline-none placeholder:text-xl focus:border-[#ff014f] focus:ring-[#ff014f]'
          placeholder='Your name'
          disabled={isSubmitting}
        />
      </div>

      {/* Email Field */}
      <div className='space-y-2'>
        <input
          type='email'
          id='user_email'
          name='user_email'
          value={formData.user_email}
          onChange={handleChange}
          className='py-4 w-full rounded-lg border-2 border-[#ffffff14] pl-6 text-white transition-all duration-500 outline-none placeholder:text-xl focus:border-[#ff014f] focus:ring-[#ff014f]'
          placeholder='Your Email'
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div className='space-y-2'>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className='w-full resize-none rounded-lg border-2 border-[#ffffff14] pt-4 pl-6 text-white transition-all duration-500 outline-none placeholder:text-xl focus:border-[#ff014f] focus:ring-[#ff014f]'
          placeholder='Your Message'
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full cursor-pointer rounded-full bg-[#ff014f] px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
