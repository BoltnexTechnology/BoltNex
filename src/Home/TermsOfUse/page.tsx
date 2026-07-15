const sections = [
  {
    title: "Who we are",
    body: `This website is operated by Boltnex Technology Ltd ("Boltnex", "we", "us"), a company registered in England and Wales (company number 16945866), with a registered office in London, United Kingdom. By using this website, you agree to these terms. If you don't agree with them, please don't use the site.`,
  },
  {
    title: "Using this website",
    body: `This website is provided for general information about Boltnex Technology and our product, BQueue. You may view, download and print pages from the site for your own personal, non-commercial reference. You may not republish, sell, or otherwise use any content from this site for commercial purposes without our prior written permission.`,
  },
  {
    title: "Intellectual property",
    body: `Unless otherwise stated, the Boltnex and BQueue names, logos, and all text, design and content on this website are owned by Boltnex Technology Ltd or used with permission. Nothing on this site grants you any licence or right to use our trademarks, branding or content, other than as set out in these terms.`,
  },
  {
    title: "Accuracy of information",
    body: `We try to keep the information on this website accurate and up to date, but we make no warranties or guarantees, express or implied, about its completeness, accuracy or suitability for any purpose. Details about BQueue, including features and availability, may change as the product develops. Nothing on this site constitutes professional, legal or financial advice.`,
  },
  {
    title: "Acceptable use",
    body: `You agree not to misuse this website. For example, don't attempt to gain unauthorised access to it, introduce viruses or other malicious code, scrape content at scale, or use it in any way that could damage, disable or impair the site or interfere with anyone else's use of it.`,
  },
  {
    title: "Third-party links",
    body: `This website may link to third-party sites, such as our social media profiles. We don't control those sites and aren't responsible for their content or practices. Visiting a linked site is at your own risk and subject to that site's own terms.`,
  },
  {
    title: "Liability",
    body: `We provide this website on an "as is" basis and, to the extent permitted by law, exclude liability for any loss or damage arising from your use of it. This doesn't affect any liability we can't exclude or limit under English law, such as for fraud or death or personal injury caused by our negligence.`,
  },
  {
    title: "Governing law",
    body: `These terms are governed by the laws of England and Wales, and any dispute relating to this website will be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "Changes to these terms",
    body: `We may update these terms from time to time, for example as the website or our product changes. The "last updated" date above reflects the most recent revision.`,
  },
];

const TermsOfUse = () => {
  return (
    <div className="px-24 max-xl:px-10 max-md:px-5 pt-32 pb-24 max-md:pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl max-md:text-3xl font-semibold text-black">
          Terms of Website Use
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

export default TermsOfUse;
