export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-60 p-4 flex justify-center gap-6 z-50">
      <a href="#about" className="text-neon">About</a>
      <a href="#skills" className="text-neon">Skills</a>
      <a href="#projects" className="text-neon">Projects</a>
      <a href="#contact" className="text-neon">Contact</a>
    </nav>
  )
}
