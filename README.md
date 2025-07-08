# Angular Version 19 Concepts - Signals
Topics :

Signals - A different way of detecting changes

- Signals are new way of detecting the changes and updating the UI
- Without Signals Angular relies on classic change detection mechanism (Zone based Change Detection Mechanism)
- Under the hood , this change detection using a library called Zone.JS

# Advantage of classic Change Detection till Angular version16

- changes are detected automatically
- UI  is updated automatically

# Downside

- overall app performance could be better and bundle size is increased, because of zone.js 
- since angular has to watch all those changes and check all the data , overall app performance is not better
- overall bundle size increase with library

# That's why Signals introduced?

- allowed angular to remove dependency on zone.js
- no automatic change detection - you 'tell' angular when data changes
- angular updates only the parts of the UI where the data("signals") is used

- slightly more work, But full control, better performance & smaller bundle.

# Creating a Signal
