const TermsAndConditions = () => {
  return (
    <div className="flex flex-col my-10 pb-80 gap-2">
      <h1 className="text-4xl font-bold text-white text-center">
        TERMS AND CONDITIONS
      </h1>
      <div className="flex flex-col gap-2 px-20 pt-10">
        <p>
          Welcome to Dev Connect! By using our website and services, you agree
          to the following terms and conditions. These terms govern your use of
          our platform, including payment transactions facilitated through
          Razorpay.
        </p>
        <p>
          {" "}
          Please read these Terms of Service carefully before accessing or using
          our website. By accessing or using any part of the site, you agree to
          be bound by these Terms of Service. If you do not agree to all the
          terms and conditions of this agreement, then you may not access the
          website or use any services. If these Terms of Service are considered
          an offer, acceptance is expressly limited to these Terms of Service.
          Any new features or tools which are added to the current store shall
          also be subject to the Terms of Service. You can review the most
          current version of the Terms of Service at any time on this page. We
          reserve the right to update, change or replace any part of these Terms
          of Service by posting updates and/or changes to our website. It is
          your responsibility to check this page periodically for changes. Your
          continued use of or access to the website following the posting of any
          changes constitutes acceptance of those changes.
        </p>
      </div>
      <div className="flex flex-col gap-2 px-20 pt-10">
        <h1 className="text-bold text-white text-2xl">General Terms</h1>
        <p>
          By accessing or using our website, you agree to comply with these
          Terms and Conditions.
        </p>
        <p>You must be at least 18 years old to use our services.</p>
        <p>
          We reserve the right to update or modify these terms at any time
          without prior notice. Please review them periodically.
        </p>
      </div>
      <div className="flex flex-col gap-2 px-20 pt-10">
        <h1 className="text-bold text-white text-2xl">Payment Terms</h1>
        <p>
          All payments on our platform are processed securely via Razorpay, a
          third-party payment gateway.
        </p>
        <p>
          By initiating a payment, you authorize us and Razorpay to process the
          transaction, including debiting the applicable amount from your
          account..
        </p>
      </div>
      <div className="flex flex-col gap-2 px-20 pt-10">
        <h1 className="text-bold text-white text-2xl">Security</h1>
        <p>
          All payment transactions are encrypted and processed securely through
          Razorpay.
        </p>
        <p>
          We do not store your payment details (e.g., card numbers). Razorpay
          processes all sensitive payment information.
        </p>
      </div>
      <div className="flex flex-col gap-2 px-20 pt-10">
        <h1 className="text-bold text-white text-2xl">
          Termination of services
        </h1>
        <p>
          We reserve the right to suspend or terminate your account or access to
          our platform if:
        </p>
        <p>a. You breach any terms outlined in this document.</p>
        <p>b. Fraudulent or unauthorized activities are detected.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
