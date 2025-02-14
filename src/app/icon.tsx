import { ImageResponse } from "next/og";

export const size = {
  width: 36,
  height: 36,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 25,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
          fontWeight: "bold",
          borderRadius: "20%",
        }}
      >
        F
      </div>
    ),
    {
      ...size,
    }
  );
}
