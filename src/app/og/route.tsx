import { ImageResponse } from "next/og";
// import { baseURL } from "@/app/resources"; // No se usará baseURL de config.js para esto
import { person } from "@/app/resources/content";
import Image from "next/image";

export const runtime = "edge";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  let title = requestUrl.searchParams.get("title") || "Portfolio";
  /*
  const font = fetch(new URL("../../../public/fonts/Inter.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const fontData = await font;
  */

  // Construir la URL absoluta para el avatar usando el origen de la solicitud
  const avatarUrl = new URL(person.avatar, requestUrl.origin).href;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "8rem",
        background: "#151515",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
          fontFamily: "Inter",
          fontStyle: "normal",
          color: "white",
        }}
      >
        <span
          style={{
            fontSize: "8rem",
            lineHeight: "8rem",
            letterSpacing: "-0.05em",
            whiteSpace: "pre-wrap",
            textWrap: "balance",
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <Image
            style={{ borderRadius: "128px" }}
            alt={person.name}
            src={avatarUrl}
            width="256"
            height="256"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "4.5rem",
                lineHeight: "4.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
              }}
            >
              {person.name}
            </span>
            <span
              style={{
                fontSize: "2.5rem",
                lineHeight: "2.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
                opacity: "0.6",
              }}
            >
              {person.role}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
      /*
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
      */
    },
  );
}
