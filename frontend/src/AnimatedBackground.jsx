export default function AnimatedBackground() {
  return (
    <ul className="background">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
}