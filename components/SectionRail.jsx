const items = [
  ["#hero", "Top"],
  ["#work", "Stack"],
  ["#about", "About"],
  ["#projects", "Work"],
  ["#archive", "Directory"],
  ["#contact", "Contact"],
];

export default function SectionRail() {
  return (
    <nav id="section-rail" aria-hidden="true" className="hidden lg:flex">
      {items.map(([href, label]) => (
        <a key={href} href={href} data-label={label} />
      ))}
    </nav>
  );
}
