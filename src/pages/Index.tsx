import { Helmet } from 'react-helmet-async';

const Index = () => {
  const pageTitle = "Link Hub - Your All-in-One Link Management Platform";
  const pageDescription = "Create your personalized link landing page. Share all your important links in one beautiful profile.";
  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={currentUrl} />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Link Hub" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@linkhub" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Link Hub",
            "description": pageDescription,
            "url": currentUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${window.location.origin}/{search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-screen-xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center">Link Manager</h1>
        </div>
      </div>
    </>
  );
};

export default Index;