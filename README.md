# TeamSync Pro

A modern team building and event management platform built with Next.js 13+ and Directus.

## Features

- 🎨 Modern, Apple-inspired UI/UX
- 🚀 Built with Next.js 13+ App Router
- 💾 Directus Headless CMS Integration
- 🎯 Team Building Activities Management
- 📅 Event Scheduling and Booking
- 📊 Analytics Dashboard
- 🔐 Secure Authentication
- 💳 Payment Processing
- 📱 Responsive Design
- ⚡ Optimized Performance

## Tech Stack

- **Frontend**: Next.js 13+, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Directus Headless CMS
- **Database**: PostgreSQL
- **Deployment**: Railway

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/harshatrebound/dummy.git
   cd dummy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_DIRECTUS_URL=your_directus_url
   NEXT_PUBLIC_API_TOKEN=your_directus_api_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Railway

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add the following environment variables:
   - `NEXT_PUBLIC_DIRECTUS_URL`
   - `NEXT_PUBLIC_API_TOKEN`
4. Deploy!

## Project Structure

```
├── docs/               # Documentation
├── public/            # Static assets
├── src/
│   ├── app/          # Next.js 13 app directory
│   ├── components/   # React components
│   │   ├── layout/   # Layout components
│   │   ├── sections/ # Page sections
│   │   └── ui/       # UI components
│   └── lib/          # Utilities and helpers
├── .env              # Environment variables
└── tailwind.config.js # Tailwind configuration
```

## Development

- Run development server: `yarn dev`
- Build for production: `yarn build`
- Start production server: `yarn start`
- Run linter: `yarn lint`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
