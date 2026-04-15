export function goldInitials(text) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i > 0 && " "}
      <span className="text-accent-gold">{word[0]}</span>
      {word.slice(1)}
    </span>
  ));
}
