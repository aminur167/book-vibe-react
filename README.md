# Book Vibe

Book Vibe is a responsive React book discovery application where users can explore books, view detailed book information, manage a read list and wishlist, and track their reading progress through a small analytics dashboard.

This project was built to demonstrate practical React skills including routing, component-based UI design, Context API state management, localStorage persistence, conditional rendering, sorting, and responsive layouts.

## Live Demo

Add your deployed link here:

```txt
https://your-live-site-link.com
```

## Features

- Browse a collection of books from JSON data
- Search books by title or author
- Filter books by category and minimum rating
- Sort books by rating, total pages, or publishing year
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
- localStorage data persistence
- Reusable UI components
- Responsive component layouts

## Project Structure

```txt
src/
  assets/
  components/
    homepage/
    listedBooks/
    shared/
    ui/
  context/
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
Users can search by title or author, filter by category/rating, and sort books by rating, pages, or publishing year.

### Book Details

Shows detailed book information including author, review, category, tags, rating, publisher, total pages, and publishing year. Users can add the book to Read List or Wishlist from this page, with disabled states for already-added books.

### Listed Books

Contains separate tabs for Read List and Wishlist. Users can sort books by pages or rating and remove books from each list.

### Page to Read

Displays reading statistics based on the user's Read List, including total books, total pages, average rating, highest rated book, page progress bars, and category summary.

## Resume Highlight

You can describe this project on your CV like this:

```txt
Built a responsive React book discovery app with React Router, Context API, localStorage persistence, dynamic search/filter/sort, wishlist/read-list management, theme switching, toast notifications, and a reading analytics dashboard.
```

## Future Improvements

- Add authentication UI
- Add user notes or personal rating for each book
- Add a dedicated chart library for deeper analytics
- Add backend API integration

## Author

**Your Name**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile
