import type { Metadata } from "next";
import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ClerkProvider } from '@clerk/nextjs'
import { ConfigProvider } from "antd";


const comfortaa = Comfortaa({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "KOKO FINANCE",
  description: "Koko finance A product of koko labs. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  verticalLabelMargin: 1,
                  verticalLabelPadding: 1
                },
              },
              token: {
                fontFamily: 'Comfortaa'
              }
            }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
