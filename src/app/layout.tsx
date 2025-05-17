import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import Script from 'next/script';
import Image from 'next/image';

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style, font, home } from "@/app/resources";

import { Background, Column, Flex, ThemeProvider, ToastProvider } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";
import { Meta } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="es" // Cambiado a 'es' para reflejar que el contenido está en español
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable,
      )}
    >
      <head>
        <link rel="icon" href="/images/og/Portada.png" />
        <Script id="facebook-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2003807796695683');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2003807796695683&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </head>
      <ThemeProvider>
        <ToastProvider>
          <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
            <Background
              position="fixed"
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
            <Flex fillWidth minHeight="16" hide="s"></Flex>
            <Header />
            <Flex
              zIndex={0}
              fillWidth
              paddingY="l"
              paddingX="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                <RouteGuard>{children}</RouteGuard>
              </Flex>
            </Flex>
            <Footer />
            <div style={{ position: 'fixed', bottom: '50%', right: '16px', transform: 'translateY(50%)', zIndex: 1000 }}>
              <a
                href="https://wa.me/573160475368" // Enlace actualizado con tu número de WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  width: 'auto',
                  padding: '8px 16px',
                  backgroundColor: '#25D366',
                  borderRadius: '32px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  color: '#fff',
                  fontSize: '14px',
                  textDecoration: 'none',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>¡Contáctame</span>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>por WhatsApp!</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.499 2.03 7.83L0 32l8.37-2.03A15.91 15.91 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.44c-2.59 0-5.03-.67-7.17-1.84l-.51-.3-4.97 1.2 1.2-4.97-.3-.51A13.44 13.44 0 012.56 16c0-7.41 6.03-13.44 13.44-13.44 7.41 0 13.44 6.03 13.44 13.44 0 7.41-6.03 13.44-13.44 13.44zm7.17-9.67c-.39-.2-2.3-1.14-2.66-1.27-.36-.13-.62-.2-.88.2-.26.39-1.02 1.27-1.25 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.15-1.94-1.16-1.03-1.94-2.3-2.17-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.14-1.21-2.94-.32-.78-.65-.67-.88-.68-.23-.01-.49-.01-.75-.01-.26 0-.69.1-1.05.49-.36.39-1.38 1.35-1.38 3.29 0 1.93 1.41 3.8 1.61 4.07.2.26 2.8 4.27 6.8 5.99.95.41 1.69.65 2.27.83.95.3 1.82.26 2.5.16.76-.11 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
                </svg>
              </a>
            </div>
          </Column>
        </ToastProvider>
      </ThemeProvider>
    </Flex>
  );
}
