import { useParams } from 'react-router-dom';
import Profile from "@/components/Profile";

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

  return <Profile {...mockProfile} />;
};

export default ProfilePage;