# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native Expo app called "one-tap" built with TypeScript, using Expo Router for navigation and NativeWind for styling. The app demonstrates NativeWindUI components with proper theming support for both iOS and Android platforms.

## Key Technologies & Architecture

- **Framework**: React Native (0.79.5) with Expo (SDK 53)
- **Navigation**: Expo Router (~5.1.4) with typed routes enabled
- **Styling**: NativeWind (Tailwind CSS for React Native) with custom theme system
- **Typography**: Custom Text component using react-native-uitextview for better text rendering
- **State Management**: React Context for color scheme management
- **Development**: TypeScript with strict mode, ESLint, Prettier

## Development Commands

### Main Commands
- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser

### Code Quality
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Auto-fix ESLint issues and format code with Prettier

## Project Structure

- `app/` - Expo Router pages and layouts (file-based routing)
- `components/` - Reusable UI components
- `components/nativewindui/` - Custom NativeWindUI components
- `lib/` - Utility functions and custom hooks
- `theme/` - Color definitions and theme configuration
- `global.css` - Tailwind CSS base styles and custom CSS variables

## Theme System

The app uses a sophisticated dual-platform theming system:

- **Color Scheme**: Automatic light/dark mode support via `useColorScheme` hook
- **Platform Colors**: Separate color definitions for iOS and Android in CSS variables
- **Theme Toggle**: Manual theme switching available in modal settings
- **Navigation Bar**: Automatic Android navigation bar styling

## Key Components

- `Text` component: Uses UITextView for better text rendering and variant-based styling
- Theme system: Centralized color management with platform-specific adaptations
- Color scheme hook: Handles light/dark mode switching and Android navigation bar updates

## Configuration Files

- `app.json` - Expo configuration with bundle identifiers and platform settings
- `tailwind.config.js` - Custom Tailwind configuration with platform-specific color functions
- `metro.config.js` - Metro bundler configuration with NativeWind integration
- `tsconfig.json` - TypeScript configuration extending Expo's base config with strict mode

## NativeWindUI Components

**IMPORTANT**: Always use components from NativeWindUI (https://nativewindui.com). Do not create custom UI components when NativeWindUI alternatives exist.

### Component Philosophy
- NativeWindUI is a multi-platform collection of reusable components designed to feel native to iOS and Android
- Components are copied directly into the project (not installed via npm)
- Prioritizes platform-specific native feel over universal code

### Available Component Categories

**Screen Templates:**
- Authentication Flow
- Checkout Flow  
- OTP Screen
- Profile Screen
- Settings (iOS/Android styles)
- Messaging Flow

**Individual Components:**
- Action Sheet
- Activity Indicator
- Avatar
- Button
- Card
- Checkbox
- Date Picker
- Form
- Text Field
- Toggle
- Text (already implemented in `components/nativewindui/Text.tsx`)

### Usage Guidelines
1. Always check https://nativewindui.com for existing components before creating new ones
2. Copy components directly from the NativeWindUI website into `components/nativewindui/`
3. Maintain the platform-specific design principles when customizing components
4. Use the existing Text component as a reference for implementation patterns

## Development Notes

- Uses `expo-dev-client` for enhanced development experience
- Supports typed routes via Expo Router experiments
- Custom path mapping with `~/` alias pointing to project root
- Platform-specific styling handled automatically via NativeWind's platformSelect utility
- ESLint configured with Expo preset and Prettier integration
- **UI Development**: Strictly use NativeWindUI components from https://nativewindui.com