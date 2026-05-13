type DisplacementOptions = {
  height: number;
  width: number;
  radius: number;
  depth: number;
  strength?: number;
  chromaticAberration?: number;
};

const clampDimension = (value: number) => Math.max(1, Math.round(value));

export const getDisplacementMap = ({
  height,
  width,
  radius,
  depth,
}: Omit<DisplacementOptions, "chromaticAberration" | "strength">) => {
  const safeHeight = clampDimension(height);
  const safeWidth = clampDimension(width);
  const safeDepth = Math.min(depth, safeHeight / 2 - 1, safeWidth / 2 - 1);
  const innerHeight = Math.max(1, safeHeight - 2 * safeDepth);
  const innerWidth = Math.max(1, safeWidth - 2 * safeDepth);

  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg height="${safeHeight}" width="${safeWidth}" viewBox="0 0 ${safeWidth} ${safeHeight}" xmlns="http://www.w3.org/2000/svg">
  <style>.mix{mix-blend-mode:screen;}</style>
  <defs>
    <linearGradient id="Y" x1="0" x2="0" y1="${Math.ceil((radius / safeHeight) * 15)}%" y2="${Math.floor(100 - (radius / safeHeight) * 15)}%">
      <stop offset="0%" stop-color="#0F0" />
      <stop offset="100%" stop-color="#000" />
    </linearGradient>
    <linearGradient id="X" x1="${Math.ceil((radius / safeWidth) * 15)}%" x2="${Math.floor(100 - (radius / safeWidth) * 15)}%" y1="0" y2="0">
      <stop offset="0%" stop-color="#F00" />
      <stop offset="100%" stop-color="#000" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="#808080" />
  <g filter="blur(2px)">
    <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="#000080" />
    <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="url(#Y)" class="mix" />
    <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="url(#X)" class="mix" />
    <rect x="${safeDepth}" y="${safeDepth}" height="${innerHeight}" width="${innerWidth}" fill="#808080" rx="${radius}" ry="${radius}" filter="blur(${safeDepth}px)" />
  </g>
</svg>`)
  );
};

export const getDisplacementFilter = ({
  height,
  width,
  radius,
  depth,
  strength = 100,
  chromaticAberration = 0,
}: DisplacementOptions) => {
  const safeHeight = clampDimension(height);
  const safeWidth = clampDimension(width);

  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg height="${safeHeight}" width="${safeWidth}" viewBox="0 0 ${safeWidth} ${safeHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displace" color-interpolation-filters="sRGB">
      <feImage x="0" y="0" height="${safeHeight}" width="${safeWidth}" href="${getDisplacementMap({
        height: safeHeight,
        width: safeWidth,
        radius,
        depth,
      })}" result="displacementMap" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedR" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedG" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength}" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="displacedB" />
      <feBlend in="displacedR" in2="displacedG" mode="screen" />
      <feBlend in2="displacedB" mode="screen" />
    </filter>
  </defs>
</svg>`) +
    "#displace"
  );
};
