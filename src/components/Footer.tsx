export default function Footer() {
  return (
    <footer className="relative z-20 py-10 border-t border-white/5 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">
        <p>© 2024 B K Agarwal & Co. Chartered Accountants.</p>
        <div className="flex space-x-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Compliance</a>
        </div>
      </div>
    </footer>
  );
}
