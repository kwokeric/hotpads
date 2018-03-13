### PhotoGallery component

Features:
- Takes in an array of images.
- Each image has a url and a caption.
- The captions are displayed over the image.
- Users are able to click or swipe through images.
- Transitions are smoothly animated.
- Edge cases:
  - Throttling on buttons
  - Users cannot click or swipe past the first or last images
  - If an image is missing a url or caption, it is not rendered

### Possible improvements

- Use of a state organizer like Redux to store photo data (as the app becomes more complex)
- Refactoring components into smaller, reusable components - ex: photo component that may take different shapes, sizes, and show different properties
- Addition of a spinner to indicate loading status
- Limiting photo rendering to "above the fold" to improve performance, ie:  render photos as the user scrolls
