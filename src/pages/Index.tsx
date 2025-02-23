import LinkManager from "@/components/LinkManager"

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-screen-xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Link Manager</h1>
        <LinkManager />
      </div>
    </div>
  );
};

export default Index;