import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LinkCard } from "./LinkCard"

interface Link {
  id: string
  title: string
  url: string
}

export default function LinkManager() {
  const [links, setLinks] = useState<Link[]>([])
  const [newTitle, setNewTitle] = useState("")
  const [newUrl, setNewUrl] = useState("")

  const addLink = () => {
    if (newTitle && newUrl) {
      setLinks([
        ...links,
        {
          id: Date.now().toString(),
          title: newTitle,
          url: newUrl
        }
      ])
      setNewTitle("")
      setNewUrl("")
    }
  }

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="Link Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Input
          placeholder="URL (https://...)"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        />
        <Button 
          className="w-full"
          onClick={addLink}
          disabled={!newTitle || !newUrl}
        >
          Add Link
        </Button>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <LinkCard
            key={link.id}
            title={link.title}
            url={link.url}
            onClick={() => handleLinkClick(link.url)}
          />
        ))}
      </div>
    </div>
  )
}