---
trigger: model_decision
description: Content that exceeds container, Empty States , Loading States , Form Submission
---

Edge Case 1: Long Content Overflow

Rule: Content that exceeds container should truncate with ellipsis or scroll.

tsx
<div className="truncate text-zinc-600">
  Very long title...
</div>

// OR for multiline:
<div className="line-clamp-2 text-zinc-600">
  Very long description that might wrap...
</div>

Edge Case 2: Empty States

Rule: Always show empty state UI when no tiles exist.

tsx
{tiles.length === 0 ? (
  <div className="text-center py-12">
    <p className="text-zinc-500">No tiles yet. Click Add to create one.</p>
  </div>
) : (
  <div className="grid...">
    {tiles.map(...)}
  </div>
)}

Edge Case 3: Loading States

Rule: Show loading spinner or skeleton while fetching data (Phase 2).

tsx
{isLoading ? (
  <div className="text-center py-12">
    <span className="material-symbols-outlined animate-spin">
      loading
    </span>
  </div>
) : (
  // content
)}

Edge Case 4: Form Submission

Rule: Disable button and show loading state while submitting.

tsx
<button
  disabled={isSubmitting}
  className="disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? 'Saving...' : 'Save'}
</button>