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
- Toast notifications for user actions
- Responsive navigation and book grid layout
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

### Book Details

Shows detailed book information including author, review, category, tags, publisher, total pages, and publishing year. Users can add the book to Read List or Wishlist from this page.

### Listed Books

Contains separate tabs for Read List and Wishlist. Users can sort books by pages or rating and remove books from each list.

### Page to Read

Displays reading statistics based on the user's Read List, including total books, total pages, average rating, and highest rated book.

## Resume Highlight

You can describe this project on your CV like this:

```txt
Built a responsive React book discovery app with React Router, Context API, localStorage persistence, dynamic sorting, wishlist/read-list management, toast notifications, and a reading analytics dashboard.
```

## Future Improvements

- Add book search by title and author
- Add category and rating filters
- Add charts for reading progress
- Add authentication UI
- Add dark/light theme toggle
- Add user notes or personal rating for each book
- Improve mobile layout for the book details page

## Author

**Your Name**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile
