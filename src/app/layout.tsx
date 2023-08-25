import Providers from "@/components/Providers";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import SwipeController from "@/components/SwipeController";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SwipeController>
            <div className="main scalines">
              <Header />
              <SubHeader />
              {children}
            </div>
          </SwipeController>
        </Providers>
      </body>
    </html>
  );
}
