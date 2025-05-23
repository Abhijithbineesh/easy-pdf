export const parseSection = (section: string): { title: string; points: string[] } => {
  // Normalize line endings (for Windows support)
  const normalizedSection = section.replace(/\r/g, "");
  const [title, ...content] = normalizedSection.split("\n");

  const cleanTitle = title.startsWith("#")
    ? title.substring(1).trim()
    : title.trim();

  const points: string[] = [];
  let currentPoint = "";

  content.forEach((line) => {
    const trimmedLine = line.trim();

    // Support for •, *, -, numbered, and . bullets
    if (/^[•*●\-]\s/.test(trimmedLine) || /^\d+\.\s/.test(trimmedLine)) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimmedLine;
    } else if (!trimmedLine) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = "";
    } else {
      currentPoint += " " + trimmedLine;
    }
  });

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title: cleanTitle,
    points: points.filter(
      (point) =>
        point &&
        !point.startsWith("#") &&
        !point.startsWith("[Choose") &&
        point.length > 1
    ),
  };
};

export function parsePoint(point: string) {
  const isNumbered = /^\d+\./.test(point);
  const isMainPoint = /^[•*●\-]/.test(point);

  // Basic emoji detection (covers most common emoji ranges)
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;
  const hasEmoji = emojiRegex.test(point);

  const isEmpty = !point.trim();

  return { isNumbered, isMainPoint, hasEmoji, isEmpty };
}

export function parseEmojiPoint(content: string) {
  const cleanContent = content.replace(/^[•*●\-]\s*/, "").trim();

  // Capture one or more emoji, followed by text
  const matches = cleanContent.match(/^([\p{Emoji}\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}]+)\s*(.+)$/u);

  if (!matches) return null;

  const [, emoji, text] = matches;
  return {
    emoji: emoji.trim(),
    text: text.trim(),
  };
}
