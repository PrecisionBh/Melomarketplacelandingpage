type BallProps = {
  style?: React.CSSProperties
}

export default function Ball({ style }: BallProps) {
  return (
    <div
      style={{
        position: "fixed",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        zIndex: -5,
        pointerEvents: "none",
        boxShadow: `
          inset 0 0 50px #fff,
          inset 20px 0 80px #7FAF9B,
          inset -20px 0 80px #7FAF9B,
          inset 20px 0 300px #7FAF9B,
          inset -20px 0 300px #7FAF9B,
          0 0 50px #fff,
          -10px 0 80px #7FAF9B,
          10px 0 80px #7FAF9B
        `,
        opacity: 0.95,
        ...style
      }}
    />
  )
}