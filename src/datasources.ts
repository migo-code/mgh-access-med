// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import { AddBookMutationResponse, Book } from "./__generated__/resolvers-types";

const BooksDB: Omit<Book, "__typename">[] = [
  {
    title: "Harper's Illustrated Biochemistry, 32nd Edition",
    author:
      "Peter J. Kennelly, Kathleen M. Botham, Owen P. McGuinness, Victor W. Rodwell, P. Anthony Weil",
    quiz: {
      questions: [
        {
          description: "Lorem ipsum imperdiet dolor",
          category: "Proteins: Structure & Function",
          answers: [
            {
              description:
                "Lorem ipsum Curabitur faucibus ipsum eget auctor elementum",
              correctChoice: false,
            },
            {
              description:
                "Etiam et velit eu mi aliquet placerat at sit amet arcu",
              correctChoice: true,
            },
            {
              description: "Etiam maximus turpis in vestibulum aliquet",
              correctChoice: false,
            },
            {
              description:
                "Duis vel ex lacinia, dictum lectus non, feugiat tortor",
              correctChoice: false,
            },
          ],
        },
      ],
      categories: [
        {
          description: "Proteins: Structure & Function",
          size: 1,
        },
      ],
      size: 1,
    },
  },
  {
    title:
      "High-Yield Q & A Review for USMLE Step 1: Biochemistry and Genetics",
    author: "Michael W. King",
    quiz: {
      questions: [
        {
          category: "Foundational Biochemistry",
          description: "Lorem ipsum imperdiet dolor",
          answers: [
            {
              description:
                "Lorem ipsum Curabitur faucibus ipsum eget auctor elementum",
              correctChoice: false,
            },
            {
              description:
                "Etiam et velit eu mi aliquet placerat at sit amet arcu",
              correctChoice: true,
            },
            {
              description: "Etiam maximus turpis in vestibulum aliquet",
              correctChoice: false,
            },
            {
              description:
                "Duis vel ex lacinia, dictum lectus non, feugiat tortor",
              correctChoice: false,
            },
          ],
        },
      ],
      categories: [
        {
          description: "Foundational Biochemistry",
          size: 1,
        },
      ],
      size: 1,
    },
  },
];

export class BooksDataSource {
  getBooks(): Book[] {
    // simulate fetching a list of books
    return BooksDB;
  }

  // We are using a static data set for this small example, but normally
  // this Mutation would *mutate* our underlying data using a database
  // or a REST API.
  async addBook(book: Book): Promise<AddBookMutationResponse> {
    if (book.title && book.author) {
      BooksDB.push({ title: book.title, author: book.author });

      return {
        code: "200",
        success: true,
        message: "New book added!",
        book,
      };
    } else {
      return {
        code: "400",
        success: false,
        message: "Invalid input",
        book: null,
      };
    }
  }
}
