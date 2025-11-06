import { Mail, Phone, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import headshot from "@assets/generated_images/Professional_resume_headshot_portrait_0949a230.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'David_Boyadjian_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
      data-testid="section-hero"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Avatar className="w-48 h-48 mx-auto mb-8 ring-2 ring-primary/20">
          <AvatarImage src={headshot} alt="David Boyadjian" />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>

        <h1 className="text-6xl font-bold mb-4" data-testid="text-name">
          David Boyadjian
        </h1>

        <p className="text-2xl text-muted-foreground mb-6" data-testid="text-title">
          Computer Engineering Student
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          <a
            href="mailto:davidmb07xxx@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
            <span>davidmb07xxx@gmail.com</span>
          </a>
          <a
            href="tel:818-751-3885"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-phone"
          >
            <Phone className="w-5 h-5" />
            <span>818-751-3885</span>
          </a>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-summary">
          A young individual who is looking for an environment that will accelerate his development by building trustworthy
          relationships and always aiming for the sky, while using his abilities, experiences, and social skills to thrive in every step.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" onClick={handleDownloadResume} data-testid="button-download-resume">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("experience")}
            data-testid="button-view-work"
          >
            View My Work
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection("experience")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-scroll-down"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
