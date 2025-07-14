# 74th Indian Pharmaceutical Congress 2025 Website

This is the official website for the 74th Indian Pharmaceutical Congress 2025, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design tailored for pharmaceutical conferences
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Dynamic components for schedule filtering, registration forms, and more
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **Accessibility**: Designed with accessibility best practices
- **SEO Optimized**: Comprehensive meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Conference Information

- **Event**: 74th Indian Pharmaceutical Congress
- **Theme**: "Innovating Healthcare for Tomorrow"
- **Dates**: February 15-17, 2025
- **Venue**: India Expo Centre, Greater Noida, Delhi NCR
- **Expected Attendees**: 5000+
- **Countries**: 50+

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   └── sections/         # Page sections
│       ├── Hero.tsx      # Hero section
│       ├── About.tsx     # About section
│       ├── KeyFeatures.tsx # Features section
│       ├── Speakers.tsx  # Speakers section
│       ├── Schedule.tsx  # Schedule section
│       ├── Registration.tsx # Registration section
│       ├── Sponsors.tsx  # Sponsors section
│       └── Contact.tsx   # Contact section
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
└── types/               # TypeScript type definitions
    └── index.ts         # Type definitions
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/vinita-choudhary/74ipc-2025-website.git
   cd 74ipc-2025-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The project uses a pharmaceutical-themed color palette defined in `tailwind.config.ts`. You can customize the colors by modifying the theme configuration.

### Content
Most content is located in the component files under `src/components/sections/`. Update these files to modify the conference information, speakers, schedule, etc.

### Styling
The project uses Tailwind CSS for styling. Custom styles are defined in `src/app/globals.css`.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://74ipc2025.org
NEXT_PUBLIC_CONTACT_EMAIL=info@74ipc2025.org
```

### Site Metadata
Update site metadata in `src/app/layout.tsx` for SEO optimization.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Core Web Vitals**: Optimized for Google's Core Web Vitals
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Efficient caching strategies

## 🔒 Security

- **HTTPS**: SSL/TLS encryption
- **Content Security Policy**: Protection against XSS attacks
- **Form Validation**: Client and server-side validation
- **Rate Limiting**: Protection against spam and abuse

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@74ipc2025.org
- **Phone**: +91 123 456 7890
- **Website**: https://74ipc2025.org

## 🙏 Acknowledgments

- Indian Pharmaceutical Congress organizing committee
- All sponsors and partners
- The pharmaceutical community
- Open source contributors

---

**Built with ❤️ for the pharmaceutical community**