const sections = [
  {
    title: "Who we are",
    body: `Boltnex Technology Ltd ("Boltnex", "we", "us") is a company registered in England and Wales (company number 16945866), with a registered office in London, United Kingdom. We are the data controller for the personal information described in this policy. You can contact us at support@boltnex.com.`,
  },
  {
    title: "What information we collect",
    body: `We only collect personal information that you choose to give us directly, through the Contact form or a speculative careers application on this website. Depending on which form you use, this may include your name, email address, business name, business type, and the contents of your message.`,
  },
  {
    title: "How we collect it",
    body: `Our Contact and Careers forms don't submit data to us over the internet or store it in a database. Submitting a form opens a pre-filled draft in your own email application, addressed to us. We only receive your information if and when you choose to send that email yourself. This website does not use cookies, analytics, or any third-party tracking technology, so we don't collect information about your visit beyond what you actively choose to send us.`,
  },
  {
    title: "Why we process it and our lawful basis",
    body: `We process the information you send us to respond to your enquiry or application. Our lawful basis under UK GDPR is legitimate interest (Article 6(1)(f)), specifically our interest in responding to enquiries you have initiated. We do not use your details for marketing, and we do not sell, rent or share your personal information with third parties.`,
  },
  {
    title: "How long we keep it",
    body: `We keep enquiry and application emails for no longer than is reasonably necessary to deal with the matter you contacted us about, after which we delete them.`,
  },
  {
    title: "Cookies and tracking",
    body: `This website does not currently set cookies or use analytics, advertising, or tracking scripts of any kind. If that changes in the future, we will update this policy and ask for your consent where required by law before anything is set.`,
  },
  {
    title: "Your rights",
    body: `Under UK GDPR, you have the right to ask us to: confirm what personal data we hold about you; correct inaccurate data; delete your data; restrict or object to our processing; and receive a copy of your data in a portable format. To exercise any of these rights, email support@boltnex.com. If you're unhappy with how we've handled your information, you also have the right to complain to the UK's Information Commissioner's Office (ico.org.uk).`,
  },
  {
    title: "Changes to this policy",
    body: `We may update this policy from time to time, for example if the way we collect or use information changes. The "last updated" date above reflects the most recent revision.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="px-24 max-xl:px-10 max-md:px-5 pt-32 pb-24 max-md:pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl max-md:text-3xl font-semibold text-black">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-black/50">Last updated: 15 July 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-xl font-semibold text-black">{title}</h2>
              <p className="mt-3 text-black/60 leading-relaxed">{body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-semibold text-black">Contact us</h2>
            <p className="mt-3 text-black/60 leading-relaxed">
              Boltnex Technology Ltd
              <br />
              London, United Kingdom
              <br />
              <a
                href="mailto:support@boltnex.com"
                className="text-bolts-blue hover:underline"
              >
                support@boltnex.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
