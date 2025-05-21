# 🎬 Trending Movies App

A simple and responsive web application built with **Next.js** and **Chakra UI**, that fetches and displays trending movies, TV shows, and media from **The Movie Database (TMDB) API**.

Users can toggle between daily and weekly trending content, viewing poster images, ratings, and release dates in a clean and modern interface.

---

## 🚀 Technologies Used

- Next.js (React Framework)
- Chakra UI (Component Library & Styling)
- JavaScript
- Date-fns (Date formatting)
- TMDB API (Data source)

---

## 📱 Features

- 🔥 Display trending movies, TV shows, and media
- 🔄 Toggle between **daily** and **weekly** trending content
- 🎨 Responsive UI with Chakra UI
- 🗓️ Shows release date formatted with `date-fns`
- ⭐ Shows user ratings with circular progress indicators
- 🖼️ Displays poster images from TMDB CDN

---

## 🏗️ Project Structure

```
/pages
  ├── treading/[id].js   # Main trending page by day or week
/components               # UI components (if any separated)
/public                   # Static assets
/styles                   # Global styles if needed
```

---

## 🔗 API Reference

- [TMDB API](https://developer.themoviedb.org/docs)

You must set your API key in a `.env.local` file:

```
NEXT_PUBLIC_SYSTEM_ID=your_tmdb_api_key
```

---

## 💡 How to Run Locally

1. Clone this repository:

```bash
git clone https://github.com/yourusername/trending-movies-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open in your browser:

```
http://localhost:3000
```

---

## 🤝 Contribution

Contributions are welcome! Feel free to open issues, suggest improvements, or submit pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgements

Data provided by [TMDB](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.