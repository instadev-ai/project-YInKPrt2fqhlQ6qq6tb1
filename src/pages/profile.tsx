import { useParams } from 'react-router-dom';
import Profile from "@/components/Profile";
import { Helmet } from 'react-helmet-async';

const ProfilePage = () => {
  const { username } = useParams();
  
  // This would normally fetch data from your backend based on the username
  const mockProfile = {
    username: username || "johndoe",
    bio: "Digital creator & content enthusiast. Sharing my journey and favorite resources.",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    links: [
      {
        id: "1",
        title: "My Latest Blog Post",
        url: "https://example.com/blog",
      },
      {
        id: "2",
        title: "Join My Newsletter",
        url: "https://example.com/newsletter",
      },
      {
        id: "3",
        title: "Check Out My Course",
        url: "https://example.com/course",
      },
      {
        id: "4",
        title: "Book a Consultation",
        url: "https://example.com/consult",
      },
    ],
    socialLinks: {
      instagram: `https://instagram.com/${username}`,
      twitter: `https://twitter.com/${username}`,
      youtube: `https://youtube.com/${username}`,
      website: `https://${username}.com`,
    },
  };

  // SEO and Social Media sharing optimization
  const pageTitle = `@${mockProfile.username} - Link Hub Profile`;
  const pageDescription = mockProfile.bio;
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
        <meta property="og:image" content={mockProfile.avatar} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Link Hub" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@linkhub" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={mockProfile.avatar} />

        {/* Additional Profile Meta Tags */}
        <meta property="profile:username" content={mockProfile.username} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": mockProfile.username,
              "description": mockProfile.bio,
              "image": mockProfile.avatar,
              "url": currentUrl,
              "sameAs": [
                mockProfile.socialLinks.twitter,
                mockProfile.socialLinks.instagram,
                mockProfile.socialLinks.youtube,
                mockProfile.socialLinks.website,
              ].filter(Boolean)
            }
          })}
        </script>
      </Helmet>
      <Profile {...mockProfile} />
    </>
  );
};

export default ProfilePage;