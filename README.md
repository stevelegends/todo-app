# Node version
> v20.x

## Start the Metro Server

```bash
yarn start
```

## Start Application

### For Android
```bash
/** Run */
yarn android

/** Release Github Action*/
1. git tag -d "android(version)"
For example: git tag -d android(1.0)

2. git push origin "android(version)"
For example: git push origin "android(1.0)"
```

### For iOS
```bash
yarn ios
```

## TodoApp - Architecture and the technologies used.

>### 1. Navigation
> React Native Navigation to handle all the navigation requirements within the app.

>### 2. State Management
> The application state is managed using Redux Toolkit along with Redux Saga for handling side effects and workflows.

>### 3. Animations
> Animations using React Native Reanimated. This library allows for complex animations and interactions.

>### 4. Component Management
> Following the Atomic Design principles. This approach divides components into Atoms, Molecules, Organisms, making the UI development more systematic and scalable.

>### 5. Local Database
> Realm as the local database to store and manage data.

>### 6. Database Security
> The local Realm database is encrypted using AES-256 + SHA-2 encryption by providing a 64-byte encryption key when opening a realm. Realm encrypts and decrypts data transparently with standard AES-256 encryption using the first 256 bits of the 512-bit encryption key and uses the remaining 256 bits for integrity validation with HMAC.

>### 7. Performance Optimization
> Optimized for performance using Hermes. JavaScript engine optimized for running React Native, reducing the app's size and improving its load time.

>### 8. Unit Testing
> unit testing for create, read, update, and delete operations on the Realm database is implemented to ensure data integrity and reliability.

>### 9. CI/CD
> Continuous Integration and Continuous Deployment (CI/CD) are set up using GitHub Actions. This setup includes building the APK, creating tags, and releasing versions on GitHub. Automation ensures a consistent and efficient development workflow.
