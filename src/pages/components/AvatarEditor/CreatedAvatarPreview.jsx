import { ShapeStyleMapping, DefaultBackgroundConfig } from '@/const';
import React from 'react';

export default function CreatedAvatarPreview({ background, preview }) {
  return (
    <>
      <div
        style={{
          backgroundColor:
            background.shape === 'none'
              ? DefaultBackgroundConfig.color
              : background.color,
        }}
        id="avatar-preview"
        className={`w-48 h-48 md:w-72 md:h-72 ${
          ShapeStyleMapping[background.shape]
        }`}
        dangerouslySetInnerHTML={{
          __html: preview,
        }}
      />
    </>
  );
}
