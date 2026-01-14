# React Resume Builder

A simple **React** application built with **Vite** that allows users to create, edit, and preview professional resumes. The project demonstrates a clean component architecture, state management with **Zustand**, and PDF generation.

## Features

- **Live editor** with drag‑and‑drop sections
- Multiple **theme** options (light/dark)
- Real‑time **preview** of the resume
- Export to **PDF** using `html2canvas` and `jsPDF`
- Responsive design with **Tailwind CSS**

## Getting Started

```bash
# Clone the repository
git clone https://github.com/vikramkumavat/react-resume-builder.git
cd react-resume-builder

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

```
src/
├─ components/
│  ├─ editor/          # Editing UI (drag‑and‑drop, form fields)
│  ├─ preview/         # Live resume preview component
│  └─ theme/           # Theme controls
├─ layouts/            # Layout variations (e.g., ClassicLayout)
├─ store/              # Zustand stores for resume data and theme
├─ utils/              # Helper functions (PDF download)
├─ App.jsx             # Root component
├─ main.jsx            # Entry point
└─ index.html          # HTML template
```

## Scripts

- `npm run dev` – Starts the Vite dev server.
- `npm run build` – Builds the app for production.
- `npm run preview` – Serves the production build locally.

## Contributing

Feel free to open issues or submit pull requests. Ensure code follows the existing style and runs `npm run lint` before committing.

## License

This project is open‑source and available under the MIT License.
