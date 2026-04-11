const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © 2025 by Maya Nelson
        </p>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <p className="font-label text-xs tracking-wider text-foreground mb-1">Call</p>
            <p className="font-body text-xs text-muted-foreground">123-456-7890</p>
          </div>
          <div className="text-center">
            <p className="font-label text-xs tracking-wider text-foreground mb-1">Write</p>
            <p className="font-body text-xs text-muted-foreground">info@mysite.com</p>
          </div>
          <div className="text-center">
            <p className="font-label text-xs tracking-wider text-foreground mb-1">Follow</p>
            <p className="font-body text-xs text-muted-foreground">@username</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
