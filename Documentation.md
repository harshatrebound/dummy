# Team Building Website Documentation

---

## **1. Project Requirements Document (PRD)**

### **Objective**

Build a user-friendly, SEO-optimized team-building website using Next.js as the frontend framework, Directus as the headless CMS, and PostgreSQL as the database.

### **Features**

- **Homepage**: Hero section, brief overview, testimonials, and call-to-action.
- **Activities**: Showcase of available team-building activities.
- **Events**: Blueprints for events like Christmas parties, Annual Day, etc.
- **Blog**: A blog page for tips, updates, and stories.
- **Landing Page Template**: Customizable templates for specific campaigns.
- **Contact Us**: Form for inquiries.
- **About Us**: Details about the company.

### **Non-Functional Requirements**

- Responsive design.
- High-performance and scalable architecture.
- Optimized for SEO with meta fields and structured data.

### **Target Audience**

Corporate teams looking for team-building activities.

---

## **2. Architecture Overview**

### **Technology Stack**

- **Frontend**: Next.js
- **Backend**: Directus (connected to PostgreSQL)
- **Database**: PostgreSQL
- **Hosting**: Vercel (Frontend) & AWS/DigitalOcean for Directus and PostgreSQL

### **Communication Flow**

1. **Frontend (Next.js)** communicates with **Directus API** via REST or GraphQL.
2. **Directus** handles the content and provides API endpoints for:
   - Activities
   - Events
   - Blog Posts
   - Contact Submissions
   - Metadata for SEO
3. Data is stored and retrieved from **PostgreSQL**, managed by Directus.

---

## **3. PUML Diagram**

```markdown
@startuml

package "Frontend (Next.js)" {
  component HomePage
  component ActivitiesPage
  component EventsPage
  component BlogPage
  component ContactUsPage
  component AboutUsPage
}

package "Backend (Directus)" {
  component "Directus API"
}

package "Database (PostgreSQL)" {
  component "Activities"
  component "Events"
  component "Blogs"
  component "Contacts"
  component "SEO Metadata"
}

HomePage --> "Fetch data" : Directus API
ActivitiesPage --> "Fetch data" : Directus API
EventsPage --> "Fetch data" : Directus API
BlogPage --> "Fetch data" : Directus API
ContactUsPage --> "Send form data" : Directus API
Directus API --> PostgreSQL : "CRUD Operations"

@enduml
```

---

## **4. Phase-wise Plan**

### **Phase 1: Setup and Configuration**

- Set up Next.js project.
- Deploy Directus and connect to PostgreSQL.
- Configure Directus collections for:
  - Activities
  - Events
  - Blog Posts
  - Contacts
  - SEO Metadata
- Create a `.env.example` file to document required environment variables.

### **Phase 2: Frontend Development**

- Build static pages:
  - Homepage
  - About Us
  - Contact Us
- Build dynamic pages using Directus API:
  - Activities
  - Events
  - Blog

### **Phase 3: Backend Integration**

- Integrate Directus API with Next.js using Axios or SWR.
- Configure data fetching methods (SSG/SSR based on page requirements).

### **Phase 4: Advanced Features**

- Add filtering and search functionality to Activities and Blog pages.
- Implement reusable landing page templates.
- Build an admin-friendly Directus dashboard for easy content updates.

### **Phase 5: SEO Optimization**

- Add meta fields in Directus for SEO.
- Configure structured data for rich snippets.
- Integrate Open Graph and Twitter Card metadata.
- Implement sitemap and robots.txt.

### **Phase 6: Deployment and Testing**

- Deploy the Next.js site to Vercel.
- Deploy Directus and PostgreSQL to AWS/DigitalOcean.
- Perform end-to-end testing.

---

## **5. Developer Guidelines**

### **Coding Standards**

- Follow Next.js and React best practices.
- Use ESLint and Prettier for code formatting.
- Write modular and reusable components.

### **Data Fetching**

- Use static generation (SSG) for SEO-critical pages.
- Use server-side rendering (SSR) for dynamic pages requiring real-time data.

### **Directus API**

- Use GraphQL for efficient data fetching.
- Secure API requests with access tokens.

### **Database Design**

- Normalize data for Activities, Events, and Blogs.
- Use UUIDs for primary keys.

---

## **6. SEO Strategy**

### **Meta Fields**

Add the following fields in Directus for each collection:

- Meta Title
- Meta Description
- Keywords
- Canonical URL
- Open Graph Title
- Open Graph Description
- Open Graph Image

### **On-Page Optimization**

- Use semantic HTML tags.
- Optimize images with next/image.
- Use lazy loading for assets.

### **Technical SEO**

- Configure sitemap.xml.
- Implement robots.txt.
- Use Schema.org structured data.
- Enable server-side rendering for critical pages.

### **Content Strategy**

- Publish blogs regularly.
- Focus on long-tail keywords.
- Optimize headings (H1, H2, H3) with target keywords.

---

## **7. Deliverables**

### **Documents**

1. Project Requirements Document (PRD)
2. Database Schema Design
3. API Documentation (Directus endpoints)
4. SEO Checklist
5. Deployment Guide
6. User Manual for Admins

---

### **Final Note**

The proposed plan ensures a structured and scalable approach to building a feature-rich team-building website. Each phase and document is designed to guide developers and stakeholders toward achieving project goals efficiently.

