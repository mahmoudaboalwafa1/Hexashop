import ThemeProvider from "./context/themeContext";
import "./global.css";
import Body from "./body";

export const metadata = {
  title: "Home",
  description: "Hexa shop Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Body elements={children} />
      </ThemeProvider>
    </html>
  );
}
