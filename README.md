# User Management System

## 📑 Table of Contents
1. [Project Demo](#-project-demo)
2. [Project Overview](#-project-overview)
3. [Features](#-features)
4. [Technologies Used](#-technologies-used)
5. [Prerequisites](#-prerequisites)
6. [Detailed Installation Guide](#-detailed-installation-guide)
7. [Required Extensions & Packages](#-required-extensions--packages)
8. [Project Setup & Configuration](#-project-setup--configuration)
9. [Running the Application](#-running-the-application)
10. [File Structure](#-file-structure)
11. [Usage Guide](#-usage-guide)
12. [Special Features](#-special-features)
13. [Future Improvements](#-future-improvements)
14. [Contributing](#-contributing)
15. [License](#-license)
16. [Authors](#-authors)
17. [Acknowledgments](#-acknowledgments)

## 🎥 Project Demo
Here's a quick demonstration of the key features:

<video controls src="https://user-images.githubusercontent.com/akarshweb/ums/main/UMS-Angular.mp4" title="https://github.com/akarshweb/ums/assets/YOUR_ASSET_ID/your-video-file.mp4"></video>


## 📋 Project Overview
A comprehensive user management system built with Angular 19, featuring user creation, listing, and detail views with theme customization capabilities. The system provides an intuitive interface for managing user data with advanced features like searching, sorting, and responsive design.

## 🚀 Features

### Core Features
- User Creation with validation
- User Listing 
- Detailed User View
- Theme Customization (Dark/Light mode)
- Responsive Design
- Search Functionality


### Advanced Features
- Dynamic theme switching 
- Animated transitions and components
- Form validation with real-time feedback
- Advanced grid functionality
- Collapsible sidebar navigation

## 💻 Technologies Used

### Core Technologies
- Angular 19.0.0
- TypeScript 5.6.2
- RxJS 7.8.0
- SCSS

### UI Libraries
- Syncfusion Angular UI Components v28.1.x
  - Grid Module
  - Calendar Module
  - Navigation Module

### Development Tools
- Node.js
- npm
- Angular CLI
- Visual Studio Code

## 📦 Prerequisites

Before starting the installation, ensure you have the following installed on your Windows system:

1. **Node.js**
   - Download from: https://nodejs.org/
   - Recommended version: 18.x or higher
   - Verify installation: `node --version`

2. **npm (Node Package Manager)**
   - Comes with Node.js
   - Verify installation: `npm --version`

3. **Git**
   - Download from: https://git-scm.com/downloads
   - Verify installation: `git --version`

4. **Visual Studio Code**
   - Download from: https://code.visualstudio.com/

## 📥 Detailed Installation Guide

### Step 1: Setting Up Development Environment

1. **Install Node.js**
   ```bash
   # Download and run Node.js installer from https://nodejs.org/
   # Follow installation wizard
   # Open Command Prompt and verify installation
   node --version
   npm --version
   ```

2. **Install Angular CLI**
   ```bash
   # Open Command Prompt as Administrator
   npm install -g @angular/cli
   # Verify installation
   ng version
   ```

### Step 2: Project Setup

1. **Clone the Repository**
   ```bash
   # Navigate to desired directory
   cd C:\Users\YourUsername\Documents
   # Clone the repository
   git clone https://github.com/yourusername/user-management-system.git
   # Navigate to project directory
   cd user-management-system
   ```

2. **Install Dependencies**
   ```bash
   # Install all required packages
   npm install
   # This might take a few minutes
   ```

### Step 3: VSCode Setup

1. **Install Required Extensions**
   - Open VSCode
   - Go to Extensions (Ctrl+Shift+X)
   - Install the following:
     - Angular Language Service
     - TypeScript Importer
     - SCSS Formatter
     - ESLint
     - Prettier

## 🔧 Required Extensions & Packages

### VSCode Extensions
- Angular Language Service
- TypeScript Importer
- SCSS Formatter
- ESLint
- Prettier
- Angular Snippets
- Material Icon Theme (recommended)

### NPM Packages
```json
{
  "dependencies": {
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/compiler": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@syncfusion/ej2-angular-base": "^28.1.33",
    "@syncfusion/ej2-angular-calendars": "^28.1.37",
    "@syncfusion/ej2-angular-grids": "^28.1.38",
    "@syncfusion/ej2-angular-navigations": "^28.1.37"
  }
}
```

## ⚙️ Project Setup & Configuration

1. **Environment Setup**
   ```bash
   # Create environments directory
   mkdir src/environments
   ```

2. **Syncfusion Configuration**
   - Register for free Syncfusion license
   - Add license key in `main.ts`

3. **Theme Configuration**
   - Configure color variables in `styles.scss`
   - Set up theme service

## 🏃‍♂️ Running the Application

1. **Development Server**
   ```bash
   # Start the server
   ng serve
   ```

2. **Access Application**
   - Open browser
   - Navigate to `http://localhost:4200`

3. **Building for Production**
   ```bash
   # Create production build
   ng build --configuration=production
   ```

## 📁 File Structure

```
user-management-system/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── user-create/
│   │   │   ├── user-detail/
│   │   │   └── user-list/
│   │   ├── services/
│   │   │   ├── theme.service.ts
│   │   │   └── user.service.ts
│   │   └── [app configuration files]
│   └── [other source files]
├── angular.json
├── package.json
└── [configuration files]
```   


## 📝 Usage Guide

### Creating a New User
1. Click "Create User" in sidebar
2. Fill in required fields:
   - Name (letters only, 3-30 characters)
   - Address (10-40 characters)
   - Date of Birth
3. Submit form

### Managing Users
1. View user list in grid
2. Use search bar for filtering
3. Click row for detailed view
4. Toggle theme using theme button


## 🔍 Special Features

### Advanced Search Implementation
- Real-time search functionality
- Multiple search criteria:
  - Name
  - Address
  - Age
- Debounced search to optimize performance
- Case-insensitive search
- Highlights matching results

```typescript
// Search implementation in user-list.component.ts
applySearch() {
  const term = this.searchTerm.toLowerCase();
  this.filteredUsers = this.users.filter(
    (user) =>
      user.name.toLowerCase().includes(term) ||
      user.address.toLowerCase().includes(term) ||
      user.age.toString().includes(term)
  );
}
```

## 🚀 Future Improvements

### Authentication & Authorization
- User authentication system
- Role-based access control
- Session management

### Data Management
- Backend API integration
- Database connectivity
- Data caching
- Offline support

### UI/UX Enhancements
- Advanced filtering options
- Bulk user operations
- Export functionality (CSV, PDF)
- User profile images
- Interactive dashboard
- Activity logs
- User statistics

### Technical Improvements
- Unit test coverage
- E2E testing
- Performance optimization
- Real-time updates


### Additional Features
- User groups management
- Email notifications
- Password reset functionality
- Multi-language support
- Custom theme creator
- Data import/export

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: For any issues or questions, please create a new issue in the repository or contact the maintainers.


## 👥 Authors

Akarsh R - Initial work - [@akarshweb](https://github.com/akarshweb)



## 🙏 Acknowledgments

- Syncfusion for their excellent UI components
- Angular team for the fantastic framework
- The open-source community



Note: This project is part of a learning initiative and is continuously being improved. Feedback and contributions are welcome!
