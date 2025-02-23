import Profile from "@/components/Profile";

const ProfilePage = () => {
  // This would normally come from your database
  const mockProfile = {
    username: "johndoe",
    bio: "Digital creator & content enthusiast. Sharing my journey and favorite resources.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe",
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
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      youtube: "https://youtube.com/johndoe",
      website: "https://johndoe.com",
    },
  };

  return <Profile {...mockProfile} />;
};

export default ProfilePage;