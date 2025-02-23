import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface Link {
  id: string;
  title: string;
  url: string;
}

export default function Links() {
  const [links, setLinks] = useState<Link[]>([]);

  const addLink = () => {
    const newLink = {
      id: Date.now().toString(),
      title: "",
      url: "",
    };
    setLinks([...links, newLink]);
  };

  const updateLink = (id: string, field: "title" | "url", value: string) => {
    setLinks(
      links.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      )
    );
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Manage Links</span>
          <Button onClick={addLink} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Link
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg group relative"
          >
            <div className="cursor-move opacity-50 hover:opacity-100">
              <GripVertical className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-2">
              <Input
                placeholder="Link Title"
                value={link.title}
                onChange={(e) => updateLink(link.id, "title", e.target.value)}
                className="bg-background"
              />
              <Input
                placeholder="URL"
                value={link.url}
                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                className="bg-background"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeLink(link.id)}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
        {links.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No links yet. Click &quot;Add Link&quot; to get started.
          </div>
        )}
      </CardContent>
    </Card>
  );
}