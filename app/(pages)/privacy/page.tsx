const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-slate mx-auto dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-center">TinyMakes Privacy Policy</h1>
        <p className="mb-6 text-lg">
          At TinyMakes, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our URL shortening service.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
        <p className="mb-2">TinyMakes collects the following information:</p>
        <ul className="list-disc list-inside mb-6">
          <li>The original long URLs you submit for shortening.</li>
          <li>Analytics data, such as the number of clicks on your shortened URLs.</li>
        </ul>
        <p className="mb-6">We do not collect any personally identifiable information from our users.</p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Use of Information</h2>
        <p className="mb-6">
          The information we collect is used solely to provide and improve our URL shortening service. We may use the analytics data to optimize our service and track usage trends.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Data Retention</h2>
        <p className="mb-6">
          We retain your URL data for as long as necessary to provide our service. You can request the deletion of your shortened URLs at any time.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
        <p className="mb-6">
          We take reasonable measures to protect your data from unauthorized access, loss, misuse, or alteration. However, no data transmission over the internet or data storage system can be guaranteed to be 100% secure.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Third-Party Services</h2>
        <p className="mb-6">TinyMakes does not share your data with any third parties.</p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Children's Privacy</h2>
        <p className="mb-6">
          Our service is not directed towards children under the age of 13. We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Changes to this Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, so please check back periodically.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;