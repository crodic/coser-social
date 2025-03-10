/* eslint-disable @next/next/no-img-element */
interface ImageGridProps {
  images: string[];
  maxDisplay?: number;
}

export function ImageGrid({ images, maxDisplay = 4 }: ImageGridProps) {
  const totalImages = images.length;
  const displayImages = images.slice(0, maxDisplay);
  const remainingImages = Math.max(0, totalImages - maxDisplay);

  if (totalImages === 0) return null;

  if (totalImages === 1) {
    return (
      <div className="relative overflow-hidden rounded-lg">
        <img src={images[0] || "/placeholder.svg"} alt="Post content" className="w-full object-cover" />
      </div>
    );
  }

  if (totalImages === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        {displayImages.map((image, i) => (
          <div key={i} className="aspect-square">
            <img
              src={image || "/placeholder.svg"}
              alt={`Post content ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  if (totalImages === 3) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        <div className="row-span-2">
          <img src={images[0] || "/placeholder.svg"} alt="Post content 1" className="h-full w-full object-cover" />
        </div>
        <div>
          <img src={images[1] || "/placeholder.svg"} alt="Post content 2" className="h-full w-full object-cover" />
        </div>
        <div>
          <img src={images[2] || "/placeholder.svg"} alt="Post content 3" className="h-full w-full object-cover" />
        </div>
      </div>
    );
  }

  if (totalImages === 4) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        {displayImages.map((image, i) => (
          <div key={i} className="aspect-square">
            <img
              src={image || "/placeholder.svg"}
              alt={`Post content ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  // 5 or more images
  return (
    <div className="grid grid-cols-6 gap-1 overflow-hidden rounded-lg">
      <div className="col-span-6 aspect-video">
        <img src={images[1] || "/placeholder.svg"} alt="Post content 2" className="h-full w-full object-cover" />
      </div>

      {/* Bottom row of 3 images */}
      <div className="col-span-2 aspect-square">
        <img src={images[2] || "/placeholder.svg"} alt="Post content 3" className="h-full w-full object-cover" />
      </div>
      <div className="col-span-2 aspect-square">
        <img src={images[3] || "/placeholder.svg"} alt="Post content 4" className="h-full w-full object-cover" />
      </div>
      <div className="relative col-span-2 aspect-square">
        <img src={images[4] || "/placeholder.svg"} alt="Post content 5" className="h-full w-full object-cover" />
        {remainingImages > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-2xl font-medium text-white">+{remainingImages}</span>
          </div>
        )}
      </div>
    </div>
  );
}
