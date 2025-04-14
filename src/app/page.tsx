import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <main className="max-w-4xl w-full mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js + Tailwind CSS + Shadcn UI
          </h1>
          <p className="text-muted-foreground text-lg">
            A minimal setup with the shadcn/ui component library
          </p>
        </div>

        <div className="border rounded-lg p-8 shadow-sm bg-card">
          <h2 className="text-2xl font-semibold mb-6">Button Variants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Default Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Size Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" className="rounded-full">
                  <span className="text-xl">+</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium">Tailwind Customized Button</h3>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Gradient Button
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Created with Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={80}
              height={20}
              className="dark:invert"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
