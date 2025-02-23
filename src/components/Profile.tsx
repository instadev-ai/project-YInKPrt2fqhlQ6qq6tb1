import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Globe 
} from "lucide-react";

interface ProfileProps {
  username: string;
  bio: string;
  avatar: string;
  links: Array<{
    id: string;
    title: string;
    url: string;
  }>;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
  };
}

export default function Profile({
  username,
  bio,
  avatar,
  links,
  socialLinks = {}
}: ProfileProps) {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-md mx-auto space-y-8 pt-8">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage src={avatar} alt={username} />
            <AvatarFallback>{username[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">@{username}</h1>
            <p className="text-muted-foreground mt-2">{bio}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.instagram && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLinkClick(socialLinks.instagram!)}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            )}
            {socialLinks.twitter && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLinkClick(socialLinks.twitter!)}
              >
                <Twitter className="h-5 w-5" />
              </Button>
            )}
            {socialLinks.youtube && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLinkClick(socialLinks.youtube!)}
              >
                <Youtube className="h-5 w-5" />
              </Button>
            )}
            {socialLinks.facebook && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLinkClick(socialLinks.facebook!)}
              >
                <Facebook className="h-5 w-5" />
              </Button>
            )}
            {socialLinks.website && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLinkClick(socialLinks.website!)}
              >
                <Globe className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <Card
              key={link.id}
              className="hover:scale-[1.02] transition-transform cursor-pointer"
              onClick={() => handleLinkClick(link.url)}
            >
              <Button
                variant="ghost"
                className="w-full h-full py-6 text-lg font-medium"
              >
                {link.title}
              </Button>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 pb-4">
          Powered by LinkHub
        </div>
      </div>
    </div>
  );
}