# Quick Reference: CSS Classes & Animations

## Animation Classes

### Fade & Slide
```html
<!-- Fade in with upward motion -->
<div className="animate-fade-in">Content</div>

<!-- Slide in from left -->
<div className="animate-slide-in-left">Content</div>

<!-- Slide in from right -->
<div className="animate-slide-in-right">Content</div>

<!-- Scale/zoom in -->
<div className="animate-scale-in">Content</div>
```

### Continuous Animations
```html
<!-- Gentle pulsing -->
<div className="animate-pulse-slow">Content</div>

<!-- Floating motion -->
<div className="animate-float">Content</div>

<!-- Gradient shift (for backgrounds) -->
<div className="animate-gradient bg-gradient-to-r from-purple-600 to-pink-600">Content</div>
```

### Animation Delays
```html
<div className="animate-fade-in delay-100">Content</div>
<div className="animate-fade-in delay-200">Content</div>
<div className="animate-fade-in delay-300">Content</div>
<div className="animate-fade-in delay-400">Content</div>
<div className="animate-fade-in delay-500">Content</div>
```

## Special Effects

### Glass Morphism
```html
<div className="glass-effect">
  Semi-transparent background with blur
</div>
```

### Gradient Text
```html
<h1 className="gradient-text">
  Beautiful gradient text
</h1>
```

### Card Hover Effect
```html
<div className="card-hover p-6 rounded-lg">
  Lifts up on hover with shadow
</div>
```

## Responsive Classes

### Display
```html
<div className="hide-mobile">Hidden on mobile</div>
<div className="hide-desktop">Hidden on desktop</div>
```

### Common Responsive Patterns
```html
<!-- Spacing -->
<div className="px-4 sm:px-6 lg:px-10">Responsive padding</div>
<div className="gap-4 sm:gap-6 lg:gap-10">Responsive gap</div>

<!-- Text Sizes -->
<h1 className="text-2xl sm:text-3xl lg:text-4xl">Responsive heading</h1>
<p className="text-sm sm:text-base lg:text-lg">Responsive text</p>

<!-- Layouts -->
<div className="grid grid-cols-1 lg:grid-cols-3">Responsive grid</div>
<div className="flex flex-col lg:flex-row">Responsive flex</div>

<!-- Width -->
<div className="w-full sm:w-3/4 lg:w-1/2">Responsive width</div>
```

## Gradient Backgrounds

### Page Gradients
```html
<!-- Purple theme -->
<div className="bg-gradient-to-br from-purple-50 via-white to-blue-50">

<!-- Blue theme -->
<div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">

<!-- Pink theme -->
<div className="bg-gradient-to-br from-pink-50 via-white to-purple-50">

<!-- Green theme -->
<div className="bg-gradient-to-br from-green-50 via-white to-blue-50">
```

### Button Gradients
```html
<button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
  Click me
</button>
```

## Interactive Elements

### Hover Effects
```html
<!-- Scale up -->
<div className="hover:scale-110 transition-transform duration-300">Hover me</div>

<!-- Lift with shadow -->
<div className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">Hover me</div>

<!-- Color change -->
<button className="hover:bg-violet-600 transition-colors duration-300">Hover me</button>

<!-- Rotate -->
<div className="hover:rotate-3 transition-transform duration-300">Hover me</div>
```

### Focus States (Forms)
```html
<input className="border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300" />
```

### Link Underline Animation
```html
<a className="relative group">
  Link text
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
</a>
```

## Staggered Animations

### Using Inline Styles
```tsx
{items.map((item, index) => (
  <div 
    key={item.id}
    className="animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {item.content}
  </div>
))}
```

## Layout Patterns

### Centered Content
```html
<div className="flex items-center justify-center h-full">
  Centered content
</div>
```

### Sticky Header
```html
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
  Navigation
</nav>
```

### Scrollable Container
```html
<div className="overflow-y-auto h-[calc(100%-8rem)]">
  Scrollable content
</div>
```

### Card Grid
```html
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="card-hover p-6 rounded-lg bg-white shadow-lg">Card 1</div>
  <div className="card-hover p-6 rounded-lg bg-white shadow-lg">Card 2</div>
  <div className="card-hover p-6 rounded-lg bg-white shadow-lg">Card 3</div>
</div>
```

## Color Palette

### Primary Colors
- `violet-600` - Main brand color
- `purple-600` - Secondary brand color
- `pink-600` - Accent color
- `blue-600` - Alternative accent

### Background Colors
- `purple-50`, `blue-50`, `pink-50`, `green-50` - Subtle backgrounds
- `white` - Main background
- `gray-50` - Alternative background

### Text Colors
- `gray-900` - Primary text
- `gray-700` - Secondary text
- `gray-600` - Tertiary text
- `gray-500` - Muted text
- `gray-400` - Placeholder text

## Common Combinations

### Animated Card
```html
<div className="animate-fade-in card-hover p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
  Card content
</div>
```

### Gradient Button with Hover
```html
<button className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
  Click me
</button>
```

### Section with Staggered Items
```html
<section className="space-y-8">
  <div className="animate-fade-in delay-100">Item 1</div>
  <div className="animate-fade-in delay-200">Item 2</div>
  <div className="animate-fade-in delay-300">Item 3</div>
</section>
```

### Responsive Navigation Link
```html
<Link 
  href="/page"
  className="text-gray-600 hover:text-violet-600 transition-colors duration-300 hover:scale-105 relative group"
>
  Link Text
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
</Link>
```

## Tips

1. **Combine animations**: Use multiple animation classes for complex effects
2. **Use delays**: Create visual rhythm with staggered animations
3. **Keep it subtle**: Animations should enhance, not distract
4. **Test on mobile**: Ensure animations perform well on all devices
5. **Provide fallbacks**: Not all browsers support all CSS features
6. **Use transitions**: For interactive elements, transitions are smoother than animations
7. **GPU acceleration**: Use `transform` and `opacity` for best performance
8. **Accessibility**: Consider users with motion sensitivity (prefers-reduced-motion)

## Performance Notes

- ✅ Use `transform` instead of `top/left/width/height`
- ✅ Use `opacity` instead of `visibility`
- ✅ Minimize animation complexity
- ✅ Use `will-change` sparingly for critical animations
- ✅ Avoid animating too many elements simultaneously
- ✅ Test on low-end devices
