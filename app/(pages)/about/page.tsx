import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose dark:prose-invert">
        <h1 className="mb-4 text-4xl font-bold">About TinyMakes</h1>
        <p className="mb-6">
          TinyMakes is a simple and efficient URL shortening service that makes it easy to share long, complicated links with others. Our goal is to provide a user-friendly platform that helps streamline the process of sharing links, whether for personal or professional use.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Our Mission</h2>
        <p className="mb-6">
          At TinyMakes, we believe that simplicity is key. In today's fast-paced digital world, people want quick and easy solutions to their everyday problems. That's why we've created a platform that takes the hassle out of sharing long URLs. With just a few clicks, you can transform any link into a concise, shareable version that's easy to remember and share with others.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Our Team</h2>
        <p className="mb-6">
          TinyMakes is a passion project created by a team of talented developers who share a love for building practical and user-friendly solutions. We're committed to constantly improving our service and adding new features to enhance the overall user experience.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Privacy and Security</h2>
        <p className="mb-6">
          We take privacy and security very seriously at TinyMakes. We never collect or store any personal information from our users, and all data transmitted through our service is encrypted using industry-standard protocols. You can trust that your links and data are safe with us.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Get in Touch</h2>
        <p className="mb-6">
          If you have any questions, feedback, or suggestions, we'd love to hear from you. You can reach us via email at <a href="mailto:test@gmail.com">test@gmail.com</a> or through our social media channels.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;