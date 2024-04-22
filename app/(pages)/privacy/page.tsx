import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-slate mx-auto dark:prose-invert">
        <h1>TinyMakes Privacy Policy</h1>
        <p>
          At TinyMakes, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our URL shortening service.
        </p>

        <h2>Information We Collect</h2>
        <p>
          TinyMakes collects the following information:
        </p>
        <ul>
          <li>The original long URLs you submit for shortening.</li>
          <li>Analytics data, such as the number of clicks on your shortened URLs.</li>
        </ul>
        <p>
          We do not collect any personally identifiable information from our users.
        </p>

        <h2>Use of Information</h2>
        <p>
          The information we collect is used solely to provide and improve our URL shortening service. We may use the analytics data to optimize our service and track usage trends.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your URL data for as long as necessary to provide our service. You can request the deletion of your shortened URLs at any time.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your data from unauthorized access, loss, misuse, or alteration. However, no data transmission over the internet or data storage system can be guaranteed to be 100% secure.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          TinyMakes does not share your data with any third parties.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our service is not directed towards children under the age of 13. We do not knowingly collect personal information from children.
        </p>

        <h2>Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, so please check back periodically.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;