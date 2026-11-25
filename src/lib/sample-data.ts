export type BookCategory =
  | "philosophy"
  | "fiction"
  | "classics"
  | "politics"
  | "history"
  | "course";
export type BookStatus = "reading" | "finished" | "unread";
export type CoverMotif = "arch" | "sun" | "lines" | "wave";
export type RelativeTime = "twoHours" | "yesterday" | "threeDays" | "lastWeek";

export type SampleBook = {
  id: string;
  title: string;
  author: string;
  published: string;
  pages: number;
  category: BookCategory;
  status: BookStatus;
  progress: number;
  lastOpened: RelativeTime;
  cover: {
    background: string;
    foreground: string;
    accent: string;
    motif: CoverMotif;
  };
  blurb: {
    en: string;
    ur: string;
  };
  hasReaderPreview?: boolean;
  isOfficial?: boolean;
  documentCount?: number;
  readerHref?: string;
  sourceUrl?: string;
};

export const sampleBooks: SampleBook[] = [
  {
    id: "the-ai-agent-factory",
    title: "The AI Agent Factory",
    author: "Panaversity",
    published: "Version 2",
    pages: 460,
    category: "course",
    status: "unread",
    progress: 0,
    lastOpened: "twoHours",
    isOfficial: true,
    documentCount: 460,
    readerHref: "/course/claude-and-chatgpt-2/overview",
    sourceUrl: "https://agentfactory.piaic.org/",
    cover: {
      background: "#14251d",
      foreground: "#f6eddb",
      accent: "#d6a85f",
      motif: "arch",
    },
    blurb: {
      // Verbatim official wording. It is intentionally kept in English in both
      // locale slots; the UI never presents an invented Urdu translation.
      en: "Version 2 of the book — reimagined, redesigned and rebuilt, published chapter by chapter as each one is approved.",
      ur: "Version 2 of the book — reimagined, redesigned and rebuilt, published chapter by chapter as each one is approved.",
    },
  },
  {
    id: "a-tale-of-two-cities",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    published: "1859",
    pages: 489,
    category: "classics",
    status: "reading",
    progress: 38,
    lastOpened: "twoHours",
    hasReaderPreview: true,
    cover: {
      background: "#332b45",
      foreground: "#f2e7d3",
      accent: "#cfa766",
      motif: "wave",
    },
    blurb: {
      en: "In London and Paris on the eve of revolution, Charles Darnay and Sydney Carton are drawn into a story of sacrifice, love and resurrection.",
      ur: "انقلاب سے پہلے لندن اور پیرس میں، چارلس ڈارنے اور سڈنی کارٹن قربانی، محبت اور نئی زندگی کی کہانی میں بندھ جاتے ہیں۔",
    },
  },
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    published: "c. 180 CE",
    pages: 254,
    category: "philosophy",
    status: "reading",
    progress: 64,
    lastOpened: "yesterday",
    cover: {
      background: "#1d3a2f",
      foreground: "#f1e6cf",
      accent: "#d2a75f",
      motif: "arch",
    },
    blurb: {
      en: "The private notes of a Roman emperor on discipline, impermanence and the quiet work of doing the next right thing.",
      ur: "ایک رومی شہنشاہ کے نجی نوٹس — نظم و ضبط، فانی دنیا اور اگلا درست کام کرنے کے خاموش عمل پر۔",
    },
  },
  {
    id: "the-republic",
    title: "The Republic",
    author: "Plato",
    published: "c. 375 BCE",
    pages: 416,
    category: "politics",
    status: "reading",
    progress: 12,
    lastOpened: "threeDays",
    cover: {
      background: "#23334a",
      foreground: "#eee7d8",
      accent: "#c9a86a",
      motif: "sun",
    },
    blurb: {
      en: "A dialogue on justice, education and the ideal city — and the oldest questions about who should hold power.",
      ur: "انصاف، تعلیم اور مثالی ریاست پر مکالمہ — اور یہ پرانا سوال کہ اقتدار کس کے پاس ہونا چاہیے۔",
    },
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published: "1813",
    pages: 432,
    category: "fiction",
    status: "finished",
    progress: 100,
    lastOpened: "lastWeek",
    cover: {
      background: "#632e30",
      foreground: "#f7e9d7",
      accent: "#ddb98d",
      motif: "lines",
    },
    blurb: {
      en: "Elizabeth Bennet and Mr Darcy navigate manners, class and first impressions in one of English literature’s sharpest comedies.",
      ur: "الزبتھ بینٹ اور مسٹر ڈارسی آداب، طبقاتی فرق اور پہلے تاثر کے درمیان گزرتے ہیں — انگریزی ادب کی تیز ترین مزاحیہ کہانیوں میں سے ایک۔",
    },
  },
];

export const sampleLibraryStats = {
  books: sampleBooks.length,
  pages: sampleBooks.reduce((total, book) => total + book.pages, 0),
  inProgress: sampleBooks.filter((book) => book.status === "reading").length,
  finished: sampleBooks.filter((book) => book.status === "finished").length,
};

export const continueReadingBook =
  sampleBooks.find((book) => book.hasReaderPreview) ?? sampleBooks[0];

export function getSampleBook(id: string) {
  return sampleBooks.find((book) => book.id === id);
}

export const readerSample = {
  bookId: "a-tale-of-two-cities",
  totalPages: 489,
  sourceNote:
    "Public-domain excerpt from A Tale of Two Cities by Charles Dickens (1859).",
  pages: [
    {
      number: 1,
      paragraphs: [
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
      ],
    },
    {
      number: 2,
      paragraphs: [
        "There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.",
        "It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this.",
      ],
    },
  ],
};

export type AnnotationKind = "note" | "highlight" | "bookmark";

export type SampleAnnotation = {
  id: string;
  kind: AnnotationKind;
  bookId: string;
  page: number;
  quote?: string;
  body?: string;
  createdAt: RelativeTime;
};

export const sampleAnnotations: SampleAnnotation[] = [
  {
    id: "note-1",
    kind: "note",
    bookId: "a-tale-of-two-cities",
    page: 1,
    quote:
      "it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity",
    body:
      "Dickens keeps pairing opposites. A single era can hold wisdom and foolishness at the same time — the repetition makes that contradiction feel deliberate.",
    createdAt: "twoHours",
  },
  {
    id: "highlight-1",
    kind: "highlight",
    bookId: "a-tale-of-two-cities",
    page: 1,
    quote: "it was the spring of hope, it was the winter of despair",
    createdAt: "twoHours",
  },
  {
    id: "bookmark-1",
    kind: "bookmark",
    bookId: "a-tale-of-two-cities",
    page: 2,
    createdAt: "yesterday",
  },
];
