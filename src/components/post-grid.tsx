"use client";

/* eslint-disable @next/next/no-img-element */
interface PostGridProps {
  paths: { type: "video" | "image"; src: string }[];
  maxDisplay?: number;
}

export function PostGrid({ paths, maxDisplay = 5 }: PostGridProps) {
  const totalPaths = paths.length;
  const displayPaths = paths.slice(0, maxDisplay);
  const remainingPaths = Math.max(0, totalPaths - maxDisplay);

  if (totalPaths === 0) return null;

  const renderMedia = (path: { type: "video" | "image"; src: string }, index: number, isSingle: boolean = false) => {
    return path.type === "video" ? (
      <video
        key={index}
        src={path.src}
        controls
        className={`bg-accent h-full max-h-[500px] w-full object-contain`}
      ></video>
    ) : (
      <img
        key={index}
        src={path.src || "/placeholder.svg"}
        alt={`Post content ${index + 1}`}
        className={`bg-accent h-full w-full ${isSingle ? "max-h-[500px] object-contain" : "object-cover"}`}
      />
    );
  };

  if (totalPaths === 1) {
    return <div className="relative max-h-[500px] overflow-hidden rounded-lg">{renderMedia(paths[0], 0, true)}</div>;
  }

  if (totalPaths === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        {displayPaths.map((path, i) => (
          <div key={i} className="aspect-square">
            {renderMedia(path, i)}
          </div>
        ))}
      </div>
    );
  }

  if (totalPaths === 3) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        <div className="col-span-2 row-span-2 aspect-video">{renderMedia(paths[0], 0)}</div>
        <div className="aspect-square">{renderMedia(paths[1], 1)}</div>
        <div className="aspect-square">{renderMedia(paths[2], 2)}</div>
      </div>
    );
  }

  if (totalPaths === 4) {
    return (
      <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg">
        {displayPaths.map((path, i) => (
          <div key={i} className="aspect-square">
            {renderMedia(path, i)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-1 overflow-hidden rounded-lg">
      <div className="col-span-6 aspect-video">{renderMedia(paths[0], 0)}</div>
      <div className="col-span-2 aspect-square">{renderMedia(paths[1], 1)}</div>
      <div className="col-span-2 aspect-square">{renderMedia(paths[2], 2)}</div>
      <div className="relative col-span-2 aspect-square">
        {renderMedia(paths[3], 3)}
        {remainingPaths > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-2xl font-medium text-white">+{remainingPaths}</span>
          </div>
        )}
      </div>
    </div>
  );
}
