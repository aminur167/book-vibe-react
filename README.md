# Book Vibe

Book Vibe is a responsive React book discovery application where users can explore books, view detailed book information, manage a read list and wishlist, and track their reading progress through a small analytics dashboard.

This project was built to demonstrate practical React skills including routing, component-based UI design, Context API state management, localStorage persistence, conditional rendering, sorting, and responsive layouts.

## Live Demo

Add your deployed link here:

```txt
https://your-live-site-link.com
```

## Features

- Browse a curated collection of 100 books from JSON data
- Search books by title or author
- Filter books by category and minimum rating
- Sort books by rating, total pages, or publishing year
- Load more books progressively for a faster browsing experience
- View detailed information for each book
- Add books to a Read List
- Add books to a Wishlist
- Prevent duplicate books in Read List and Wishlist
- Automatically remove a book from Wishlist when it is marked as read
- Persist Read List and Wishlist data with localStorage
- Remove books from Read List or Wishlist
- Sort listed books by total pages or rating
- Reading statistics page with:
  - Total books read
  - Total pages read
  - Average rating
  - Highest rated book
- Reading analytics with progress bars and category summary
- Dark and light theme toggle with saved preference
- Toast notifications for user actions
- Responsive navigation and book grid layout
- Responsive, portfolio-ready book details page
- Custom error page for invalid routes
- Reusable JSON template for adding new books safely

## Tech Stack

- React
- React Router
- Context API
- Tailwind CSS
- DaisyUI
- React Icons
- React Tabs
- React Toastify
- Vite
- ESLint

## React Concepts Used

- Functional components
- JSX
- Props
- State management with `useState`
- Shared global state with Context API
- Data loading with React Router loader
- Dynamic routes with route params
- Conditional rendering
- Derived data with `useMemo`
- Controlled form inputs for search, filter, and sort
- Paginated rendering with a reusable custom hook
- localStorage data persistence
- Reusable UI components
- Responsive component layouts

## Project Structure

```txt
src/
  assets/
  components/
    bookDetails/
    homepage/
    listedBooks/
    pageToRead/
    shared/
    ui/
  context/
  hooks/
  layout/
  pages/
    bookDetails/
    books/
    ErrorPage/
    homepage/
    pageToRead/
  routes/
  utils/
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/book-vibe-react.git
```

Go to the project folder:

```bash
cd book-vibe-react
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Key Pages

### Home

Displays the banner section and all available books in a responsive card grid.
Users can search by title or author, filter by category/rating, sort books by rating, pages, or publishing year, and progressively load more results.

### Book Details

Shows detailed book information including author, review, category, tags, rating, publisher, total pages, and publishing year. Users can add the book to Read List or Wishlist from this page, with disabled states for already-added books.

### Listed Books

Contains separate tabs for Read List and Wishlist. Users can sort books by pages or rating and remove books from each list.

### Page to Read

Displays reading statistics based on the user's Read List, including total books, total pages, average rating, highest rated book, page progress bars, and category summary.

## Book Data

The app currently uses a curated static JSON library:

```txt
public/booksData.json
```

The dataset contains 100 books across classic literature, fiction, fantasy, mystery, self-help, biography, computer science, programming, web development, software engineering, database, AI, DevOps, and cybersecurity categories.

To add a new book, copy the structure from:

```txt
public/bookTemplate.json
```

Then paste it into `public/booksData.json` and update the values:

```json
{
  "bookId": 101,
  "bookName": "Book Title",
  "author": "Author Name",
  "image": "https://example.com/book-cover.jpg",
  "review": "Write a clear 4-6 sentence review or summary for this book.",
  "totalPages": 300,
  "rating": 4.5,
  "category": "Programming",
  "tags": ["Tag One", "Tag Two"],
  "publisher": "Publisher Name",
  "yearOfPublishing": 2024
}
```

Important rules:

- Keep `bookId` unique
- Keep `tags` as an array
- Use number values for `totalPages`, `rating`, and `yearOfPublishing`
- Use a working cover image URL for the `image` field
- Do not add a comma after the final object in the JSON array

## Resume Highlight

You can describe this project on your CV like this:

```txt
Built a responsive React book discovery app with React Router, Context API, localStorage persistence, a 100-book JSON dataset, dynamic search/filter/sort, progressive load-more browsing, wishlist/read-list management, theme switching, toast notifications, and a reading analytics dashboard.
```

## Future Improvements

- Add authentication UI
- Add user notes or personal rating for each book
- Add a dedicated chart library for deeper analytics
- Add backend API integration
- Move the static JSON library to a database/API for larger datasets

## Author

**Your Name**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile
