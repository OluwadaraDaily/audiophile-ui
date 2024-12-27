import { ref, watchEffect } from 'vue';

export function useImageLoader(
  imgSrc: string,
  images: Record<string, () => Promise<{
    default: string;
}>> = import.meta.glob('@/assets/img/**/*')) {
  const imageSrc = ref("");

  watchEffect(async () => {
    const fullPath = `/src/assets/img/${imgSrc}`;
    if (images[fullPath]) {
      try {
        const mod = await images[fullPath]();
        imageSrc.value = mod.default;
      } catch (error) {
        console.error('Error loading image:', fullPath, error);
      }
    } else {
      console.error('Image not found:', fullPath);
    }
  });

  return { imageSrc };
}