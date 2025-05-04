"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function NewContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Show success message
    alert("Message sent successfully!");
  };
  return (
    <div
      id="contact"
      className=" py-20 px-4 md:px-12 lg:px-24 min-h-screen bg-gradient-to-b from-background to-background/90 text-text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          Contact
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text  bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Get in touch
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mx-auto mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formState.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto group">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out for collaborations, inquiries, or just to
              say hello. I'm always open to discussing new projects and
              opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">nayan.aher@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+91 9822000000</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Office</h4>
                <p className="text-gray-600">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
