const Confirmation = () => {
  return (
    <div className="grid py-20 sm:py-0 place-items-center gap-6">
      <img src="./images/icon-thank-you.svg" />
      <div className="text-center grid gap-4">
        <h1 className="text-heading">Thank you!</h1>
        <p className="font-bold text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
