# Trendies Wallet

A modern, feature-rich wallet application built with React, Vite, and Tailwind CSS. Manage your payment methods and gift cards with a beautiful, responsive interface.

## ✨ Features

### 💳 Payment Methods Management
- **Add New Cards**: Complete card form with validation
- **Edit Existing Cards**: Modify cardholder name, CVV, and preferred status
- **Delete Cards**: Remove cards with confirmation
- **Set Preferred Card**: Mark one card as preferred (only one can be preferred)
- **Card Display**: Shows masked card numbers, expiry dates, and cardholder names
- **Persistent Storage**: All card data is saved to localStorage and persists across browser sessions

### 🎁 Gift Card Redemption
- **Redeem Gift Cards**: Enter gift card codes to add credit to your account
- **Success/Error States**: Visual feedback for successful or failed redemptions
- **Demo Codes**: Built-in demo gift codes for testing
- **Real-time Validation**: Instant feedback on code validity

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Tab Navigation**: Clean tab interface for switching between Payment Methods and Gift Cards
- **Smooth Animations**: Fade-in animations for modals and status messages
- **Glassmorphism Effects**: Modern modal design with backdrop blur
- **Hover States**: Interactive elements with smooth hover transitions
- **Gradient Buttons**: Beautiful gradient styling for primary actions

### 🔧 Technical Features
- **Component Architecture**: Modular, reusable components
- **Common Components**: Shared Input, Button, and Modal components
- **Utility Functions**: Helper functions for card and gift card operations
- **State Management**: React hooks for efficient state management
- **Form Validation**: Client-side validation for all forms
- **Error Handling**: Graceful error handling and user feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TestAssignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Input.jsx           # Reusable input component
│   │   └── Modal.jsx           # Reusable modal component
│   ├── PaymentMethods.jsx      # Payment methods management
│   ├── AddCardForm.jsx         # Add/edit card form
│   ├── GiftCards.jsx           # Gift card redemption
│   └── Tabs.jsx                # Tab navigation
├── utils/
│   ├── cardUtils.js            # Card-related utility functions
│   └── giftCardUtils.js        # Gift card utility functions
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles with Tailwind
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **LocalStorage** - Client-side data persistence

## 🎯 Key Features Explained

### Payment Methods
- **Add Card**: Complete form with cardholder name, card number (with formatting), expiry date, CVV, and preferred status
- **Edit Card**: Modify existing card details (cardholder name, CVV, preferred status)
- **Delete Card**: Remove cards with a single click
- **Preferred Card**: Only one card can be marked as preferred at a time
- **Data Persistence**: All changes are automatically saved to localStorage

### Gift Cards
- **Redeem Codes**: Enter gift card codes to add credit
- **Demo Codes**: Test with built-in codes: `WELCOME50`, `FRIEND10`, `SAVE25`, `TRENDIES100`
- **Visual Feedback**: Success and error messages with animations
- **Real-time Updates**: Immediate feedback on code validation

### Component Architecture
- **Reusable Components**: Common Button, Input, and Modal components
- **Separation of Concerns**: Each feature has its own component
- **Props-based Communication**: Clean data flow between components
- **Utility Functions**: Shared helper functions for common operations

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with modern aesthetics
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Animations**: Smooth transitions and micro-interactions
- **Color Scheme**: Professional blue and purple gradient theme

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style
- ESLint configuration included
- Consistent code formatting
- Component-based architecture
- Utility functions for reusability

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Vite for optimal development experience
- Styled with Tailwind CSS for rapid UI development
- Icons provided by Google Material Symbols
- Modern web development best practices

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
