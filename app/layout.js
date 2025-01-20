export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <h1>Mi Aplicación</h1>
        </header>
        <main>{children}</main>
        <footer>© 2025 Mi Aplicación</footer>
      </body>
    </html>
  );
}
