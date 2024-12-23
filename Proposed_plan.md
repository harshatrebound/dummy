**Proposed Frontend Plan (Next.js + Directus)**

Below is an incremental plan to set up the frontend in Next.js. We’ll prepare our minimal scaffolding so that all Directus variables can be conveniently added to a simple .env file, and we’ll keep everything modular for easy scaling. Afterwards, we’ll look at building the Directus collections and configuring the CMS side.

---

### 1. Directory Structure

A recommended minimal directory structure for the Next.js app:

```
├── .env          // Will hold Directus environment variables
├── next.config.js
├── package.json
├── public
├── README.md
├── pages
│   ├── index.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── [dynamic-pages].tsx
├── components
│   ├── Layout.tsx
│   └── ...
├── services
│   └── directus.ts
├── styles
│   └── globals.css
└── ...
```

Keeping a dedicated `services` folder helps isolate data-fetching logic from Directus, ensuring our pages and components remain focused on UI/UX.

---

### 2. Environment Variable Setup

Create a `.env` file (not committed to version control) for your Directus environment variables:

```
DIRECTUS_URL=https://your-directus-instance.example.com
DIRECTUS_STATIC_TOKEN=yourDirectusStaticTokenOrAccessKey
```

- **`DIRECTUS_URL`**: Points to the base URL of the Directus API.  
- **`DIRECTUS_STATIC_TOKEN`**: Could be a public or protected token, depending on your usage.

You may add additional variables for chunked file uploads, custom endpoints, or anything else needed as the app grows.

---

### 3. Basic Service to Fetch Data from Directus

Below is an example of a minimal TypeScript service to handle data fetching from Directus. This file is new, so we’ll include the path in the code block.

````typescript:services/directus.ts
/**
 * Directus Service
 * 
 * This service encapsulates all Directus API calls.
 */

export interface DirectusItem {
  id: string;
  title: string;
  // Extend this interface based on your collection fields
}

const directusUrl = process.env.DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_STATIC_TOKEN;

// Example fetch function
export async function fetchItems(collection: string) {
  if (!directusUrl || !directusToken) {
    throw new Error("Missing Directus configuration in environment variables");
  }

  const res = await fetch(`${directusUrl}/items/${collection}`, {
    headers: {
      Authorization: `Bearer ${directusToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Error fetching data from Directus: ${res.statusText}`);
  }

  const data = await res.json();
  return data.data as DirectusItem[];
}
````

- We expose a simple `fetchItems` function for retrieving data from a collection.  
- In a real app, add more robust error handling, pagination, or caching (e.g., using SWR or React Query).  
- Token-based authorization is applied in headers.

---

### 4. Example Usage in Pages

Here’s a small example of using our new service in the homepage (`pages/index.tsx`). We’ll perform server-side data fetching via Next.js to showcase SEO benefits (SSR).

````typescript:pages/index.tsx
import React from "react";
import { fetchItems, DirectusItem } from "../services/directus";

interface HomePageProps {
  activities: DirectusItem[];
}

export default function HomePage({ activities }: HomePageProps) {
  return (
    <div>
      <h1>Welcome to the Team Building Platform</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Using getServerSideProps for dynamic SSR
export async function getServerSideProps() {
  const activities = await fetchItems("activities");
  return { props: { activities } };
}
````

- Server-side rendering (SSR) ensures crawlers see the full HTML content for better SEO.  
- If you prefer static generation (SSG) for speed and caching, replace `getServerSideProps` with `getStaticProps` and handle revalidation, if needed.

---

### 5. Next Steps & Incremental Improvements

1. **Reusable UI Components**  
   - Create a `Layout.tsx` in `components` that wraps common elements (header, footer, etc.).  
   - Use progress indicators or skeleton loaders when data is being fetched on the client.

2. **SEO & Meta Tags**  
   - Configure Next.js `Head` for dynamic meta tags driven by data from Directus.  
   - Create a utility function to handle meta data from the SEO collection in Directus.

3. **File Upload Handling**  
   - Incorporate chunked file uploads if needed (8MB threshold).  
   - Provide real-time progress bars for user feedback.

4. **Accessibility (A11y)**  
   - Ensure headings are semantic (H1, H2, etc.).  
   - Add ARIA labels on interactive elements.  
   - Support keyboard navigation and focus states.

5. **Testing & Error Boundaries**  
   - Integrate testing (e.g., Jest + React Testing Library).  
   - Use React error boundaries or Next.js error pages for graceful fallback UI.

6. **Documentation & Changelog**  
   - Maintain a detailed `changelog.md` for every refactor or feature addition.  
   - Use the existing “Documentation.md” or create a new file if needed.

---

### 6. Potential Collections in Directus

For the team-building site, you’ll likely need these initial Directus collections (we can build them through Python scripts or manually in Directus):

- **activities**  
  - title (string)  
  - description (long text)  
  - image (file)  
  - tags (CSV or JSON array)  
- **events**  
  - name (string)  
  - detailed_description (long text)  
  - date (datetime)  
  - location (string)  
- **blog_posts**  
  - title (string)  
  - content (long text)  
  - author (string or relation)  
  - published_date (datetime)  
- **seo_metadata**  
  - meta_title (string)  
  - meta_description (text)  
  - keywords (text)  
  - open_graph_image (file)  

This structure aligns with the Documentation.md requirements.

---

## Summary

1. **Create .env** to store `DIRECTUS_URL` and `DIRECTUS_STATIC_TOKEN`.  
2. **Implement a Directus service** (`services/directus.ts`) to handle all data fetching.  
3. **Use SSR or SSG** in each Next.js page to fetch data.  
4. **Gradually enhance** the UI with a shared `Layout`, SEO metadata integration, and thorough error handling.  
5. **Document everything** in a changelog or in existing documentation for future reference.

Following this plan ensures a solid, incremental approach to building a robust, user-focused Next.js frontend, with the agility to easily integrate Directus and scale as requirements evolve.  
