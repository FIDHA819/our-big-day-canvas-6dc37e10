const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-romantic-cream/30 to-background border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <p className="font-script text-4xl romantic-heading mb-2">
            Sarah & Michael
          </p>
          <p className="font-serif text-muted-foreground">
            June 15, 2025
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-xl">❤️</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        
        <p className="font-serif text-sm text-muted-foreground">
          We can't wait to celebrate with you!
        </p>
        
        <p className="font-serif text-xs text-muted-foreground/60 mt-8">
          © 2025 Sarah & Michael. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
