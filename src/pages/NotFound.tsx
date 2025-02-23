import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const pageTitle = "Page Not Found - Link Hub";
  const pageDescription = "The page you're looking for doesn't exist. Return to Link Hub homepage.";
  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;