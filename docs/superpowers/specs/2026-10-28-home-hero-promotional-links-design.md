# Home Hero Promotional Links

## Intent

Remove the hero's scroll cue and use the space to promote YIMO press coverage and the Graphwar tournament.

## Selected Approach

Keep the existing Format and flyer actions. Add two centered promotional links as a vertical stack beneath them in normal document flow: "YIMO on the news" linking to the supplied San Francisco Post article, followed by "Check out our new game tournament" linking to `https://graphwar.yimo-official.org/`. This avoids the overlap risk of pinning the buttons to the bottom of short mobile viewports.

## Scope

Update only the home hero in `pages/index.vue`: remove the scroll-cue markup and its styles, add the two links, and style them consistently with the existing hero actions. Leave the rest of the hero and site unchanged.

## Verification and Delivery

Run the site's static generation and the existing social-preview test. Push the approved change directly to `welu2027/yimo-website:main` and verify the deployment workflow.
