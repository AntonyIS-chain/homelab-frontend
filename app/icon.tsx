import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #059669, #10b981)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: 'white',
            fontFamily: 'Inter, -apple-system, sans-serif',
          }}
        >
          D
        </div>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}