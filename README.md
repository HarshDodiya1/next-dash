# Next Dash 🚀

A modern, full-stack dashboard application built with Next.js 14, featuring authentication, beautiful UI components, and robust data management capabilities.

## ✨ Features

### 🔐 Authentication & Security
- **NextAuth v5 (Auth.js)** - Complete authentication system
- **Prisma Adapter** - Seamless database integration for auth
- **Password Hashing** - Secure password storage with bcrypt
- **Email Integration** - Email functionality with Resend
- **Form Validation** - Robust form handling with React Hook Form & Zod

### 🎨 Modern UI/UX
- **Radix UI Components** - Accessible, unstyled UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Dark/Light Theme** - Theme switching with next-themes
- **Responsive Design** - Mobile-first responsive layouts
- **Loading States** - Beautiful loading spinners
- **Toast Notifications** - User feedback with Sonner

### 🛠️ Developer Experience
- **TypeScript** - Full type safety
- **Prisma ORM** - Type-safe database operations
- **ESLint & Prettier** - Code formatting and linting
- **Hot Reload** - Fast development with Next.js

## 🚀 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14, React 18 |
| **Authentication** | NextAuth v5, Prisma Adapter |
| **Database** | Prisma ORM |
| **Styling** | Tailwind CSS, Radix UI |
| **Forms** | React Hook Form, Zod |
| **Icons** | Lucide React, React Icons |
| **Email** | Resend |
| **Language** | TypeScript |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher): [Download here](https://nodejs.org/)
- **npm/yarn/pnpm**: Package manager
- **Database**: PostgreSQL, MySQL, or SQLite (configured with Prisma)

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HarshDodiya1/next-dash.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd next-dash
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory and add the following:
   ```bash
   # Database
   DATABASE_URL="your-database-connection-string"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"
   
   # OAuth Providers (if using)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   
   # Email (Resend)
   RESEND_API_KEY="your-resend-api-key"
   ```

5. **Set up the database:**
   ```bash
   npx prisma generate
   ```
   ```bash
   npx prisma db push
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```

7. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000)**

## 📁 Project Structure

```
next-dash/
├── app/                    # Next.js 14 App Router
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🎯 Key Components

### UI Components
- **Avatar** - User profile pictures with fallbacks
- **Dialog/Modal** - Accessible modal dialogs
- **Dropdown Menu** - Context menus and dropdowns
- **Form Controls** - Labels, inputs, selects with validation
- **Switch/Toggle** - Boolean input controls

### Authentication Features
- **Secure Login/Register** - Multiple authentication methods
- **Session Management** - Persistent user sessions
- **Password Security** - Hashed password storage
- **Email Verification** - Account verification system

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔧 Database Commands

| Command | Description |
|---------|-------------|
| `npx prisma generate` | Generate Prisma client |
| `npx prisma db push` | Push schema to database |
| `npx prisma studio` | Open Prisma Studio |
| `npx prisma migrate dev` | Create and apply migration |

## 🎨 Customization

### Theming
The project uses Tailwind CSS with custom theme configuration. You can customize:
- Colors and design tokens
- Component variants with `class-variance-authority`
- Dark/light mode preferences

### Components
All UI components are built with Radix UI primitives, making them:
- Fully accessible (ARIA compliant)
- Keyboard navigable
- Screen reader friendly
- Customizable with CSS

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Prisma Documentation](https://www.prisma.io/docs) - Modern database toolkit
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Harsh Dodiya**
- GitHub: [@HarshDodiya1](https://github.com/HarshDodiya1)

---

⭐ If you found this project helpful, please give it a star!
